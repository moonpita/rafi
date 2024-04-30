(function() {

  const allAccBtns = document.querySelectorAll('.help__btn');
  allAccBtns.forEach(btn => {
    btn.onclick = () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      panel.classList.toggle('active');
  
      if (panel.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight;
      } else {
        panel.style.maxHeight = null;
      }
    }

  })


})();