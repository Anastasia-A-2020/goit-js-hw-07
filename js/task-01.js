//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'

const itemEl = document.querySelectorAll('#categories .item');
let sumItems = itemEl.length;
const numberOfCategory = `В списке ${sumItems} категории.`;
console.log(numberOfCategory);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество элементов в категории 
//(всех вложенных в него элементов li).

//console.log(itemEl);
itemEl.forEach(el => {
    const name = el.querySelector('h2').textContent;
    let account = el.querySelectorAll('li').length;
    const message = `Категория: ${name}. Количество элементов: ${account}`;
    return console.log(message);
})
