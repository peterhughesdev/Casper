/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";
    $(document).ready(function(){
        $(".post-content").fitVids();
        hljs.configure({tabReplace: "    "});
        hljs.initHighlightingOnLoad();
    });
}(jQuery));