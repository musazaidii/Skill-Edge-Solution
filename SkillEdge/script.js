// Image Slider Script
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider .prev');
const nextBtn = document.querySelector('.slider .next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  showSlide(slideIndex);
  setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
}