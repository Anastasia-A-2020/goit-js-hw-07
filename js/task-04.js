// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
let counterValue = document.querySelector('#value');
console.log(counterValue)

// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
function onIncrementClick(event){
    event.preventDefault();
    let plus = Number(counterValue.textContent) + 1;
    counterValue.innerHTML = plus;
    console.log(counterValue);

};

function onDecrementClick(event){
    event.preventDefault();
    let minus = Number(counterValue.textContent) - 1;
    counterValue.innerHTML = minus;
    console.log(counterValue);
};

// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
incrementBtn.addEventListener('click', onIncrementClick);
console.log(incrementBtn);

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
console.log(decrementBtn);
decrementBtn.addEventListener('click', onDecrementClick);