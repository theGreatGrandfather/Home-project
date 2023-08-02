// Инициализируем Swiper
let myImageSlider = new Swiper(".image-slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  // mousewheel: {
  //   sensitivity: 0,
  //   // eventTarget: ".image_slider",
  // },
    slidesPerView: 1,
    watchOverfloc: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLast: true,
      disableOnInteraction: false,
    },
  spead: 4000,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade:true,
  }

});