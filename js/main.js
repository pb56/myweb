// document.addEventListener("DOMContentLoaded", function(event) { 
 
//  const modal = document.querySelector('.modal');
//  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//  const closeBtn = document.querySelector('.modal__close');
//  const modDial = document.querySelector('modal__dialog');

//  const switchModal = () => {
//   modal.classList.toggle('modal--visible');
//  }

//  modalBtn.forEach(element => {
//   element.addEventListener('click', switchModal);
//  });

//  closeBtn.addEventListener('click', switchModal);

//   modal.addEventListener('click', function (event) {
//     let target = event.target;
//     if (target.classList.className != 'modal__dialog' && target.classList.contains('modal--visible')) {
//      switchModal();
//     }
//   });

//   document.addEventListener('keydown', function(event) {
//     if (modal.classList.contains('modal--visible') && event.code == 'Escape') {
//     switchModal();
//  }});

// });

$(document).ready(function() {
  var modal = $('.modal'),
   modalBtn = $('[data-toggle=modal]'),
   closeBtn = $('.modal__close');

  modalBtn.on('click', function(){
   modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
   modal.toggleClass('modal--visible');
  });

  $(document).click(function (event) {
   if ($(event.target).is(modal)) {
       modal.toggleClass('modal--visible');
   }
});

  $(document).keydown(function(event) {
   if (modal.hasClass('modal--visible') && event.code == 'Escape') {
       modal.toggleClass('modal--visible');
   }
  });
});