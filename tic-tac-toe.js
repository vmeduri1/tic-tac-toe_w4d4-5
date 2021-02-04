let currentPlayerSymbol = "x";
let squareValues = ["","","","","","","","",""];

window.addEventListener("DOMContentLoaded", (element) => {
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", e => {
            const targetId = e.target.id;

            if (!targetId.startsWith('square-')) return;

            const squareIndex = Number.parseInt(targetId[targetId.length - 1]);

            if (squareValues[squareIndex] !== "") return;

            const img = document.createElement('img');
            img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`
            e.target.appendChild(img);
            squareValues[squareIndex] = currentPlayerSymbol;

            if (currentPlayerSymbol === 'x') {
                currentPlayerSymbol = 'o';
            } else {
                currentPlayerSymbol = 'x';
            }
        });


});
