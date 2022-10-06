const { Client, LocalAuth, Buttons, List } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const AutoReply = require("./models/AutoReplyModel");
const { findMention } = require("./helpers/mentions");

function newClient(PHONE_NUMBER) {
  const client = new Client({
    authStrategy: new LocalAuth({ clientId: PHONE_NUMBER }),
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", async () => {
    console.log("Whatsapp is ready!");
    await client.sendPresenceUnavailable();
  });

  client.on("message", async (msg) => {
    console.log(msg.body);
    if (!msg.body.startsWith("!") || msg.fromMe) return;

    const chat = await msg.getChat();
    const contact = await msg.getContact();

    if (msg.body == "!info") {
      const info = client.info;
      msg.reply(
        `Name: ${info.pushname}\nNumber: ${info.wid.user}\nPlatform: ${info.platform}`
      );
    } else if (msg.body === "!reaction") {
      msg.react("👍");
    } else {
      const response = await AutoReply.find({ message: msg.body });
      if (response.length) {
        let reply = response[0].reply;
        const haveMention = await findMention(reply);
        if (haveMention)
          chat.sendMessage(reply.replace("@{mention}", `@${contact.id.user}`), {
            mentions: [contact],
          });
        else chat.sendMessage(reply);
      }
      // else
      // chat.sendMessage("no response");
    }
  });

  client.initialize();
}

module.exports = {
  client: newClient,
};
