/************* Custom Js File *******************************

    Template Name: Portfolio Template
    Author: shefat production
    Version: 1.0
    Copyright 2018
    
*************************************************************/


/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - smooth scroll
02 - scroll js nav bar, comes after scrolling
03 - Skills Progress Bars
04 - Light box js
05 - port-folio part sliding  js
06 - back to top button js
07 - wow activation  js


--------------------------------------------------------------------------------*/


(function ($) {

    "use strict";


})(jQuery);

/*-------------------------------------
    07 - wow activation  js
-------------------------------------*/
var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
