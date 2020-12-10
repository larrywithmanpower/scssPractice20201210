$(document).ready(function () {
    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        effect: 'slide',
        speed: 2000,
        autoplay: {
            delay: 5000,
        },        
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        //   使分頁的點可以點擊換頁
          clickable :true,
        },      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',     
        //隱藏箭頭   
          hideOnClick: true,
          hiddenClass:'swiper-button-hidden',
        },
      
    })

    // return top
    $('.return').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
    });
   
    // dropDown open
    $('.list').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.dropDown').slideToggle();
        $(this).parent().siblings().find('.list').removeClass('active');
        $(this).parent().siblings().find('.dropDown').slideUp();
    });
});