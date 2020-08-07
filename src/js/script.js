$(document).ready(function(){
	$('#nav-icon').click(function(){
    const navIcon = this;
    const hiddenMenu = document.querySelector('.hiddenMenu');

    $(navIcon).toggleClass('open');
    $(hiddenMenu).toggleClass('activeMenu');
	});
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  var firstSection = $('.aboutArea').offset().top;
  if (y+30 > firstSection) {
      $('.sectionMenu').removeClass('scrolledMenu');
  } else {
      $('.sectionMenu').addClass('scrolledMenu');
  }
});