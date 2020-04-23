require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown.scss';

$(document).ready(function() {
    $(".dropdown").iqDropdown(
        {
            setSelectionText(itemCount, totalItems) {
                if (totalItems === 0) {
                    return "Сколько гостей";
                } else if((totalItems%10>=5 || totalItems%10===0) || (totalItems%100<=20 && totalItems%100>=11)){
                    return `${totalItems} гостей`;
                }else if(totalItems%10===1) {
                    return `${totalItems} гость`;
                }else {
                    return `${totalItems} гостя`;
                }
            },
            onChange: (id, count, totalItems) => {
                this.setSelectionText(count, totalItems);
            }
        });
});

