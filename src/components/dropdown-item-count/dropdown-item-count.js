require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './dropdown-item-count.scss';

$(document).ready(function() {
  function chooseSelectionText(option) {
      if ((totalItems % 10 >= 5 || totalItems % 10 === 0) || (totalItems % 100 <= 20 && totalItems % 100 >= 11)) {
          return `${totalItems} ${dropdownSelection.data('text-plural-2')}`;
      } else if (totalItems % 10 === 1) {
          return `${totalItems} ${dropdownSelection.data('selection-text')}`;
      } else {
          return `${totalItems} ${dropdownSelection.data('text-plural')}`;
      }
  }
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
                   let finalInputText = '';
                    for (let x=0; x<allOptions.length; x++) {
                        const option = $(allOptions[x]);
                        const item = allItems[x];
                        if (itemCount[item]!==0) {
                            const itemAmount = itemCount[item];
                            const option = $(allOptions[x]);
                            let selectionText;
                            let itemAmountText;
                            if ((itemAmount % 10 >= 5 || itemAmount % 10 === 0) || (itemAmount % 100 <= 20 && itemAmount % 100 >= 11)) {
                                selectionText = option.data('text-plural-2');
                            } else if (itemAmount % 10 === 1) {
                                selectionText = option.data('selection-text');
                            } else {
                                selectionText = option.data('text-plural');
                            }
                            itemAmountText = `${itemAmount} ${selectionText}`;
                            console.log (itemAmountText);
                            if (finalInputText === '') {
                                finalInputText = `${itemAmountText}`;
                            } else {
                                finalInputText = `${finalInputText}, ${itemAmountText}`;
                            }
                        }
                    }
                    return finalInputText;
               }
             }
           }
       );
  }
});

