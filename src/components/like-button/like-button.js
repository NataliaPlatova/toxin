import './like-button.scss';

$('.like-button').on('click', function() {
    let counter = $(this).children().last();
    let counterValue = counter.val();
    console.log(counterValue);
    counter.html(String(counterValue+1));
});

