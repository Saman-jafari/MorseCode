// copied from http://freenet.msp.mn.us/people/calguire/morse.html
const MORSE_CODE = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    'Á': '.--.-', // A with acute accent
    'Ä': '.-.-',  // A with diaeresis
    'É': '..-..', // E with acute accent
    'Ñ': '--.--', // N with tilde
    'Ö': '---.',  // O with diaeresis
    'Ü': '..--',  // U with diaeresis
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ',': '--..--',  // comma
    '.': '.-.-.-',  // period
    '?': '..--..',  // question mark
    ';': '-.-.-',   // semicolon
    ':': '---...',  // colon
    '/': '-..-.',   // slash
    '-': '-....-',  // dash
    "'": '.----.',  // apostrophe
    '()': '-.--.-', // parenthesis
    '_': '..--.-',  // underline
    '@': '.--.-.',  // at symbol from http://www.learnmorsecode.com/
    ' ': '.......'
};



const MorseCode = {
    decodeMorse: (morseCode) => {

       const  decodeCharacterByMap=(character) =>{
            for (let i in MORSE_CODE) {
                if (MORSE_CODE[i] === character)
                {
                    return i
                }
            }
            return '';
        };

        return morseCode
            .trim()
            .split("   ")
            .map(data => data.split(" ")
                .map(char => decodeCharacterByMap(char))
                .join(""))
            .join(" ");
    },
    encodeMorse:  (str)=> {
        let MorseCode = str.split('');
        for (let j in MorseCode) MorseCode[j] = MORSE_CODE[MorseCode[j].toUpperCase()] || '?';
        return MorseCode.join(' ');
    }
};

window.addEventListener('load', function() {
    let itext = document.getElementById('encrypt-decrypt');
    let answer =document.getElementById('answer');
    itext.addEventListener('input', function (e) {
        let pattern = /^(?![.-])[a-z0-9ÁÄÉÑÖÜ,.?;:/\-'()_@ ]+$/i ;
        if (pattern.test(itext.value)){
            answer.innerHTML = '<p class="smallSpace">Your Encoded String</p> ' + MorseCode.encodeMorse(itext.value);
        } else {
            answer.innerHTML = '<p class="smallSpace">Your Decoded Morse</p> ' +MorseCode.decodeMorse(itext.value);
        }
        if(itext.value === ''){
            answer.innerHTML = '';
        }
    });
});