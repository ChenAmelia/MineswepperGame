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
 * */
   

const grid = document.querySelector('.grid');
    let width = 10;
    let squares = [];

//create grid board
    const createBoard = (i) => {

//create bomb and empty squares and shufffle them in random everytime refresh the page
        let amountOfBombs = 20;
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
            //create a div and unique id for each element
            //and pass through the square to grid
            const square = document.createElement('div');
            square.setAttribute('id', i)

            grid.appendChild(square)


            //add class to each element in shuffled array and make sure we can add impage or text in the square
            square.classList.add(shuffledArray[i]);

            //create new array of squares for bombs and push it to the square
            squares.push(square);


        }

        for (let i = 0; i < squares.length; i++) {
            let numberOfBombs = 0;
            const leftColume = (i % 10 === 0);
            const rightColume = (i % 10 === 9);
            const topColume = (i - 10 < 0);
            const bottomColume = (i + 10 > 100);

            if (squares[i].classList.contains('empty')) {
                if (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i -11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i -9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i +11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if  (i > 0 && !leftColume && !rightColume &&!topColume && !bottomColume && squares[i +9].classList.contains('bomb')) {
                    numberOfBombs ++
                
                //check left-side squares 10-80
                } else if (i > 0 && leftColume && !topColume && !bottomColume && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && leftColume && !topColume && !bottomColume && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && leftColume && !topColume && !bottomColume && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && leftColume && !topColume && !bottomColume && squares[i -9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && leftColume && !topColume && !bottomColume && squares[i +11].classList.contains('bomb')) {
                    numberOfBombs ++
                } 

                //check right-side squares 19-89
                  else if (i > 0 && rightColume && !topColume && !bottomColume && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && rightColume && !topColume && !bottomColume && squares[i -11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && rightColume && !topColume && !bottomColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && rightColume && !topColume && !bottomColume && squares[i +9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && rightColume && !topColume && !bottomColume && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                }

                //check top-side squares 1-8
                  else if (i > 0 && topColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && topColume && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && topColume && squares[i +9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && topColume && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && topColume && squares[i +11].classList.contains('bomb')) {
                    numberOfBombs ++
                }

                //check top-side squares 1-8
                  else if (i > 0 && bottomColume && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && bottomColume && squares[i -11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && bottomColume && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && bottomColume && squares[i -9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i > 0 && bottomColume && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                }

                //check 0 & 90
                  else if (i = 0  && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 0  && squares[i +11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 0  && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 90  && squares[i +1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 90  && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 90  && squares[i -9].classList.contains('bomb')) {
                    numberOfBombs ++
                } 
                
                //ckeck 9 & 99
                  else if (i = 9  && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 9  && squares[i +9].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 9  && squares[i +10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 99  && squares[i -10].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 99  && squares[i -11].classList.contains('bomb')) {
                    numberOfBombs ++
                } else if (i = 99  && squares[i -1].classList.contains('bomb')) {
                    numberOfBombs ++
                }

                


            }
        }





    }
    createBoard()



//})
