(function() {
  
  const dropDownBtns = document.getElementsByClassName('dropdownInput__btn');

  for (let i = 0; i < dropDownBtns.length; i++) {
    const btn = dropDownBtns[i];
    btn.onclick = () => {
      const dropdown = btn.closest('.dropdownInput');
      const panel = btn.nextElementSibling;

      dropdown.classList.toggle('active');

      if (dropdown.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight;
      } else {
        panel.style.maxHeight = null;
      }
      
    }
  }

  const dropDownItems = document.getElementsByClassName('dropdownInput__panel--item');

  for (let i = 0; i < dropDownItems.length; i++) {
    const item = dropDownItems[i];

    item.onclick = () => {
      const dropdown = item.closest('.dropdownInput');
      
      const dropdownInput = dropdown.querySelector('.input--field');
      const dropdownPreview = dropdown.querySelector('.dropdownInput__btn--preview');

      dropdownInput.value = item.getAttribute('data-value');
      dropdownPreview.textContent = item.textContent;

      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdownInput__panel').style.maxHeight = null;
    }
  }


})();


// fileReaders

(function() {
  const inputs = document.getElementsByClassName('imageInput__field');

  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];
    inp.addEventListener('change', () => {
      const parent = inp.closest('.imageInput');
      // remove old photos
      parent.querySelectorAll('.new-photo').forEach(photo => photo.remove());
      for (let j = 0; j < inp.files.length; j++) {
        const reader = new FileReader();
        
        reader.onloadend = function() {
          const newPhotoBlock = document.createElement('div');
          newPhotoBlock.innerHTML = `
            <img src="${reader.result}">
          `;
          newPhotoBlock.classList.add('new-photo')
          inp.closest('.imageInput').append(newPhotoBlock);
        };
        reader.readAsDataURL(inp.files[j]);
      }

    })

  }

})();

// Big photo

(function() {
  const inputs = document.getElementsByClassName('bigPhotoInput__field');

  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];
    inp.addEventListener('change', () => {
      const parent = inp.closest('.bigPhotoInput');

      for (let j = 0; j < inp.files.length; j++) {
        const reader = new FileReader();
        
        reader.onloadend = function() {
          const photo = parent.querySelector('.bigPhotoInput__label--photo');

          photo.setAttribute('src', reader.result);
        };
        reader.readAsDataURL(inp.files[j]);
      }
    })
  }

})();


// Dropdown with search 

(function() {
  const dropdownSearchFields = document.querySelectorAll('.dropdownInput__panel--search');
  dropdownSearchFields.forEach(field => {
    const parentEl = field.closest('.dropdownInput__panel');
    const allitems = parentEl.querySelectorAll('.dropdownInput__panel--item');
    console.log(field);
    field.addEventListener('input', (e) => {
      console.log(e);
      allitems.forEach(item => {
        if (item.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
          item.style.display = null
        } else {
          item.style.display = 'none';
        }
      })

    })
  })
})();


// Phone inputs

(function() {

  if (!document.querySelector('.phone-input')) return;

  const phoneInputs = document.querySelectorAll('.phone-input');

  phoneInputs.forEach(inp => {
    IMask(
      inp,
      {
        mask: '+{62-361}(000)-0000'
      }
    )
  })
})();





// Form valid controller

const vanilaInputs = document.querySelectorAll('input[type="text"], textarea');
vanilaInputs.forEach(inp => {
  inp.addEventListener('focus', () => {
    inp.closest('.input').classList.remove('error');
  })
 
})
const fileInputs = document.querySelectorAll('input[type="file"]');
fileInputs.forEach(inp => {
  inp.addEventListener('change', () => {
    inp.closest('.imageInput').classList.remove('error');
  })
});
const dropdownBtns = document.querySelectorAll('.dropdownInput__btn');
dropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.dropdownInput').classList.remove('error');
  })
})

const validateFormOnPage = (form) => {
  console.log(form);
  // const form = document.querySelector(`.${className}`);

  let hasErrors = false;
  // text validations-----------------------------------------------
  const textInputsWraps = form.querySelectorAll('.valid-text-input');
  textInputsWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    console.log(inp, ' checking input');
    if (inp.getAttribute('required') == 'false') return;
    const minLength = inp.getAttribute('data-min-length') || 3;
    console.log(inp.value.length, minLength, ' text input, minLength check')
    if (inp.value.length < minLength) {
      // console.log('error in inp');
      wrap.classList.add('error');
      hasErrors = true;
    }
  });

  // phone validations-----------------------------------------------
  const phoneInputsWraps = form.querySelectorAll('.valid-phone-input');
  phoneInputsWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    console.log(inp, ' phone input');
    if (inp.getAttribute('required') == 'false') return;
    console.log(inp.value.length, ' phone input, length');
    if (inp.value.length < 17) {
      wrap.classList.add('error');
      hasErrors = true;
    }
  });
  // dropdown validations-----------------------------------------------
  const dropdownInputsWraps = form.querySelectorAll('.valid-dropdown-input');
  dropdownInputsWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    console.log(inp, ' dropdown inp')
    if (inp.getAttribute('required') == 'false') return;
    console.log(inp.value, ' value in dropdown');
    if (inp.value.length < 1) {
      wrap.classList.add('error');
      console.log('err in drop')
      hasErrors = true;
    };
  });
  // images validations-----------------------------------------------
  const imageInputsWraps = form.querySelectorAll('.valid-image-input');
  imageInputsWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    const limitOfFiles = +inp.getAttribute('data-max-photos');
    
    // optional, but count of photos bigger than limit
    if (inp.files.length > limitOfFiles) {
      wrap.classList.add('error');
      wrap.classList.add('length-error');
      hasErrors = true;
    }
    // required, but not filed
    if (
      (inp.getAttribute('required') == 'true') 
      &&
      (inp.files.length < 1)
      ) {
        wrap.classList.add('error');
        wrap.classList.add('required-error');
        hasErrors = true;
      }
  });
  // textarea validations-----------------------------------------------
  const textAreaWraps = form.querySelectorAll('.valid-textarea-input');
  textAreaWraps.forEach(wrap => {
    const area = wrap.querySelector('textarea');
    if (area.getAttribute('required') == 'false') return;

    const minLength = area.getAttribute('data-min-length') || 3;
    if (area.value.length < minLength) {
      wrap.classList.add('error');
      hasErrors = true;
    }
  });
  // email validations
  const emailInputsWraps = form.querySelectorAll('.valid-email-input');
  emailInputsWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    if (inp.getAttribute('required') == 'false') return;
    const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!inp.value.toLowerCase().match(regex)) {
      wrap.classList.add('error');
      hasErrors = true;
    }
  });
  // checkbox validations
  const checkboxWraps = document.querySelectorAll('.input__checkbox');
  checkboxWraps.forEach(wrap => {
    const inp = wrap.querySelector('input');
    if (inp.getAttribute('required') == 'false') return;
    if (!inp.checked) {
      wrap.classList.add('error');
      hasErrors = true;
    }
  });
}