$(window).scroll(function () {
  let topOffset = $(window).scrollTop();
  let aboutOffset = $("#about").offset().top;
  if (topOffset > aboutOffset) {
    $(".nav").css({"background-color": "rgba(0, 0, 0, 0.1)","transition":"all 2s"});
    $(".fa-arrow-alt-circle-up").fadeIn(2000)
  } 
  
  else {
    $(".nav").css("background-color", "transparent");
    $(".fa-arrow-alt-circle-up").fadeOut(2000)

  }
});

$("a").click(function () {
  let currentLink = $(this).attr("href");
  console.log(currentLink);
  let currentOffset = $(currentLink).offset().top;
  console.log(currentOffset);
  $("body").animate({scrollTop: currentOffset},2000);
});


$(".fa-arrow-alt-circle-up").click(function(){
$("body").animate({scrollTop:0},2000)
})


$(document).ready(function(){
$(".load").fadeOut(2000)
})



// import {workingHours,test} from "./tesetModules.js"

// alert(workingHours,test())



$('.skitter').skitter({
  dots: false,
  numbers: true,
  with_animations:["paralell", "glassBlock", "swapBars"]

});
	


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:4,
    autoplay:true,
    autoplayTimeout:1000,
    loop:true,
   
  });
});