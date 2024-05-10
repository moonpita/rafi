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