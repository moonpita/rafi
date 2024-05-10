(function() {

  const categories = document.querySelectorAll('.productsCategories-item');

  categories.forEach(category => {
    const subcats = category.querySelectorAll('.productsCategories-item__subcategory');
    if (subcats.length < 5) return;

    category.classList.add('hidden');
    const hiddenCount = subcats.length - 3;
    const moreBtn = category.querySelector('.more-btn');
    moreBtn.textContent = `more ${hiddenCount}`;

    moreBtn.onclick = () => {
      category.classList.remove('hidden');
    }
  });


})();


(function() {
  if (document.querySelector('.slideInput')) {
    const slideInputs = document.querySelectorAll('.slideInput');

    slideInputs.forEach(slideInput => {
      const wrapper = slideInput.closest('.slideInput-wrapper');
      const minInput = wrapper.querySelector('.min');
      const maxInput = wrapper.querySelector('.max');


      const minValue = +minInput.getAttribute('data-min-value')
      const maxValue = +maxInput.getAttribute('data-max-value')
      // init slider
      noUiSlider.create(slideInput, {
        start: [minValue, maxValue],
        connect: true,
        range: {
            'min': minValue,
            'max': maxValue
        },
        step: maxValue / 100
      });
      

      // Update slider on input changes
      minInput.addEventListener('change', (e) => {
        slideInput.noUiSlider.set([e.target.value, null]);
      })
      maxInput.addEventListener('change', (e) => {
        slideInput.noUiSlider.set([null, e.target.value]);
      })

      // update inputs on slider change

      slideInput.noUiSlider.on('update', (values, handle) => {
        const value = values[handle];

        // === 0 more obviously
        if (handle === 0) {
          minInput.value = Math.round(value);
        } else {
          maxInput.value = Math.round(value);
        }
      });

    })

  }
})();



(function() {

  const openFilters = document.querySelectorAll('.catalog-top-filter__open--text');

  openFilters.forEach(open => {

    open.onclick = () => {
      open.closest('.catalog-top-filter__open').classList.toggle('active');
    }

  })

})();
