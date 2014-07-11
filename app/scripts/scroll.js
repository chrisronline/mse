(function() {
  'use strict';

  $(document).ready(function() {
    var fixedPoint = $('.content').offset().top - $('#header nav').height();
    var clonedHeader = $('#header nav').clone().addClass('floating').addClass('hidden');
    $('#header nav').before(clonedHeader);
    var sectionIds = _.map($('section[id]'), function(n) {
      var id = $(n).attr('id');
      if (id === 'home') id = 'top';
      return id;
    });
    var aboutIds = _.map($('article[id]'), function(n) { return $(n).attr('id'); }).reverse();

    function scroll() {
      var scrollTop = $(document).scrollTop();
      if (scrollTop >= fixedPoint) {
        clonedHeader.addClass('visible');
      }
      else {
        clonedHeader.removeClass('visible');
      }

      if (scrollTop + $(window)[0].innerHeight === $('body').outerHeight()) {
        $('#header nav').find('a').removeClass('active');
        $('#header nav').find('a[href="#contact"]').addClass('active');
      }
      else {
        var added = false;
        for (var i = sectionIds.length - 1; i >= 0; i--) {
          var section = $('#header nav').find('a[href="#' + sectionIds[i] + '"]');
          if (!added && scrollTop >= global.getElementTop($('#' + sectionIds[i]))) {
            section.addClass('active');
            if (sectionIds[i] === 'about') {
              var aboutAdded = false;
              _.each(aboutIds, function(aboutId) {
                var aboutElement = $('#' + aboutId);
                var aboutNavElement = $('.floating a[href="#' + aboutId + '"]');
                if (!aboutAdded && scrollTop >= global.getElementTop(aboutElement)) {
                  aboutNavElement.addClass('active');
                  aboutAdded = true;
                }
                else {
                  aboutNavElement.removeClass('active');
                }
              });
            }
            added = true;
          }
          else {
            section.removeClass('active');
          }
        }
      }
    }

    $(window).on('scroll', _.debounce(scroll, 100));
    scroll();
  });
})();
