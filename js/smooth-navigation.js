// animated scroll to section when clicking navBar anchors

!function(){
  let view = View(".topNavBar nav")
  let controller = Controller({
    init: function(view){
      this.initAnimation()
    },
    initAnimation: function(){
      // Setup the animation loop.
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    bindEvents: function(){
      let navAnchorTags = this.view.querySelectorAll("ul>li>a");
      for (let i = 0; i < navAnchorTags.length; i++){
        navAnchorTags[i].onclick = (e) => {
          e.preventDefault();
          let href = e.currentTarget.getAttribute("href");
          if(href !== "#"){
            this.scrollToElement(href)
          }
        }
      }
    },
    scrollToElement: function(href){
      let targetSection = document.querySelector(href);
      let targetY = targetSection.offsetTop - 80;
      let distance = targetY-scrollY;
      let duration = Math.abs(distance/100 * 300);
      if(duration > 500){
        duration = 500;
      }

      let coords = { y: scrollY }; // starting Y
      let tween = new TWEEN.Tween(coords)
        .to({ y: targetY }, duration)
        .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
        .onUpdate(()=>{
          window.scrollTo(0,coords.y);
        })
        .start();
    }

  })

  controller.init(view)
}()


