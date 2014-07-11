(function() {
  'use strict';

  var root = $('html, body');
  var onLoadHash = window.location.hash;

  function anchorScroll(hash) {
    var element = $(hash),
      top = hash === '#top' ? 0 : global.getElementTop(element);

    root.animate({ scrollTop: top }, {
      done: function() {
        window.location.hash = hash;
      }
    });
  }

  $(document).ready(function() {
    $('header nav a[href*=#]').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      anchorScroll($(this).attr('href'));
    });
    
    if (onLoadHash) {
      setTimeout(function() {
        anchorScroll(onLoadHash);
      });
    }
  });
})();
