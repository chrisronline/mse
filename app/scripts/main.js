(function() {
  'use strict';

  var root = $('html, body'),
    onLoadHash = null;

  function anchorScroll(hash) {
    var element = $(hash),
      top = hash === '#top' ? 0 : element.offset().top;

    root.animate({ scrollTop: top }, {
      done: function() {
        window.location.hash = hash;
      }
    });
  }

  $(document).ready(function() {
    $('a[href*=#]').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      anchorScroll($(this).attr('href'));
    });

    if (onLoadHash !== null) {
      setTimeout(function() {
        anchorScroll(onLoadHash);
      }, 100);
    }
  });

  if (window.location.hash) {
    onLoadHash = window.location.hash;
    window.location.hash = '';
  }
})();
