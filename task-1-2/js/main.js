$(document).ready(function(){
    $('.header').height($(window).height());
   });

$('.carousel').carousel({
    interval: 3000
  });
  $('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
