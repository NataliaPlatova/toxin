require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown.scss';

$(document).ready(function() {
    $(".dropdown").iqDropdown({
        onChange: (id, count, totalItems) => {
            console.log('hhhgg');
            if(totalItems===0) {
                $('.dropdown__selection').css('display', 'none');
                $('.dropdown__default-text').css('display', 'block');
                console.log('null');
            } else {
                $('.dropdown__selection').css('display', 'block');
                $('.dropdown__default-text').css('display', 'none');
            }
        }
    });
});

