const ghost = document.getElementById('ghost');
const pacman = document.querySelector('.pacmanImage');
const score = document.getElementById('score');
let pacmanRemoved = false;
let ghostEaten = false;

const ghostAnimation = ghost.animate([
  { transform: 'translate(0, 0)' },
  { transform: 'translate(1000px, 0)' },
  { transform: 'translate(1000px, 1000px)' },
  { transform: 'translate(0, 1000px)' },
  { transform: 'translate(0, 0)' }
], {
  duration: 2000,
  iterations: Infinity
});

ghost.addEventListener("mouseover", () => {
  if (pacmanRemoved === false) { 
    ghost.src = pacman.src;
    pacman.src = pacman.remove(); 
    pacmanRemoved = true;  
    ghostAnimation.pause();
    ghostEaten = true;
    score.textContent += 100;

    let newGhost = document.createElement('img');
    newGhost.src = '/img/fantasmito.png'; 
    newGhost.id = 'ghost';
    newGhost.className = 'ghostImage'; 
    newGhost.style.position = 'absolute';
    newGhost.style.top = '100px';
    newGhost.style.left = '100px';
    newGhost.style.width = '100px';
    newGhost.style.height = '100px';
    document.body.appendChild(newGhost);

    ghostInterval = setInterval(moveGhost, 2000); 
    ghost = newGhost; 
    ghostEaten = false;
  }
});

let ghostInterval;

const moveGhost = () => {
  const maxX = window.innerWidth - ghost.width;
  const maxY = window.innerHeight - ghost.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  ghost.style.left = `${randomX}px`;
  ghost.style.top = `${randomY}px`;
}