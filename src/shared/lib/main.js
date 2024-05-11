const modalBg = document.querySelector('.modal-bg');
const body = document.querySelector('body');
function changeModalBgState(state = 'toggle') {
  if (state = 'toggle') {
    modalBg.classList.toggle('active');
    body.classList.toggle('disabled');
    return;
  } 
  if (state = 'enable') {
    modalBg.classList.add('active');
    body.classList.add('disabled');
    return;
  }
  if (state = 'disable') {
    modalBg.classList.remove('active');
    body.classList.remove('disabled');
    return;
  }
};
modalBg.onclick = () => {
  body.classList.remove('disabled');
  modalBg.classList.remove('active');
  document.querySelectorAll('.overlayContent').forEach(ov => ov.classList.remove('active'))
};


// burger

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu__close');
burgerBtn.onclick = () => {
  burgerMenu.classList.add('active');
}
burgerClose.onclick = () => {
  burgerMenu.classList.remove('active');
}