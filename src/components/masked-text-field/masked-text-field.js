import './masked-text-field.scss';
var Inputmask = require('inputmask');

var selector = document.getElementsByClassName("masked-input");

var im = new Inputmask({alias: "datetime", inputFormat: "dd/mm/yyyy"});
im.mask(selector);
