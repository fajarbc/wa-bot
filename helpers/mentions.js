const { findPattern } = require("anagram-palindrome")
module.exports = {
    findMention: async (text) => {
    const result = findPattern("@{mention}", text, {
      caseSensitive: true,
      space: true,
      unique: true,
    });

    return !!result.length;
  },
};
