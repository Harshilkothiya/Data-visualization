$(document).ready(function(){
    $(".hero-slider").owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout: 3500,
    autoplayHoverPause:false,
    navText: [
       `<i class="fa-solid fa-chevron-left"></i>`,
       `<i class="fa-solid fa-chevron-right"></i>`
    ],
    dots: false,    
  });
  $('.tool-slider').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    navText: [
      `<i class="fa-solid fa-chevron-left"></i>`,
      `<i class="fa-solid fa-chevron-right"></i>`
   ],
    items: 3,
    dots: true,
    dotsEach: true
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})
    $(window).scroll(function(){
      var aTop = $('nav').height();
      if($(this).scrollTop()>=aTop){
        $('nav').addClass('stick');
      }
      else
      {
       $('nav').removeClass('stick'); 
      }
    });
  });
