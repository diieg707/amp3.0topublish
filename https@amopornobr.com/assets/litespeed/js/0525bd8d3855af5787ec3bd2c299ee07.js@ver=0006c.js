"use strict";var WPMLLanguageSwitcherDropdown=function(){function t(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}return{init:function(){for(var e=document.querySelectorAll(".js-wpml-ls-legacy-dropdown a.js-wpml-ls-item-toggle"),n=0;n<e.length;n++)e[n].addEventListener("click",t)}}}();document.addEventListener("DOMContentLoaded",function(){WPMLLanguageSwitcherDropdown.init()})
;