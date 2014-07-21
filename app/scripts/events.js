(function() {
  'use strict';

  var events = [
    {
      date: '06/01/2014',
      time: '1:30pm',
      title: 'Car Show @ Webster',
      link: 'https://goo.gl/maps/otdvB',
      venue: 'Webster Fireman\'s Field'
    },
    {
      date: '07/04/2014',
      time: 'All Day',
      title: 'Private Party',
      private: true
    },
    {
      date: '07/16/2014',
      time: '6:30pm',
      title: 'United Church of Christ',
      link: 'https://goo.gl/maps/bknbg',
      venue: 'Klem Rd Webster, NY'
    },
    {
      date: '07/19/2014',
      time: '7:00pm',
      title: 'Relay For Life',
      link: 'https://goo.gl/maps/HZttt',
      venue: 'Frontier Field'
    },
    {
      date: '08/09/2014',
      time: 'All Day',
      title: 'Private Party',
      private: true
    },
    // {
    //   date: '08/16/2014',
    //   time: '4:30pm',
    //   title: 'Webster Village Days',
    //   link: 'https://goo.gl/maps/7RYQA',
    //   venue: 'Webster, NY'
    // },
    {
      date: '08/23/2014',
      time: '7pm - 9pm',
      title: 'Ontario Summer Sendoff',
      link: 'https://goo.gl/maps/moeGm',
      venue: 'Casey Park'
    },
    {
      date: '09/06/2014',
      time: 'All Day',
      title: 'Private Party',
      private: true
    },
    {
      date: '09/27/2014',
      time: 'All Day',
      title: 'Private Party',
      private: true
    },
    {
      date: '10/18/2014',
      time: '1:00pm',
      title: 'Walworth Harvest Moon Festival',
      link: 'https://goo.gl/maps/lrpuJ',
      venue: 'Ginegaw Park'
    },
    {
      date: '10/11/2014',
      time: '7:00pm',
      title: 'Legends 102.7FM Fall Dance',
      link: 'https://goo.gl/maps/l94YE',
      venue: 'Lodge on the Green @ Greece, NY'
    }
  ];

  var now = moment();

  // Sort by date
  events = _.sortBy(events, function(event) {
    return moment(event.date, 'MM/DD/YYYY').unix();
  });

  // Add some additional information to the events
  events = _.map(events, function(event) {
    event.inPast = moment(event.date, 'MM/DD/YYYY').isBefore(now);
    return event;
  });

  // Determine the next event
  var nextEvent = _.find(events, function(event) {
    event.isNext = !event.private && moment(event.date, 'MM/DD/YYYY').isAfter(now);
    return event.isNext;
  });

  rivets.bind($('#nextGig'), { event: nextEvent });
  rivets.bind($('#gigs'), { events: events });
})();
