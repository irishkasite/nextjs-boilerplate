const heartContainer = document.body;
const heartIcon = document.getElementById('heart');
const scoreContainer = document.getElementById('score');
const initScore = window.localStorage.getItem('score');

if(isNaN(parseInt(window.localStorage.getItem('score'))))
  window.localStorage.setItem('score', 0);


let score = parseInt(window.localStorage.getItem('score'));

scoreContainer.innerText = score.toString();

heartIcon.addEventListener('mouseover', () => {
  heartIcon.style.transform = 'scale(1.2)';
});

heartIcon.addEventListener('mouseout', () => {
  heartIcon.style.transform = 'scale(1)';
});

heartIcon.addEventListener('click', () => {
  createFloatingHeart();
  score += 1;
  window.localStorage.setItem('score', score.toString());
  scoreContainer.innerText = score.toString();
});

function createFloatingHeart() {
  const newHeart = document.createElement('div');
  newHeart.innerHTML = '❤';
  newHeart.className = 'floating-heart';

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  newHeart.style.left = `${randomX}px`;
  newHeart.style.top = `${randomY}px`;

  heartContainer.appendChild(newHeart);

  setTimeout(() => {
    newHeart.remove();
  }, 2000);
}