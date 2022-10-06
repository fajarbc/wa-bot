const { findMention } = require("../../helpers/mentions");

describe("Helpers: mentions", function () {
  it("found", async function () {
    const result = await findMention("!hi @{mention}");
    expect(result).toBeTrue();
  });
  it("not found", async function () {
    const result = await findMention("!hi @{{mention}");
    expect(result).toBeFalse();
  });
});
