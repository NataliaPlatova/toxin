import * as $ from  'jquery/src/jquery';
import './theme/styles.scss';
require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
import './components/kit-header/kit-header'

//console.log('Hello world!');

//$('.jq').html('la-la-la');

$(document).ready(function() {
    $(".iqdropdown").iqDropdown();
})
