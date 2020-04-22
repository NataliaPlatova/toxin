import './date-dropdown.scss';
require('@chenfengyuan/datepicker');
require('@chenfengyuan/datepicker/i18n/datepicker.ru-RU')

jQuery(document).ready(function($) {
    $('.date-dropdown').datepicker({
      language: 'ru-RU',
      autoHide: true,
      format: 'dd\.mm\.yyyy'
    });
});

