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