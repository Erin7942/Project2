$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정
    $('#content .main_topvisual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > $('.main_banner').offset().top - 500) $('.main_banner').addClass('on');
  });
});