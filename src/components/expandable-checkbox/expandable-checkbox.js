import './expandable-checkbox.scss';

const dropdownButton = document.querySelector('.expandable-list__button');
const list = document.querySelector('.expandable-list__checkbox-list');

dropdownButton.addEventListener('click', function () {
    dropdownButton.classList.toggle('expandable-list__button_pressed');
    list.classList.toggle('expandable-list__checkbox-list_opened');
});

