const MORSE_CODE = require('./MorseCodeDic.js');

module.exports = {
    decodeMorse: function (morseCode) {

        function decodeCharacterByMap(character) {
            for (let i in MORSE_CODE) {
              if (MORSE_CODE[i] === character)
              {
                  return i
              }
            }
            return '';
        }

        return morseCode
            .trim()
            .split("   ")
            .map(data => data.split(" ")
                .map(char => decodeCharacterByMap(char))
                .join(""))
            .join(" ");
    },
    encodeMorse: function (str) {
            let MorseCode = str.split('');
            for (let j in MorseCode) MorseCode[j] = MORSE_CODE[MorseCode[j].toUpperCase()] || '?';
            return MorseCode.join(' ');
    }
};