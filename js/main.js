jQuery(document).ready(function($){
  $("#main-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true
  });

  // $('.grid_container').masonry({
  // // options
  // //initLayout: false,
  // itemSelector: '.grid-item',
  // columnWidth: '.grid_size',
  // //percentPosition: true,
  // gutter: '.gutter-sizer',
  // fitWidth: true,
  // resize: true
  // });
});

var elem = document.querySelector('.grid_container');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid_size',
  // //percentPosition: true,
  // gutter: '.gutter-sizer',
  // fitWidth: true,
  // resize: true
});
