document.addEventListener("DOMContentLoaded", function(event) { 
 
 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 const closeBtn = document.querySelector('.modal__close');
 const modDial = document.querySelector('modal__dialog');

 
 const switchModal = () => {
  modal.classList.toggle('modal--visible');
 }

 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });

 closeBtn.addEventListener('click', switchModal);

  modal.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.className != 'modal__dialog' && target.classList.contains('modal--visible')) {
     switchModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (modal.classList.contains('modal--visible') && event.code == 'Escape') {
    switchModal();
 }});

});