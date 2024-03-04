(function () {
  "use strict";

  var carousels = function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 0,
          loop: false
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 0,
          loop: true
        }
      }
    });

    // Добавляем указатель кнопки ссылки при наведении на окошко
    $(".swiper-container").on('mouseenter', '.swiper-slide', function () {
      $(this).css('cursor', 'pointer');
    });
  };

  carousels();
})();
