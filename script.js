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
const keys = document.querySelectorAll(".key");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let winCount = 0;
let loseCount = 0;
let randomWord = [];

reset.onclick = () => resetgame();
//resets game
function resetgame() {
    enable();
    winCount = 0;
    loseCount = 0;
    post.textContent = framelist[0];
    keys.forEach((key) => key.setAttribute('class', "key"));
    result.innerHTML = "";
    reset.style.display = "none";
    generateWord();
}
//disables user from clicking keys
function disable() {
    keys.forEach((key) => {
        key.disabled = true;

    })
}
//enable buttons
function enable() {
    keys.forEach((key) => {
        key.disabled = false;

    })
}
function generateWord() {
    //grab random word from wordList
    randomWord = wordList[Math.floor(Math.random() * (50 - 0) + 0)];
    let hiddenWord = randomWord.replace(/./g, '<span class="dashes">_</span>')
    word.innerHTML = hiddenWord;
    randomWord = randomWord.split("");


}
generateWord();
console.log(randomWord);
keys.forEach((key) => {
    key.addEventListener('click', function (e) {
        //apply the pressed class
        //remove ability to press button again
        //check if text content letter is in randomWord
        //if so then replace dash with the clicked letter
        const dashes = document.querySelectorAll(".dashes");
        e.target.className = "key pressed";
        //check if a letter in randomWord matches the one clicked
        if (randomWord.includes(e.target.textContent.toLowerCase())) {
            randomWord.forEach((letter, index) => {
                //Replace the dash with the  correctly matched letter and give points
                if (letter === e.target.textContent.toLowerCase()) {
                    dashes[index].innerHTML = letter;
                    winCount += 1;
                }
                //Display you won and give option to restart
                if (winCount === randomWord.length) {
                    result.innerHTML = "You win!";
                    reset.style.display = "block";
                    disable();
                }

            })//if no match between randomWord and user input, then draw next frame and subtract points
        } else {
            loseCount += 1;
            post.textContent = framelist[loseCount];
            if (loseCount == 6) {
                result.innerHTML = "You lost :(";
                reset.style.display = "block"
                disable();
            }

        }
    })
})







