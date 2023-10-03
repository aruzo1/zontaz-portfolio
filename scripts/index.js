const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 32,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 4,
    },
  },
});
