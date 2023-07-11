const player1inc = document.querySelector('#player1inc');
const player2inc = document.querySelector('#player2inc');
const resetButton = document.querySelector('#reset');
const player1display = document.querySelector('#player1display');
const player2display = document.querySelector('#player2display');
const playingToSelect = document.querySelector('#playingTo');


let player1score = 0;
let player2score = 0;
let playingTo = 3;
playingToSelect.addEventListener('change', function () {
    playingTo = parseInt(this.value);
    reset();


})

let isGameOver = false;

player1inc.addEventListener('click', function () {
    if (!isGameOver) {

        player1score++;
        player1display.textContent = player1score;
        if (player1score === playingTo) {
            isGameOver = true;
            player1display.classList.add('winner');
            player2display.classList.add('looser');
            player1inc.disabled = true;
            player2inc.disabled = true;

        }

    }

})
player2inc.addEventListener('click', function () {
    if (!isGameOver) {
        player2score++;
        player2display.textContent = player2score;
        if (player2score === playingTo) {
            isGameOver = true;
            player2display.classList.add('winner');
            player1display.classList.add('looser');
            player1inc.disabled = true;
            player2inc.disabled = true;
        }

    }
})

resetButton.addEventListener('click', reset)

function reset() {
    player1score = 0;
    player2score = 0;
    player1display.textContent = player1score;
    player2display.textContent = player2score;
    player2display.classList.remove('winner', 'looser');
    player1display.classList.remove('winner', 'looser');
    player1inc.disabled = false;
    player2inc.disabled = false;
    isGameOver = false;

}





