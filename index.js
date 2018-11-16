// ***********************头部************
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

 //**************************主体***************** */
//  查看详情
$(document).ready(function(){
    $(".my_pir").mouseenter(function(){
        $(this).children().eq(1).animate({opacity:1},300);
       
    })
    $(".my_pir").mouseleave(function(){
        $(this).children().eq(1).animate({opacity:0},300);
      
    })
})
// 底部 轮播
var n=0;
setInterval(function(){
    
    n++;
    if(n==5){
        n=0;
    }
    // // console.log($(".con_content")[0].style)
    $(".con_content")[0].style.left=-n*26+"%";
    console.log($(".con_content")[0].style.left)
    
},1500)
