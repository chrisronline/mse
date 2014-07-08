(function() {
  'use strict';

  var root = $('html, body');
  var onLoadHash = null;

  $(document).ready(function() {
    var headerNav = $('#header nav');
    var headerNavHeight = headerNav.height();
    var clonedHeader = headerNav.clone().addClass('floating').addClass('hidden');
    var toFixedPoint = $('.content').offset().top - headerNavHeight;
    var sectionIds = $.map($('section[id]'), function(n) {
      var id = $(n).attr('id');
      if (id === 'home') id = 'top';
      return id;
    });
    headerNav.before(clonedHeader);
    headerNav = $('#header nav');

    function anchorScroll(hash) {
      var element = $(hash),
        top = hash === '#top' ? 0 : element.offset().top - headerNavHeight;

      root.animate({ scrollTop: top }, {
        done: function() {
          window.location.hash = hash;
        }
      });
    }

    function scroll() {
      var scrollTop = $(document).scrollTop();
      if (scrollTop >= toFixedPoint) {
        clonedHeader.addClass('visible');
      }
      else {
        clonedHeader.removeClass('visible');
      }

      headerNav.find('a').removeClass('active');
      if (scrollTop + $(this).height() === $('body').outerHeight()) {
        headerNav.find('a[href="#contact"]').addClass('active');
      }
      else {
        for (var i = sectionIds.length - 1; i >= 0; i--) {
          if (scrollTop >= $('#' + sectionIds[i]).offset().top - headerNavHeight) {
            headerNav.find('a[href="#' + sectionIds[i] + '"]').addClass('active');
            break;
          }
        }
      }
    }

    $(window).on('scroll', scroll);

    $('header nav a[href*=#]').on('click', function(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      anchorScroll($(this).attr('href'));
    });

    if (onLoadHash) {
      setTimeout(function() {
        anchorScroll(onLoadHash);
        window.location.hash = '';
        scroll();
      });
    }
    else {
      scroll();
    }
  });

  if (window.location.hash && window.location.hash.length) {
    onLoadHash = window.location.hash;
  }
})();
