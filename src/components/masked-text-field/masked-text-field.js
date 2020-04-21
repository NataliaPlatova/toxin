import './masked-text-field.scss';
var Inputmask = require('inputmask');

var selector = document.querySelector(".masked-input");

var im = new Inputmask({alias: "datetime", inputFormat: "dd\.mm\.yyyy", placeholder: "ДД.ММ.ГГГГ"});
im.mask(selector);
