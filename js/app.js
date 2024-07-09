/* ---------------------------------------CONSTS--------------------------------------------*/
const RandomWords= ['might','peter','think','space','shift','exact','bases','leave','price','being','lewis','trial','eight','which','chase','stood']


const lettersContainer = document.getElementById("letters-container")


const letters=document.querySelector(".keyboard")

const display = document.querySelector("#output")


const input = document.querySelector("input") 


/* ---------------------------------------Variables(state)--------------------------------------------*/





/* -----------------------------------cached elemnt refrenace------------------------------------------------*/




/* ---------------------------------------FUNCTIONS--------------------------------------------*/
for (let i =97 ; i<= 122; i++){
const board = document.createElement("button");
board.innerText = String.fromCharCode(i);
board.className= "keyboard"
letters.appendChild(board);
board.addEventListener("click",  e => innitgame(e.target,String.fromCharCode(i)))

}


const getWords = () =>{
const word = RandomWords[Math.floor(Math.random() *RandomWords.length)];
console.log(word);
//  document.querySelector("").map(() => `#output`).join("");
}
getWords()



const innitgame = (board , clickedButton) =>{
     console.log(board ,clickedButton);
}
/*----------------------------------------EVENT LISTENERS-------------------------------------*/



