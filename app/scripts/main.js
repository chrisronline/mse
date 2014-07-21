(function() {
  'use strict';

  window.global = {};
  window.global.getElementTop = function(element) {
    return !element || !element.length ? 0 : element.offset().top - $('#header nav').height() - parseInt(element.css('marginTop'));
  };

  rivets.formatters.prepend = function(el, value) {
    return value + el;
  };
  rivets.binders['id-*'] = function(el, value) {
    if (value) {
      $(el).attr('id', this.args[0]);
    }
  };
})();
