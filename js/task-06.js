// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const refs = {
    input: document.querySelector('input'),
    inputLength: document.querySelector('[data-length]')
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
    console.log(event.currentTarget.value.length);
    
    if(refs.input.value.length >= refs.inputLength.dataset.length){
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid')
    } else{refs.input.classList.add('invalid');
    refs.input.classList.remove('valid')
}
}
