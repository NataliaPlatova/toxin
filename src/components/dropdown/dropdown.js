require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown.scss';

$(document).ready(function() {
    $(".dropdown").iqDropdown({
        onChange: (id, count, totalItems) => {
            if(totalItems===0) {
                $('.dropdown__selection').css('display', 'none');
                $('.dropdown__default-text').css('display', 'block');
            } else {
                $('.dropdown__selection').css('display', 'block');
                $('.dropdown__default-text').css('display', 'none');
            }
            let a = totalItems%10;
            if((a>=5 || a===0) || (totalItems%100<=20 && totalItems%100>=11)){
                let selection = $('.dropdown__selection');
                let selectionPluralText = selection.attr('data-text-plural-2');
                selection.html(`${totalItems} ${selectionPluralText}`);
            } else if(a===1) {
                let selection = $('.dropdown__selection');
                let selectionPluralText = selection.attr('data-text-plural-3');
                selection.html(`${totalItems} ${selectionPluralText}`);
            }
        }
    });
});

