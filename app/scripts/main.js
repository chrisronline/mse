(function() {
  'use strict';

  $(document).ready(function() {
    var root = $('html, body');
    $('a[href*=#]').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      var hash = $(this).attr('href'),
        element = $(hash),
        top = element.offset().top;
      if (hash === '#top') {
        top = 0;
      }

      root.animate({ scrollTop: top }, {
        done: function() {
          window.location.hash = hash;
        }
      })
    });
  });
})();
