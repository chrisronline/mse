(function() {
  'use strict';

  $(document).ready(function() {
    $('a').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      var hash = $(this).attr('href'),
        element = $(hash),
        top = element.offset().top;
      if (hash === '#top') {
        top = 0;
      }

      $('html, body').animate({ scrollTop: top }, {
        done: function() {
          window.location.hash = hash;
        }
      })
    });
  });
})();
