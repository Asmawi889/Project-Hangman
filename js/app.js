/* ---------------------------------------CONSTS--------------------------------------------*/
const RandomWords= ['might','think','space','shift','exact','price','being','lewis','trial','eight','chase','junky','quaky','jumps','capiz','enzym','zaxes','zinky']


const lettersContainer = document.getElementById("letters-container")

const letters=document.querySelector(".keyboard")

const display = document.querySelector("#output")
const winnerDisplay = document.querySelector("#WinnerOutput")

let nowWord;
let displayedWord = [`_` , `_`, `_` ,`_`, `_`];
let nowArray;
let displayedWordJ;
let tries= 8;
/* ---------------------------------------Variables(state)--------------------------------------------*/





/* -----------------------------------cached elemnt refrenace------------------------------------------------*/




/* ---------------------------------------FUNCTIONS--------------------------------------------*/
//this for loop creates the keyboard + adds the event listners to the buttons
for (let i =97 ; i<= 122; i++){
const board = document.createElement("button");
board.innerText = String.fromCharCode(i);
board.className= "keyboard"
letters.appendChild(board);
board.addEventListener("click",  e =>{ 
     
thegame(e.target,String.fromCharCode(i))})

}

//this function gets a random word from the array
const getWords = () =>{
const word = RandomWords[Math.floor(Math.random() *RandomWords.length)];
console.log(word);
nowWord= word;
nowArray = nowWord.split("");
}
getWords()


display.innerText = displayedWord;

//this is the main part of the game that checks if the letter matchs the word or not
     const thegame = (board , clickedButton) => {
               
          if(nowArray.includes(clickedButton)){
                    

               const index1 = nowArray.indexOf(clickedButton)
               console.log(nowArray)
               displayedWord[index1] = clickedButton
               console.log(nowArray)
               display.innerText = displayedWord
               WON ()
              
               
          }
               else {
                 tries--
                    if (tries >= 0){
                         winnerDisplay.innerText = `YOU HAVE ${tries} LEFT `
                    }

                    else{
                         winnerDisplay.innerText = `YOU LOST ` 
                    }
          
               }

     }
    

     const WON = () => {

          JoinedWord = displayedWord.join("")
          console.log(JoinedWord)
          if(JoinedWord === nowWord) {
               
          winnerDisplay.innerText = "--YOU WON--"
          display.innerText = JoinedWord
          }
          else if(JoinedWord !== nowWord){
          winnerDisplay.innerText = "GUESS AGAIN "
          }

     }

     const losing = () => {
          tries 

     }
/*----------------------------------------EVENT LISTENERS-------------------------------------*/



