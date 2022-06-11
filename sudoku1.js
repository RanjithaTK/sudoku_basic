$(document).ready(function () {
    const gridDisplay = $(".grid")[0]

    let squares = []
    
    $("#reset").click(reset)   
    function reset() {
        for (let i = 0; i < 80; i++) {
            squares[i].innerHTML = ""

        }

        generate()
        document.addEventListener("keyup", control)
    }

    function createBoard() {
        for (let i = 0; i < 80; i++) {
            square = document.createElement('div')
            square.innerHTML = ""              //<div>""</div>
            gridDisplay.appendChild(square)   //puts 16 squares inside grid with ""
            squares.push(square)
        }
    }
        createBoard();















const board = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
sudoku(board);
// console.log(board)



function isValid(board, row, colu, k) {
    for (let i = 0; i < 9; i++) {
        const x = 3 * Math.floor(row / 3) + Math.floor(i / 3)
        const y = 3 * Math.floor(colu / 3) + i % 3
        if (board[row][i] == k || board[i][colu] == k || board[x][y] == k) {
            return false
        }


    }
    return true
}


function sudoku(data) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (data[i][j] == '.') {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(data, i, j, k)) {
                        data[i][j] = `${k}`
                        if (sudoku(data)) {
                            return true;
                        }
                        else {
                            data[i][j] = '.' 
                        }
                    }
                }
                return false} }

    }
    return true
    checkZero()
}

function checkZero() {
    let zeros = 0
    for (let i = 0; i < 80; i++) {
        if (squares[i].innerHTML == '.') {
            zeros++
        }
    }
    if (zeros === 0) {
        
        
        $("#result").text("You Won ..!")
        
        document.removeEventListener("keyup", control)     //once lost game;event removed

    }
}

})