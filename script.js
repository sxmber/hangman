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

const post = document.getElementById('post')
let wordList;
fetch("words.json")
    .then(response => response.json())
    .then(json => {
        wordList = json;
        console.log(wordList);
    });
console.log(wordList);
// post.textContent = framelist[1];
function generateWord() {

}

window.onload = () => {

}


