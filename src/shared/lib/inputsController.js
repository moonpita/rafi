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