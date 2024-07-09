/* ---------------------------------------CONSTS--------------------------------------------*/
const RandomWords= ['might','peter','think','space','shift','exact','bases','leave','price','being','lewis','trial','eight','which','chase','stood']


const lettersContainer = document.getElementById("letters-container")


const letters=document.querySelector(".keyboard")


// const LetterB= document.getElementById("letter-B")
// const LetterC= document.getElementById("letter-C")
// const LetterD= document.getElementById("letter-D")
// const LetterE= document.getElementById("letter-E")
// const LetterF= document.getElementById("letter-F")
// const LetterG= document.getElementById("letter-G")
// const LetterH= document.getElementById("letter-H")
// const LetterI= document.getElementById("letter-I")
// const LetterJ= document.getElementById("letter-J")
// const LetterA= document.getElementById("letter-A")
// const LetterK= document.getElementById("letter-K")
// const LetterL= document.getElementById("letter-L")
// const LetterM= document.getElementById("letter-M")
// const LetterN= document.getElementById("letter-N")
// const LetterO= document.getElementById("letter-O")
// const LetterP= document.getElementById("letter-P")
// const LetterQ= document.getElementById("letter-Q")
// const LetterR= document.getElementById("letter-R")
// const LetterS= document.getElementById("letter-S")
// const LetterT= document.getElementById("letter-T")
// const LetterU= document.getElementById("letter-U")
// const LetterV= document.getElementById("letter-V")
// const LetterW= document.getElementById("letter-W")
// const LetterX= document.getElementById("letter-X")
// const LetterY= document.getElementById("letter-Y")
// const LetterZ= document.getElementById("letter-Z")

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

}





const getWords = (correctWord) =>{
 var word=RandomWords[Math.floor(Math.random()*RandomWords.length)];
console.log(word)
 
     

}

/*----------------------------------------EVENT LISTENERS-------------------------------------*/



// display.addEventListener( load, function(){

//      display.textContent = "- - - - -"
// })

LetterA.addEventListener("click", function(){
    display.textContent = "A"
})

LetterB.addEventListener("click", function(){
    display.textContent= "B"

})
LetterC.addEventListener("click", function(){
   display.textContent= "C"
})
LetterD.addEventListener("click", function(){
    display.textContent= "D" 

})
LetterE.addEventListener("click", function(){
     display.textContent= "E"
})
LetterF.addEventListener("click", function(){
     display.textContent= "F"
})
LetterG.addEventListener("click", function(){
     display.textContent= "G"
})
LetterH.addEventListener("click", function(){
     display.textContent= "H"
})
LetterI.addEventListener("click", function(){
     display.textContent= "I"
})
LetterJ.addEventListener("click", function(){
     display.textContent= "J"
})
LetterK.addEventListener("click", function(){
     display.textContent= "K"
})
LetterL.addEventListener("click", function(){
     display.textContent= "L"
})
LetterM.addEventListener("click", function(){
     display.textContent= "M"
})
LetterN.addEventListener("click", function(){
    display.textContent= "N"
})
LetterO.addEventListener("click", function(){
     display.textContent= "O"
})
LetterQ.addEventListener("click", function(){
     display.textContent= "Q"
})
LetterR.addEventListener("click", function(){
     display.textContent= "R"
})
LetterS.addEventListener("click", function(){
    display.textContent= "S"
})
LetterT.addEventListener("click", function(){
     display.textContent= "T"
})
LetterU.addEventListener("click", function(){
     display.textContent= "U"
})
LetterV.addEventListener("click", function(){
     display.textContent= "V"
})
LetterW.addEventListener("click", function(){
     display.textContent= "W"
})
LetterX.addEventListener("click", function(){
     display.textContent= "X"
})
LetterY.addEventListener("click", function(){
     display.textContent= "Y"
})
LetterZ.addEventListener("click", function(){
     display.textContent= "Z"
})
