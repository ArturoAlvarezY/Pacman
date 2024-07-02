const ghost= document.getElementById('ghost');
const pacman= document.querySelector('.pacmanImage');
const score= document.getElementById('score');

let pacmanRemoved = false; 

ghost.addEventListener("mouseover", () => {
  if (!pacmanRemoved) { 
    ghost.src = pacman.src;
    pacman.src = pacman.remove(); 
    pacmanRemoved = true; 
  }
})








///Make a function to make the ghost appear each 2 seconds in different positions

const ghostAppear = () =>
{

};

setTimeout(2000, )


///Make a if wich says that if pacman eat a phantom, score===100


const myScore=()=>{

}


///Make another if wich says that if Pacman eat 3 phantoms or Score= 300, make an out of a cherry

const outCherry = () =>
{

};




///Make another if wich says that if Pacman eat a Cherry, it gives me 500 points!

const eatCherry = () =>
{

};



///Make the last if wich says that if Pacman get 5.000 score points, return GAME OVER

const gameOver = () =>
{

};