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
