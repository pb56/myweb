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

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var twoSwiper = new Swiper ('.swiper-container-two', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.job-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.job-next',
      prevEl: '.job-prev',
    },
  });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    var jobNext = $('.job-next');
    var jobPrev = $('.job-prev');
    var jobBullets = $('.job-pagination');

    jobNext.css('left', jobPrev.width() + 10 + jobBullets.width() + 10)
    jobBullets.css('left', jobPrev.width() + 10)

  
  new WOW().init();

});