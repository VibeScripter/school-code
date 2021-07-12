let playerScore, computerScore, selection, gamePlaying, comp, winningScore;

newGame();

function newGame() {
    playerScore = 0;
    computerScore = 0;
 // sets up the game and allows for both player and computer scores to be displayed, winner/loser status etc.

    document.querySelector('.player-selection').textContent = '';
    document.querySelector('.computer-selection').textContent = '';
    document.querySelector('.player-hand').style.display = 'none';
    document.querySelector('.computer-hand').style.display = 'none';
    document.querySelector('.player-score').textContent = '0';
    document.querySelector('.computer-score').textContent = '0';

    document.querySelector('.player-name').textContent = 'Player';
    document.querySelector('.player-panel').classList.remove('winner');
    document.querySelector('.computer-name').textContent = 'Computer';
    document.querySelector('.computer-panel').classList.remove('winner');

    gamePlaying = true;

};

function getWinner() { // receives winner status at the end of the game, announces it. sets game playing to end/stop
    if (playerScore >= winningScore || computerScore >= winningScore) {
        if (playerScore >= winningScore) {
            document.querySelector('.player-name').textContent = 'Winner!';
            document.querySelector('.player-panel').classList.add('winner');

        } else {
            document.querySelector('.computer-name').textContent = 'Winner!';
            document.querySelector('.computer-panel').classList.add('winner');
        };
        gamePlaying = false;
    };
};

function computerPlay() { // this is where the computer's movements and playstyle is defined. really basic, defines rock paper and scissor movements. then it allows for computer to select these semi-randomly
    comp = Math.floor((Math.random() * 3) + 1);
    //console.log(computerPlay);
    document.querySelector('.computer-hand').setAttribute('src', comp + '.png');
    document.querySelector('.computer-hand').style.display = 'block';
    if (comp === 1) {
        document.querySelector('.computer-selection').textContent = 'Rock';
    } else if (comp === 2) {
        document.querySelector('.computer-selection').textContent = 'Scissors';
    } else {
        document.querySelector('.computer-selection').textContent = 'Paper';
    };
};

// defines rock, paper, and scissor movements even more for both client and computer and allows for scores to be added together
function rock() {
    if (gamePlaying === true) {
        document.querySelector('.player-selection').textContent = 'Rock';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'rock.png');

        computerPlay();

        if (comp === 1) {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    };
    winningScore = document.querySelector('.set-winner').value;
    winningScore ? winningScore = winningScore : winningScore = 10;

    getWinner();
};

function paper() {
    if (gamePlaying === true) {
        document.querySelector('.player-selection').textContent = 'Paper';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'paper.png');

        computerPlay();

        if (comp === 1) {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    };
    winningScore = document.querySelector('.set-winner').value;
    winningScore ? winningScore = winningScore : winningScore = 10;

    getWinner();
};

function scissors() {
    if (gamePlaying === true) {

        document.querySelector('.player-selection').textContent = 'Scissors';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'scissors.png');

        computerPlay();

        if (comp === 1) {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    };
    winningScore = document.querySelector('.set-winner').value;
    winningScore ? winningScore = winningScore : winningScore = 10;

    getWinner();
};


document.querySelector('.btn-rock').addEventListener('click', rock);
document.querySelector('.btn-paper').addEventListener('click', paper);
document.querySelector('.btn-scissors').addEventListener('click', scissors);
document.querySelector('.btn-new').addEventListener('click', newGame); // the btn functions allow for buttons to be pressed obviously, but also allows for event listeners and functions which are seen above