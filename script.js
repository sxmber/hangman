framelist = [` +---+
     |
     |
     |
    ===`, ` +---+
 0   |
     |
     |
    ===`,
    ` +---+
 0   |
 |   |
     |
    ===`,
    ` +---+
 0   |
 |\\  |
     |
    ===`,
    ` +---+
 0   |
/|\\  |
     |
    ===`,
    ` +---+
 0   |
/|\\  |
/    |
    ===`,
    ` +---+
 0   |
/|\\  |
/ \\  |
    ===`]
wordList = [
    'speed', 'old', 'electricity', 'tales',
    'explain', 'exchange', 'magnet', 'force',
    'west', 'combination', 'lead', 'principal',
    'driven', 'team', 'four', 'represent',
    'after', 'orange', 'castle', 'speak',
    'slabs', 'report', 'lay', 'time',
    'pot', 'failed', 'tell', 'layers',
    'country', 'order', 'point', 'helpful',
    'common', 'area', 'bowl', 'vowel',
    'green', 'gate', 'tape', 'lie',
    'ran', 'written', 'snake', 'could',
    'goes', 'nails', 'stronger', 'balance',
    'had', 'entire'
]

const post = document.getElementById('post')
const word = document.getElementById('word');

function generateWord() {
    //grab random word from wordList
    randomWord = wordList[Math.floor(Math.random() * (50 - 0) + 0)];
    console.log(randomWord);
    for (i = 1; i <= randomWord.length; i++)
        word.textContent += " _ ";
}
window.onload = () => {
    generateWord();
}

// post.textContent = framelist[1];







