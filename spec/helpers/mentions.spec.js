const { hasMention } = require("../../helpers/mentions");

describe("Helpers: mentions", function () {
  it("found", async function () {
    const result = await hasMention("!hi @{mention}");
    expect(result).toBeTrue();
  });
  it("not found", async function () {
    const result = await hasMention("!hi @{{mention}");
    expect(result).toBeFalse();
  });
});
