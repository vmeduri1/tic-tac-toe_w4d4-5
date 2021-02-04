window.addEventListener("DOMContenLoaded", () => {
    let currentPlayerSymbol = "X";
    let squareValues = ["","","","","","","","",""];
    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", e => {
        console.log("A square is clicked:", e.target.id);
        })
});
