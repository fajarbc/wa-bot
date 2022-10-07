const { findPattern } = require("anagram-palindrome")
module.exports = {
    hasMention: async (text) => {
    const result = findPattern("@{mention}", text, {
      caseSensitive: true,
      space: true,
      unique: true,
    });

    return !!result.length;
  },
};
