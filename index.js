//add event listener and pass through dom content
//document.addEventListener('DOMContentLoaded', () => {

/** What I need todo:
 * create grid board
 * First create a 10*10 board with 20 bombs in it
 * Then give each element a unique value like bomb or no bomb(empty)
 * Then shuffle the bomb squares and empty squares together randomly when refresh the page
 * Then let squares show how many bombs are around (in surrounding 8 other suqares)
 * When click a square contains bomb, alert "Bomb!!", and end the game and refresh the page.
 * When click a square that next to a bomb or bombs, show the number of bombs.
 * When click a square that is actually empty with no bomb near it, automatically show other squares and expand the showing field until squares that next to bombs with number on it. (???how???)
 * Add flag in square conatins bomb
 * When all bomb squares were flagged, tell playerd that they win the game.
 * Styling 
 * Delete all the comment and make the code as concise as possible
 * */
   

const grid = document.querySelector('.grid');
    let width = 10;
    let squares = [];
    let gameOver = false;
    let amountOfFlags = 0;
    let amountOfBombs = 20;

//create grid board
    const createBoard = (i) => {

//create bomb and empty squares and shufffle them in random everytime refresh the page
        
        let totalSuqares = 100;
        

        /**Method of fill an array
         * The fill() method fills specified elements in an array with a value.
         * Syntax: fill(value, start, end)  start: default-0  end: default-arr.length
         */
        const arrayOfBombs = Array(amountOfBombs).fill('bomb');
        const arrayOfEmpty = Array(totalSuqares - amountOfBombs).fill('empty');
        console.log(arrayOfBombs);
        console.log(arrayOfEmpty);

        //join the bombs array and empty array together
        //Join two arrays together: newArray = arr1.concat.arr2;
        //                          newArray = arr1.concat.(arr2, arr3,.., arrx);
        const totalArray = arrayOfEmpty.concat(arrayOfBombs);
        console.log(totalArray);

        /*creat a new array to shuffle the bomb and empty squares randomly
          Sorting an array in random order should use this funcion:
          const newArray = () => {
            originalArray.sort(() => 0.5 - Math.random());
          }
         link: https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random
        */
        const shuffledArray = totalArray.sort(() => 0.5 - Math.random());
        console.log(shuffledArray);


        for(let i = 0; i < 100; i++) {
            //create a div, unique id and class for each element
            //and pass through the square to grid
            const square = document.createElement('div');
            square.setAttribute('id', i);

            square.classList.add(shuffledArray[i]);

            grid.appendChild(square);


            //add class to each element in shuffled array and make sure we can add impage or text in the square
            square.classList.add(shuffledArray[i]);

            //create new array of squares for bombs and push it to the square
            squares.push(square);

            //left normal click
            square.addEventListener('click', function(event) {
                click(square)
            })

            //right click to add flag
          
            square.oncontextmenu = function(event) {
                event.preventDefault();
                addFlag(square);
            }

           
        }

        //check the bomb around the square in surrounding other eight squares

        for (let i = 0; i < squares.length; i++) {
            let numberOfBombs = 0;
            const leftColume = (i % 10 === 0);
            const rightColume = (i % 10 === 9);

            if (squares[i].classList.contains('empty')) {
                if (i >= 0 && !leftColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++ } 
                if (i >= 0 && !rightColume && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++} 
                if (i > 9 && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++ }
                if (i < 90 && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++ }
                if (i > 10 && !leftColume && squares[i -11].classList.contains('bomb')) {
                    numberOfBombs ++ } 
                if (i > 9 && !rightColume && squares[i -9].classList.contains('bomb')) {
                    numberOfBombs ++ }
                if (i < 90 && !leftColume && squares[i +9].classList.contains('bomb')) {
                    numberOfBombs ++ } 
                if (i < 89 && !rightColume && squares[i +11].classList.contains('bomb')) {
                    numberOfBombs ++ }

                //pass the number of bombs as a parameter to squares array, like add a class or div
                squares[i].setAttribute('number', numberOfBombs);
            }
          }

        }




    createBoard()

    /**  write a function on clicking the squares
     * When click a square contains empty, then show the number of bombs aroud it.
     * when click a square contains bomb, then alert Game Over or other special effect.
     * Add a class called "checked" to the squares already clicked, then add some pretty style to clicked squares
    */
    const click = (square) => {

        if (gameOver) return;
        if (square.classList.contains('checked') || square.classList.contains('flag')) return;



        if (square.classList.contains('bomb')) {
            alert('Game Over');
        } else {
            let numberOfBombs = square.getAttribute('number');
            if (numberOfBombs > 0) {
                square.classList.add('checked');
                square.innerHTML = numberOfBombs;
                return
            }
            square.classList.add('checked');
        }
    }

    /** Add flag by clicking the right click
     * The sqaure that can be flagged should satisfy two conditions: 
     * 1.The sqaure wasn't be checked  2.The amount of flag still less than bomb
     * 
     * 
    */

    const addFlag = (square) => {
        if(!square.classList.contains('checked') && (amountOfFlags < amountOfBombs)) {
            if(!square.classList.contains('flagged')) {
                square.classList.add('flagged');
                square.innerHTML = '🎀'
                amountOfFlags ++
            }

        } else {
            square.classList.remove('flagged');
            square.innerHTML = '';
            amountOfFlags --
        }
    }

    

 



//})
