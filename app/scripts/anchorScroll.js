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

      var scrollTo = $(this).data('scroll-to');
      if (scrollTo) {
        scrollTo = '#' + scrollTo;
        if ($(scrollTo).length === 0) {
          scrollTo = null;
        }
      }

      anchorScroll(scrollTo || $(this).attr('href'));
    });

    if (onLoadHash) {
      setTimeout(function() {
        anchorScroll(onLoadHash);
      });
    }
  });
})();
