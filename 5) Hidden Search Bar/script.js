const searchButton = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input')

searchButton.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
