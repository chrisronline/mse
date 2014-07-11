(function() {
  'use strict';

  window.global = {};
  window.global.getElementTop = function(element) {
    return element.offset().top - $('#header nav').height() - parseInt(element.css('marginTop'));
  };

  rivets.formatters.prepend = function(el, value) {
    return value + el;
  };
})();
