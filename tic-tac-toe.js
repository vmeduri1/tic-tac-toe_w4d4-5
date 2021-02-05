let currentPlayerSymbol = "x";
let squareValues = ["","","","","","","","",""];
let gameStatus = '';

function checkGameStatus(){
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
    }

    if(gameStatus !== '') {
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
            const imgs = document.querySelectorAll('square-')
            console.log(imgs)

        })
}





window.addEventListener("DOMContentLoaded", (element) => {
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", e => {
            const targetId = e.target.id;

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
