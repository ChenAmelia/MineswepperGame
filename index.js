//add event listener and pass through dom content
//document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let width = 10;
    let squares = [];

    

    //create board
    const createBoard = (i) => {

        //create bomb and empty squares and shufffle them in random everytime refresh the page
        let amountOfBombs = 20;

        /**Method of fill an array
         * The fill() method fills specified elements in an array with a value.
         * Syntax: fill(value, start, end)
         * const arr = Array(arrayName).fill(filler)
         */
        const arrayOfBombs = Array(amountOfBombs).fill('bomb');
        const arrayOfEmpty = Array(100 - amountOfBombs).fill('empty');
        console.log(arrayOfBombs);
        console.log(arrayOfEmpty);

        //join the bombs array and empty array together
        const totalArray = arrayOfEmpty.concat(arrayOfBombs);
        console.log(totalArray);

        /*creat a new array to shuffle the bomb and empty squares randomly
          the method to put elements in array sort randomly is using funcion:
          function myFunction() {
            points.sort(function(){return 0.5 - Math.random()});
         link: https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random
        */
        const shuffledArray = totalArray.sort(() => 0.5 - Math.random());
        console.log(shuffledArray);







        for(let i = 0; i < 100; i++) {
            //create a div and unique id for each element
            const square = document.createElement('div');
            square.setAttribute('id', i)

            //pass through the square as a parameter
            grid.appendChild(square)

            //create new array of squares for bombs and push it to the square
            squares.push(square);

        }

    


    }

    createBoard()



//})
