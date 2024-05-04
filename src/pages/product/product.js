var swiperThumb = new Swiper(".pproductSwiper__thumb", {
  spaceBetween: 8,
  slidesPerView: 4,
  direction: 'vertical',
  freeMode: true,
  watchSlidesProgress: true,
});

var swiperMain = new Swiper(".pproductSwiper__main", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperThumb,
  },

  pagination: {
    el: ".product-pagination",
    clickable: true,
  },
});
