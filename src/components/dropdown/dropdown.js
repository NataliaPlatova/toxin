require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown.scss';

$(document).ready(function() {
  const allPageDropdowns = $('.dropdown-total');
  for (let i=0; i<allPageDropdowns.length; i++) {
    const dropdown = $(allPageDropdowns[i]);
    const dropdownSelection = $(dropdown.children()[0]);
       dropdown.iqDropdown(
           {
             setSelectionText: (itemCount, totalItems) => {
               if (totalItems === 0) {
                 return `${dropdownSelection.data('placeholder')}`;
               } else if ((totalItems % 10 >= 5 || totalItems % 10 === 0) || (totalItems % 100 <= 20 && totalItems % 100 >= 11)) {
                 return `${totalItems} ${dropdownSelection.data('text-plural-2')}`;
               } else if (totalItems % 10 === 1) {
                 return `${totalItems} ${dropdownSelection.data('selection-text')}`;
               } else {
                   return `${totalItems} ${dropdownSelection.data('text-plural')}`;
               }
             }
           }
       );
  }
});

