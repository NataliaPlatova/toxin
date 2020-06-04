require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown-item-count.scss';

$(document).ready(function() {
  const allPageDropdowns = $('.dropdown-items-count');
  for (let i=0; i<allPageDropdowns.length; i++) {
    const dropdown = $(allPageDropdowns[i]);
    const dropdownSelection = $(dropdown.children()[0]);
       dropdown.iqDropdown(
           {
             setSelectionText: (itemCount, totalItems) => {
               if (totalItems === 0) {
                 return `${dropdownSelection.data('placeholder')}`;
               } else {
                   const allItems = Object.keys(itemCount);
                   const dropdownMenu = $(dropdown.children()[1]);
                   const allOptions = $(dropdownMenu.children());
                    for (let x=0; x<allOptions.length; x++) {
                        const option = $(allOptions[x]);
                        const item = allItems[x];
                        console.log(item);
                    }
               }
             }
           }
       );
  }
});

