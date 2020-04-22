import './date-dropdown.scss';
require('@chenfengyuan/datepicker');

jQuery(document).ready(function($) {
    $('.date-dropdown').datepicker({
      autoHide: true,
      language: 'ru-RU'
    });
});

