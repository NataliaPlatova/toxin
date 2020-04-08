import './range-slider.scss';
require('ion-rangeslider/js/ion.rangeSlider.min');

const slider = $('.js-range-slider');
slider.ionRangeSlider();
slider.on('change', function () {
    var values = slider[0].value.split(';');
    var fromValue = $('.slider__from').html(values[1]);
    var toValue = $('.slider__to').html(values[0]);
    console.log(fromValue, toValue);
});


