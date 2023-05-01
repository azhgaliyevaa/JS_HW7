// Задание 1

// const input = document.getElementById("input");

// const list = document.getElementById("list");

// input.addEventListener("keydown", (event) => {
//   const listItem = document.createElement("li");

//   listItem.innerText = event.key;

//   list.appendChild(listItem);
// });

// Задание 2

/* const input = document.getElementById('input');

input.addEventListener('keyup', function() {
  console.log(input.value);
}); */

// Задание 3

/* const form = document.getElementById('newForm');

const input = document.getElementById('input');

const list = document.getElementById('list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const listItem = document.createElement('li');

  listItem.textContent = input.value;
  list.appendChild(listItem);

  input.value = '';
}); */

// Задание 4

/* const form = document.getElementById('calculator');
const number1 = document.getElementById('number1');
const operation = document.getElementById('operation');
const number2 = document.getElementById('number2');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  let result;
  if (operation.value === '+') {
    result = num1 + num2;
  } else if (operation.value === '-') {
    result = num1 - num2;
  } else if (operation.value === '*') {
    result = num1 * num2;
  } else if (operation.value === '/') {
    result = num1 / num2;
  } else {
    result = 'Произошла ошибка';
  }

  resultDiv.textContent = result;
}); */

// Задание 5

// const button = document.getElementById("myButton");

// button.addEventListener("mouseenter", function () {
//   const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//     Math.random() * 256
//   )}, ${Math.floor(Math.random() * 256)})`;

//   this.style.backgroundColor = randomColor;
// });

// button.addEventListener("mouseleave", function () {
//   const randomAngle = Math.floor(Math.random() * 361) - 180;

//   this.style.transform = `rotate(${randomAngle}deg)`;
// });
