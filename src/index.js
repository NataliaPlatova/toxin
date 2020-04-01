import * as $ from  'jquery/src/jquery';
import './theme/styles.scss';
require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');

//console.log('Hello world!');

//$('.jq').html('la-la-la');

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

$(document).ready(function() {
    //$(".iqdropdown").iqDropdown();

    requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
    requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(js?)$/));
})
