import './kit-header.scss';
import Logo from './img/logo.png';

function component() {
    const element = document.createElement('div');
    element.classList.add('logo-block');

    const logoImage = new Image();
    logoImage.src = Logo;

    element.appendChild(logoImage);

    return element;
}

document.querySelector('.ui-kit__header').appendChild(component());
