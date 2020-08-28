'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) { // если пользователь заходит на страницу и в localStorage есть поле isChecked со значением true
    checkbox.checked = 'true';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true); // если пользователь ставит галочку, то в localStorage добавляется булиновое поле isChecked со значением true
});

if (localStorage.getItem('bg') === 'changed') { // проверка при каждом заходе на страницу
    form.style.backgroundColor = 'red'; 
} 

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') { // если цвет уже изменен
        localStorage.removeItem('bg'); // то убрать это свойство
        form.style.backgroundColor = '#fff'; // и вернуть белый цвет
    } else { // в противном случае
        localStorage.setItem('bg', 'changed'); // добавить поле со свойством
        form.style.backgroundColor = 'red'; // и перекрасить
    }
});

const person = {
    name: 'Alex',
    age: 25
};

// const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', person);

console.log(localStorage.getItem('alex'));