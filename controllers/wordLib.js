const fiveLetterWordLib = require("../assets/fiveLetterWordLib").arr

module.exports = {
    getWordToType: async (req, res) => {
      try {
        let random = Math.floor(Math.random() * fiveLetterWordLib.length)
        res.json(fiveLetterWordLib[random])
      } catch (err) {
        console.log(err);
      }
    },
}