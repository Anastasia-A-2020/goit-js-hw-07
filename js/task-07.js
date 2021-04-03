// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    message: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    refs.message.style.fontSize = event.currentTarget.value + 'px';
    console.log(refs.message.style.fontSize);
}

