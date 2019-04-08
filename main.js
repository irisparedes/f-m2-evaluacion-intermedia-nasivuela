'use strict';
console.log('hola mundo');
// Un juego que genere un número aleatorio entre 1 y 100, oculto. La jugadora tiene que adivinarlo mediante un input y un botón. El juego le dará pistas (demasiado bajo, demasiado alto) para que pueda adivinarlo. E irá contando los intentos.

// HTML
// Un input number
// Un botón
// Un espacio para el feedback
// Un espacio para el contador

// Recoger elementos
// Input
const inputEl = document.querySelector('.input');
// botón
const buttonEl = document.querySelector('.button');

// feedback
const feedbackEl = document.querySelector('.feedback');

// contador
const counterEl = document.querySelector('.counter');

//console.log(inputEl, buttonEl, feedbackEl, counterEl);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Generar un número aleatorio
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

// Crear un contador a 0
let counter = 0;

// Escuchar click de botón
buttonEl.addEventListener('click', handleButtonClick);

// Cuando se haga click en botón (handler)
function handleButtonClick() {
  //console.log('CLICK');
  // Recoger el número del input
  const userNumber = parseInt(inputEl.value);
  //console.log(userNumber);

  // Compararlo con el aleatorio y si es igual
  if (userNumber === randomNumber) {
    // Feedback has ganado
    feedbackEl.innerHTML = 'HAS GANADO, CAMPEONA';

    // Si el número del input es mayor
  } else if (userNumber > randomNumber) {
    // Feedback demasiado alto
    feedbackEl.innerHTML = 'Demasiado alto';

    // Si el número del input es menor
  } else if (userNumber < randomNumber) {
    // Feedback demasiado bajo
    feedbackEl.innerHTML = 'Demasiado bajo';
  }

  // Aumentar el contador y ponerlo en el elemento contador de HTML
  counter += 1;
  // o counter = counter + 1
  counterEl.innerHTML = counter;
}
