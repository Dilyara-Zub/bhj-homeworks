let score = 0;
let misses = 0;
const killedMoles = document.getElementById('dead');
const missesCount = document.getElementById('lost')
const holes = document.querySelectorAll('.hole'); 
  
function hittingMole(index) {
  const hole = document.getElementById(`hole${index}`);
  
  if (hole.classList.contains('hole_has-mole')) {
      killedMoles.textContent = ++score;
  } else {
      missesCount.textContent = ++misses;
  }

  if (score === 10) {
      gameOver('Поздравляем с победой!');
  } else if (misses === 5) {
      gameOver('Игра окончена! Вы проиграли.');
  }
}

function gameOver(message) {
  alert(message);
  score = 0;
  misses = 0;
  killedMoles.textContent = score;
  missesCount.textContent = misses;
}

for (let i = 1; i <= holes.length; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = (() => hittingMole(i));
}