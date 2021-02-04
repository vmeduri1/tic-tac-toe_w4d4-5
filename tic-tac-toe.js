window.addEventListener("DOMContentLoaded", (element) => {
    let currentPlayerSymbol = "X";
    let squareValues = ["","","","","","","","",""];

    const board = document.getElementById("tic-tac-toe-board")
    board.addEventListener("click", e => {
        console.log("A square is clicked:", e.target.id);

    })

});
