// usando index y enlazando con este ejercicio, nos traemos el icono de la api cada vez que presionamos el boton
// y con el fetch de abajo imagenes de perros al azar
function getEmoji() {
    fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.js-result').innerHTML = data.result;
      });
  }
  document.querySelector('.js-emoji').addEventListener('click', getEmoji);

  function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Un perro';
      });
  }
  const bton = document.querySelector('.js-dog');
  bton.addEventListener('click', getDogImage);

  const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const boton = document.querySelector('.js-btn');
boton.addEventListener('click', getBreedImages);