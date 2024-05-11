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
    const parent = open.closest('.catalog-top-filter__open');
    open.onclick = () => {
      parent.classList.toggle('active');

      if (window.innerWidth < 769) {
        const name = parent.getAttribute('data-name');

        // remove active others
        document.querySelectorAll('.catalog-top-filter__open--menu').forEach(menu => {
          if (menu.getAttribute('data-name') === name) return;
          menu.classList.remove('active');
        })
        document.querySelectorAll('.catalog-top-filter__open').forEach(menu => {
          if (menu.getAttribute('data-name') === name) return;
          menu.classList.remove('active');
        })
        changeModalBgState();
        // active current
        document.querySelector(`.catalog-top-filter__open--menu[data-name="${name}"]`).classList.toggle('active');
      }
    }

  })

})();


(function() {
  if (window.innerWidth < 769) {
  
    const wrap = document.querySelector('.catalog-right');
    const allOpenMenu = document.querySelectorAll('.catalog-top-filter__open--menu');
    allOpenMenu.forEach(menu => {
      const newMenuEl = menu.cloneNode(true);

      wrap.appendChild(newMenuEl);
      menu.remove();
    });

  }
})();

const filterBtn = document.querySelector('.catalog-mob-top__filter');
const filter = document.querySelector('.catalog-left');

filterBtn.onclick = () => {
  filter.classList.add('active');
  changeModalBgState('enable')
}



const uppdateFilterIndicators = () => {
  if (window.innerWidth < 769) {
    const allCheckedInputs = document.querySelectorAll('.catalog-left input:checked');
    const wrapperForIndicator = document.querySelector('.catalog-top');
  
    // remove previous indicators
    document.querySelectorAll('.top-filter-indicator').forEach(i => i.remove());

    // add all indicators
    allCheckedInputs.forEach(inp => {
      const checkIndicator = document.createElement('div');
      const title = inp.closest('.input').querySelector('label').textContent;
      checkIndicator.innerHTML = `${title} <img src="../../shared/img/whiteRemove.svg">`
      checkIndicator.classList.add('top-filter-indicator')
  
      wrapperForIndicator.insertBefore(checkIndicator, wrapperForIndicator.firstChild);

      const removeEl = () => {
        checkIndicator.remove();
        inp.checked = false;
      }

      checkIndicator.querySelector('img').addEventListener('click', removeEl);
      
      return () => {
        checkIndicator.querySelector('img').removeEventListener('click', removeEl);
      }
    })
  }
}


// On every checkbox updates
const onUpdateFilter = () => {

  // Fetch
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('lalala');
    }, 500)
  });

  // Update html after fetch
  promise.then((lol) => {
    console.log(lol);
    uppdateFilterIndicators();
  })
}


const allFilterInputs = document.querySelectorAll('input');

allFilterInputs.forEach(inp => {
  inp.addEventListener('change', () => {
    onUpdateFilter();
  })
})