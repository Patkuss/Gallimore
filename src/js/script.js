// hamburger //

$(document).ready(function(){
  $('#nav-icon').click(function(){
    const navIcon = this;
    const hiddenMenu = document.querySelector('.hiddenMenu');

    $(navIcon).toggleClass('open');
    $(hiddenMenu).toggleClass('activeMenu');
  });
});

// scrolled menu //

$(document).scroll(function () {
  if($(window).width() >= 950){
    var y = $(this).scrollTop();
    var firstSection = $('.aboutArea').offset().top;
    if (y+30 > firstSection) {
        $('.sectionMenu').removeClass('scrolledMenu');
    } else {
        $('.sectionMenu').addClass('scrolledMenu');
    }
  }
});

// map //

$(document).ready(function(){
  mapboxgl.accessToken = 'pk.eyJ1IjoicHBhdHJ5azkiLCJhIjoiY2tkOGtkaDNpMGRveTM0b2RtZ3djNXFmYSJ9.Ci0bsrMffkUltIh_WJc9lg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 16,
      center: [17.0041753, 51.0745433]
  });
  map.on('load', function() {
    map.loadImage(
      '../images/icon.png',
      function(error, image) {
        if (error) throw error;
        map.addImage('G', image);
        map.addSource('point', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [17.0041753, 51.0745433]
                }
              }
            ]
          }
        });
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'point',
          'layout': {
            'icon-image': 'G',
            'icon-size': 1
          }
        });
      }
    );
  });
});

// smooth scroll //
$(document).on('click', 'a[href^="#"]', function(smooth) {
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  smooth.preventDefault();
  var pos = $id.offset().top;
  $('body, html').animate({scrollTop: pos});
});

// scroll magic pin //

$(function() {
  var width = window.innerWidth;
  var controller = new ScrollMagic.Controller();

  if (width >= 950) {
  new ScrollMagic.Scene({
    triggerElement: "#aboutArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#LS1", {pushFollowers: false})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#aboutArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#RS1", {pushFollowers: false})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#LS2", {pushFollowers: false})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#RS2", {pushFollowers: false})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#LS3", {pushFollowers: false})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    triggerHook: 0,
    duration: '50%',
    reverse: true
  })
    .setPin("#RS3", {pushFollowers: false})
    .addTo(controller)
  }
});

// scroll magic fadeIn fadeOut //

$(function() {
  var width = window.innerWidth;
  var controller = new ScrollMagic.Controller();

  if (width >= 950) {
  new ScrollMagic.Scene({
    triggerElement: "#aboutArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#LS1", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    offset: -100,
    reverse: true
  })
    .setTween("#LS1", 0.2, {opacity:0})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#aboutArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#RS1", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    offset: -100,
    reverse: true
  })
    .setTween("#RS1", 0.2, {opacity:0})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#LS2", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    offset: -100,
    reverse: true
  })
    .setTween("#LS2", 0.2, {opacity:0})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#servicesArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#RS2", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    offset: -100,
    reverse: true
  })
    .setTween("#RS2", 0.2, {opacity:0})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#LS3", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#contactArea",
    offset: -100,
    reverse: true
  })
    .setTween("#LS3", 0.2, {opacity:0})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#productArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#RS3", 0.2, {opacity:1})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#contactArea",
    offset: -100,
    reverse: true
  })
    .setTween("#RS3", 0.2, {opacity:0})
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: "#contactArea",
    triggerHook: '5%',
    duration: '20%',
    reverse: true
  })
    .setTween("#LS4", 0.2, {opacity:1})
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#contactArea",
    triggerHook: '5%',
    reverse: true
  })
    .setTween("#RS4", 0.2, {opacity:1})
    .addTo(controller);
  }
});
