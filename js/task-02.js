
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
  
  const item = [];
  ingredients.forEach(function(ingridient, i, array){
    const itemOfIngridients = document.createElement('li');
     itemOfIngridients.textContent = ingredients[i];
     item.push(itemOfIngridients);
  })

  const listEl = document.querySelector('ul#ingredients');
  console.log(listEl);

  listEl.append(...item);
