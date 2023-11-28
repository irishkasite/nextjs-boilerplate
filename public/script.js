const heartContainer = document.body;
const heartIcon = document.getElementById('heart');

heartIcon.addEventListener('mouseover', () => {
  heartIcon.style.transform = 'scale(1.2)';
});

heartIcon.addEventListener('mouseout', () => {
  heartIcon.style.transform = 'scale(1)';
});

heartIcon.addEventListener('click', () => {
  createFloatingHeart();
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