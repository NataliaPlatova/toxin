import './like-button.scss';
import Heart from './img/heart.png';

function image() {
    const test = document.querySelector('.test');
    test.style.backgroundImage = `url(${Heart})`;
}

image();
