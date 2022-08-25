
const grid = document.querySelector('.grid')
let width = 10
let square = []

//create board
const createBoard = (i) => {
    for(let i = 0; i < 100; i++) {
        //create a div and unique id for each element
        const square = document.createElement('div');
        square.setAttribute('id', i)

        //pass through the square as a parameter
        grid.appendChild(square)

    }
}
createBoard()




