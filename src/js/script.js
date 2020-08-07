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
  var y = $(this).scrollTop();
  var firstSection = $('.aboutArea').offset().top;
  if (y+30 > firstSection) {
      $('.sectionMenu').removeClass('scrolledMenu');
  } else {
      $('.sectionMenu').addClass('scrolledMenu');
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
