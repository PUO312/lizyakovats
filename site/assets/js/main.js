document.addEventListener('DOMContentLoaded', function() {
    const btnUp = document.getElementById('btn-up');
    let isHidden = true; // флаг, указывающий, что кнопка в данный момент скрыта
  
    function showBtnUp() {
      if (window.scrollY > 100) {
        btnUp.style.display = 'block';
        setTimeout(function() {
          btnUp.style.opacity = '1';
        }, 10);
        isHidden = false; // кнопка сейчас не скрыта
      } else {
        if (!isHidden) { // если кнопка была видимой
          btnUp.style.opacity = '0';
          setTimeout(function() {
            btnUp.style.display = 'none';
          }, 300);
          isHidden = true; // кнопка снова скрыта
        }
      }
    }
  
    window.addEventListener('scroll', showBtnUp);
  
    btnUp.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    // Функция для отображения текущего слайда
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };

    // Инициализация слайдера
    const initSlider = () => {
        showSlide(currentSlide);
    };

    // Обработчик для кнопки "влево"
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Обработчик для кнопки "вправо"
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Запуск слайдера
    initSlider();
});

