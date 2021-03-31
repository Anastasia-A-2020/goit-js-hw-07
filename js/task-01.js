//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'

const itemEl = document.querySelectorAll('#categories .item');
let sumItemsEl = itemEl.length;
const numberOfCategoryEl = `В списке ${sumItemsEl} категории.`;
console.log(numberOfCategoryEl);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество элементов в категории 
//(всех вложенных в него элементов li).

//console.log(itemEl);
itemEl.forEach(el => {
    const nameEl = el.querySelector('h2').textContent;
    let accountEl = el.querySelectorAll('li').length;
    const messageEl = `Категория: ${nameEl}. 
Количество элементов: ${accountEl}`;
    return console.log(messageEl);
})
