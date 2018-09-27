!function(){
  let view = View("#mySlides")
  let controller = Controller({
    swiper: null,
    swiperOptions: {
      direction: 'horizontal',
      loop: true,
      // pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init: function(view){
      this.initSwiper()
    },
    initSwiper: function() {
      this.swiper = new Swiper(
        this.view.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  })

  controller.init(view)
}()

