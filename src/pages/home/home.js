const swiper1 = new Swiper('.products-slider-1', {
  loop: true,
  spaceBetween: 18,
  slidesPerView: 3,

  navigation: {
    nextEl: '.products-top-btns__next-1',
    prevEl: '.products-top-btns__prev-1',
  },

});
const swiper2 = new Swiper('.products-slider-2', {
  loop: true,
  spaceBetween: 18,
  slidesPerView: 3,

  navigation: {
    nextEl: '.products-top-btns__next-2',
    prevEl: '.products-top-btns__prev-2',
  },

});