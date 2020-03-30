import * as $ from  'jquery/src/jquery';
import './css/styles.css';
import './scss/styles.scss';
require('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');

//console.log('Hello world!');

//$('.jq').html('la-la-la');

$(document).ready(function() {
    $(".iqdropdown").iqDropdown();
})
