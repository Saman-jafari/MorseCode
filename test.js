const morse = require('./MorseCodeDecoder.js');

console.log (morse.decodeMorse('-- --- .-. ... .   -.-. --- -.. .'));
console.log (morse.decodeMorse('-- --- .-. ... . ....... -.-. --- -.. .'));
console.log (morse.decodeMorse('.... .. ....... - .... . .-. .'));
console.log (morse.encodeMorse('Hi There'));
console.log (morse.encodeMorse('Morse code'));
console.log (morse.encodeMorse('Saman Jafari'));