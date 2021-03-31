
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
  // после чего вставит все li за одну операцию в список ul.ingredients. 
  // Для создания DOM-узлов используй document.createElement().
  
  // const itemEl = [];
  // ingredients.forEach(function(ingridient, i, array){
  //   const itemOfIngridientsEl = document.createElement('li');
  //    itemOfIngridientsEl.textContent = ingredients[i];
  //    itemEl.push(itemOfIngridientsEl);
  // })

  // const listEl = document.querySelector('ul#ingredients');
  // console.log(listEl);
  // listEl.append(...itemEl);

  const itemEl = ingredients.map(ingridient => {
    const itemOfIngridientsEl = document.createElement('li');
    itemOfIngridientsEl.textContent = ingridient;
    return itemOfIngridientsEl;
  });
  console.log(itemEl);
  
  const listEl = document.querySelector('ul#ingredients');
  listEl.append(...itemEl)