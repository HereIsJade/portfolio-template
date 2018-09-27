!function(){
  let view = View('#topNavBar')
  let controller = Controller({
    init: function(view){
    },
    bindEvents: function () {
      window.addEventListener('scroll',()=>{
        if(window.scrollY>0){
          this.makeSticky(this.view)
        }
        else{
          this.removeSticky(this.view)
        }
      })
      this.hoverNavBar()
    },
    makeSticky: function(element){
      element.classList.add("sticky");
    },
    removeSticky: function(element){
      element.classList.remove("sticky");
    },
    hoverNavBar: function(){
      let navLiTags = this.view.querySelectorAll("ul>li");
      for (let i = 0; i < navLiTags.length; i++){
        // navBar hover effect and submenu trigger
        navLiTags[i].onmouseenter= (e) => {
          e.currentTarget.classList.add("active");
        }
        navLiTags[i].onmouseleave= (e) => {
          e.currentTarget.classList.remove("active");
        }
      }
    }
  })

  controller.init(view)
}()

