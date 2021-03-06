const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

//   Используй массив объектов images для создания тегов img вложенных в li. 
//   Для создания разметки используй шаблонные строки и insertAdjacentHTML().

const galleryEl = images.map(image => {``
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('picture');
  const imageEl = document.createElement('img');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.classList.add('img');
  listItemEl.appendChild(imageEl);
  return listItemEl;
});

//   Все элементы галереи должны добавляться в DOM за одну операцию вставки.

const imagesCollectuinEl = document.querySelector('#gallery');
imagesCollectuinEl.classList.add('image-collections');
console.log(imagesCollectuinEl);
imagesCollectuinEl.append(...galleryEl);

//   Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

