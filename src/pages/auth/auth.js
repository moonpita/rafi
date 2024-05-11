const submitForms = document.querySelectorAll('.fillForm__submit');

submitForms.forEach(submitBtn => {
  submitBtn.onclick = (e) => {
    e.preventDefault();
    validateFormOnPage(submitBtn.closest('form'));
  }
})