$(function () {
    $('.carousel-gallery .swiper-container').each(function () {
        var $swiperContainer = $(this);
        var $swiperImages = $swiperContainer.find('.swiper-slide img');

        // Отложенная инициализация Swiper после клика на изображение
        $swiperImages.on('click', function () {
            if (!$swiperContainer.hasClass('swiper-initialized')) {
                var swiper = new Swiper($swiperContainer, {
                    effect: 'slide',
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    simulateTouch: true,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.carousel-gallery .swiper-pagination',
                        clickable: true
                    },
                    initialSlide: 0,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5
                        },
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }
                });
            }
        });
    });
});
