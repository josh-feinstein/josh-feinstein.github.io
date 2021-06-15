const popup = document.getElementById('popup-bg');

document.getElementById('popup-button').addEventListener('click', () => {
  popup.style.display = 'flex';
  popup.className = '';
});

document.querySelector('.close').addEventListener('click', () => {
  popup.className = 'hidden';
});