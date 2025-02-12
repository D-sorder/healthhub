const answersItem = document.querySelectorAll('.answers__item');

answersItem.forEach(item => {
    let open = item.querySelector('.answers__plus');
    open.addEventListener('click', () => {
        let text = item.querySelector('.answers__hidden');
        text.classList.toggle('show');

    })
});