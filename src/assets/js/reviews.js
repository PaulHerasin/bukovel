if (document.querySelector('.reviews-slider')) {

  const reviewsSlider = new Swiper('.reviews-slider .swiper-container', {
    slidesPerView: 3,
    speed: 1000,
    autoHeight: true,
    spaceBetween: 54,
    grabCursor: true,
    navigation: {
      nextEl: '.reviews .slider-btn--next',
      prevEl: '.reviews .slider-btn--prev',
    },
    // breakpoints: {
    //   320: {
    //     spaceBetween: 20,
    //   },

    //   1200: {
    //     spaceBetween: 50,
    //     scrollbar: {
    //       el: '.reviews-slider .swiper-scrollbar',
    //       draggable: true,
    //     },
    //   },
    //   1550: {
    //     spaceBetween: 90,
    //     scrollbar: {
    //       el: '.reviews-slider .swiper-scrollbar',
    //       draggable: true,
    //     },
    //   }
    // },
    // on: {
    //   init: function () {
    //     for (let i = 0; i < this.slides.length + 1; i++) {
    //       let div = document.createElement('div');
    //       document.querySelector('.swiper-scrollbar-wrap').append(div);
    //     }
    //     setTimeout(function () {
    //       this.update();
    //     }.bind(this), 200);
    //     setTimeout(function () {
    //       this.update();
    //     }.bind(this), 1000);
    //   },
    // }
  })

}