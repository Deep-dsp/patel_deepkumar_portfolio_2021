var swiper = new Swiper('.swiper-container', {
   direction: 'vertical',
   slidesPerView: 3,
   spaceBetween: 30,
   mousewheel: true,
 grabCursor: true,
   loop: true,
   autoplay: {
     delay: 500,
     disableOnInteraction: false,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
});