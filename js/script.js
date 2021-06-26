$(document).ready(function(){
    $('.main-banner-wrap').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000
    })
    $('.sub-banner-wrap').slick({
      dots: true,
    });
    $('.sub3-slider-wrap').slick({
      dots: true,
    });
    $('.sub4-slider-wrap').slick({
      dots: true,
    });
    var $hoverImg = $('.hover-img-box')
    var $moreBtn = $('.more-btn')
    var $hoverDesc = $('.hover-desc')
    $moreBtn.eq(0).hide()
    $moreBtn.eq(1).hide()
    $moreBtn.eq(2).hide()
    $hoverImg.eq(1).hide();
    $hoverImg.eq(2).hide();
    $('.hover-desc').mouseover(function(){
      var idx = $(this).index();
        $hoverImg.hide();
        $hoverImg.eq(idx).show();
        $moreBtn.eq(idx).show(idx);
    })
    
  });
  