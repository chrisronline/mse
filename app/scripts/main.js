(function() {
  'use strict';

  $(document).ready(function() {
    $('a').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      var hash = $(this).attr('href'),
        element = $(hash);
      $('html, body').animate({ scrollTop: element.offset().top }, {
        done: function() {
          window.location.hash = hash;
        }
      })
    });
  });
})();
