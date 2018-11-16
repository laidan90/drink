// 导航
$(".nav-item ").mouseenter(function(){
    $(this).children().eq(1).show();
    $(this).children().eq(0).addClass("hover")
 })
 $(".nav-item ").mouseleave(function(){
     $(this).children().eq(1).hide();
     $(this).children().eq(0).removeClass("hover")
  })
 // 自动轮播时间
 $(function(){
     $('#carouselExampleIndicators').carousel({
      interval: 1500
     });
  });
 