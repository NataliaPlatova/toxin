import './like-button.scss';

$('.like-button').on('click', function(e) {
    const counter = e.target.lastElementChild;
    let counterValue = Number(counter.innerHTML);
    counter.innerHTML = String(counterValue+1);
});

