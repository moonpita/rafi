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

const swiper3 = new Swiper('.reviews-slider', {
  loop: false,
  spaceBetween: 21,
  slidesPerView: 3,

  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
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
      spaceBetween: 21,
      slidesPerView: 3,
    }
  }
});

const swiper4 = new Swiper('.related', {
  loop: false,
  spaceBetween: 21,
  slidesPerView: 3,

  navigation: {
    nextEl: '.related-next',
    prevEl: '.related-prev',
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
      spaceBetween: 21,
      slidesPerView: 3,
    }
  }
});