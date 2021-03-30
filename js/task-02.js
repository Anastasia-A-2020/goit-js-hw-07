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

 const listItem = ingredients.forEach(ingridient => {document.createElement('li')});
 console.log(listItem)

  const listEl = document.querySelector('ul#ingredients');
  listEl.after(listItem);

//   const item = document.createElement("a");
//     item.href = "#";
//     item.classList.add("btn");
//     item.textContent = "item 4";

//     const nav = document.querySelector(".nav");
//     nav.appendChild(item);