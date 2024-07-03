const ghost= document.getElementById('ghost');
const pacman= document.querySelector('.pacmanImage');
const score= document.getElementById('score');
let pacmanRemoved = false; 


const ghostAnimation= ghost.animate([
    
    { transform: 'translate(0, 0)' },
    { transform: 'translate(1000px, 0)' },
    { transform: 'translate(1000px, 1000px)' },
    { transform: 'translate(0, 1000px)' },
    { transform: 'translate(0, 0)' }
  ], {
    duration: 2000,
    iterations: Infinity
  });

  const stopAnimation=  ghost.addEventListener("mouseover", () => {
    if (pacmanRemoved === false) { 
      ghost.src = pacman.src;
      pacman.src = pacman.remove();   
      pacmanRemoved= true;  
      ghostAnimation.pause();
      score.textContent += 100
    }});