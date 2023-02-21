const prevBtn = document.querySelector('.carousel-prev-btn');
const nextBtn = document.querySelector('.carousel-next-btn');
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel__img');
const slideWidth = slides[0].clientWidth;
const visibleSlidesCount = 3;
let currentSlide = visibleSlidesCount;

// Обновляет порядок слайдов в карусели
function updateSlidesOrder() {
  const slides = carousel.querySelectorAll('.carousel__img');
  for (let i = 0; i < slides.length; i++) {
    let slideOrder = i - currentSlide;
    if (slideOrder < 0) {
      slideOrder += slides.length;
    }
    slides[i].style.order = slideOrder;
  }
}

// Переключает на следующий слайд
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlidesOrder();
}

// Переключает на предыдущий слайд
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlidesOrder();
}

// Слушатели событий на кнопках управления
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Изменяем порядок слайдов, чтобы первоначально показывались видимые слайды
updateSlidesOrder();
