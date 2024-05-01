const swiper1 = new Swiper('.products-slider-1', {
  loop: false,
  spaceBetween: 18,
  slidesPerView: 3,

  navigation: {
    nextEl: '.products-top-btns__next-1',
    prevEl: '.products-top-btns__prev-1',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    481: {
      slidesPerView: 2,
    },
    981: {
      spaceBetween: 18,
      slidesPerView: 3,
    }
  }

});
const swiper2 = new Swiper('.products-slider-2', {
  loop: false,
  spaceBetween: 18,
  slidesPerView: 3,

  navigation: {
    nextEl: '.products-top-btns__next-2',
    prevEl: '.products-top-btns__prev-2',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    481: {
      slidesPerView: 2,
    },
    981: {
      spaceBetween: 18,
      slidesPerView: 3,
    }
  }

});