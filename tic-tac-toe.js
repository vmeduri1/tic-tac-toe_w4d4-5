
let currentPlayerSymbol = "x";
let squareValues = ["","","","","","","","",""];
let gameStatus = '';

// window.addEventListener('DOMContentLoaded', event => {
//     currentPlayerSymbol = JSON.parse(localStorage.getItem('currentPlayerSymbol'))
//     squareValues = JSON.parse(localStorage.getItem('squareValues'))
//     gameStatus = JSON.parse(localStorage.getItem('gameStatus'))


// // })

function saveGame() {
    localStorage.setItem('currentPlayerSymbol', (JSON.stringify(currentPlayerSymbol)))
    localStorage.setItem('squareValues', (JSON.stringify(squareValues)))
    localStorage.setItem('gameStatus', (JSON.stringify(gameStatus)))
//     localStorage.getItem('currentPlayerSymbol')
//     localStorage.getItem('squareValues')
//     localStorage.getItem('gameStatus')
}

function loadGame() {
    currentPlayerSymbol = JSON.parse(localStorage.getItem('currentPlayerSymbol'))
    squareValues = JSON.parse(localStorage.getItem('squareValues'))
    gameStatus = JSON.parse(localStorage.getItem('gameStatus'))
    if (!gameStatus) {
        console.log(gameStatus);
        return;
    }
    for(let i = 0; i < 9; i++) {
        console.log(squareValues);
        if(squareValues[i] != '') {
            const img = document.createElement('img');
            img.setAttribute('class', 'img')
            img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${squareValues[i]}.svg`
            document
                .getElementById(`square-${i}`)
                .appendChild(img)
        }
    }

}
// console.log(JSON.stringify(squareValues))

function checkGameStatus(){
    saveGame();
    // console.log(JSON.stringify(index.HTML))
    //check rows
    for(let i = 0; i < 9; i += 3) {
        if(squareValues[i] !== ''
        && squareValues[i] === squareValues[i + 1]
        && squareValues[i] === squareValues[i + 2]) {
            gameStatus = squareValues[i];
            break;
        }
    }

    //check columns
    for(let i = 0; i < 3; i++) {
        if(squareValues[i] != ''
        && squareValues[i] === squareValues[i + 3]
        && squareValues[i] === squareValues[i + 6]) {
            gameStatus = squareValues[i];
            break;
        }
    }

    //check diagonals
    if(squareValues[0] !== ''
    && squareValues[0] === squareValues[4]
    && squareValues[0] === squareValues[8]) {
        gameStatus = squareValues[0];
    }
    if(squareValues[2] !== ''
    && squareValues[2] === squareValues[4]
    && squareValues[2] === squareValues[6]) {
        gameStatus = squareValues[2];
        // break;
    }

    //chech for tie
    let boardIsFilled = true;
    for(let i = 0; i < 9; i++) {
        if(squareValues[i] === '') {
            boardIsFilled = false;
            break;
        }
    }

    if(boardIsFilled === true && gameStatus === '') {
        gameStatus = 'Tie'
        document
            .getElementById('game-status')
            .innerHTML = `${gameStatus.toUpperCase()}`
    }

    if(gameStatus !== '' && gameStatus !== 'Tie') {
        document
            .getElementById('game-status')
            .innerHTML = `Winner: ${gameStatus.toUpperCase()}`;

    }
}

if(gameStatus === 'x' || 'o' || 'Tie') {
    document
        .getElementById('new-game')
        .addEventListener('click', event => {
            gameStatus = '';
            document
                .getElementById('game-status')
                .innerHTML = '';
            for (let i = 0; i < 9; i++) {
                document
                    .getElementById(`square-${i}`)
                    .innerHTML = '';
            }
            currentPlayerSymbol = 'x';
            document
                .getElementById("new-game")
                .disable = true
            squareValues = ['','','','','','','','','']

        })
}

document
    .getElementById('give-up')
    .addEventListener('click', event => {
        if(currentPlayerSymbol === 'x') {
            document
            .getElementById('game-status')
            .innerHTML = `Winner: O`
        } else {
            document
            .getElementById('game-status')
            .innerHTML = `Winner: X`
        }
        document
            .getElementById('give-up')
            .disable = true
    })



window.addEventListener("DOMContentLoaded", (element) => {
    loadGame();
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", e => {
            const targetId = e.target.id;
            // console.log(targetId, targetId);
            if (!targetId.startsWith('square-')) return;

            const squareIndex = Number.parseInt(targetId[targetId.length - 1]);
            // console.log(squareIndex, targetId, targetId.length, targetId[targetId.length - 1])

            if (squareValues[squareIndex] !== "") return;

            const img = document.createElement('img');
            img.setAttribute('class', 'img')
            img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`
            e.target.appendChild(img);
            squareValues[squareIndex] = currentPlayerSymbol;

            if (currentPlayerSymbol === 'x') {
                currentPlayerSymbol = 'o';
            } else {
                currentPlayerSymbol = 'x';
            }
            checkGameStatus();
        });
});
