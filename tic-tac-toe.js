const board = document.getElementById('board');
const restartButton = document.getElementById('restart-button');
const squares = Array.from(document.getElementsByClassName('square'));

let currentPlayer = 'X';
let gameBoard = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cellIndex = event.target.dataset.cellIndex;
    if (gameBoard[cellIndex] !== null || event.target.textContent !== '') {
        return;
    }

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
            restartGame();
        }, 100);
    } else if (checkDraw()) {
        setTimeout(() => {
            alert('It\'s a draw!');
            restartGame();
        }, 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === player;
        });
    });
}

function checkDraw() {
    return !gameBoard.includes(null);
}

function restartGame() {
    gameBoard = Array(9).fill(null);
    squares.forEach(square => {
        square.textContent = '';
    });
    currentPlayer = 'X';
}

squares.forEach(square => {
    square.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);