async function loadESM() {
}

module.exports = {
    findMention: async (text) => {
    const findPattern = await import("anagram-palindrome").then(m => m.findPattern );
    const result = findPattern("@{mention}", text, {
      caseSensitive: true,
      space: true,
      unique: true,
    });

    return !!result.length;
  },
};
