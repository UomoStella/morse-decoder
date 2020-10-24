const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let word_arr = expr.split("**********");
    word_arr.forEach((element, index) => {
        let letter = "";
        let wordI = 0;
        while (wordI < element.length) {
            let s = element.substring(wordI, wordI + 10);
            s = s.substring(s.indexOf('1'), s.length);
            s = s.replace(new RegExp('10',"g"), '.').replace(new RegExp('11',"g"), '-');

            letter += MORSE_TABLE[s]; 
            wordI += 10;
        }
        result.push(letter);
    });
    return result.join(' ');
}

module.exports = {
    decode
}