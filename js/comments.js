!function(){
  let view = View('section.comments')
  let model = Model({resourceName: 'comments'})
  // leancloud model setup
  // let model = Model({resourceName: 'Comments'})
  let controller = Controller({
    commentsList: null,
    init: function(view, model){
      this.commentsList = view.querySelector('#commentsList')
      this.loadComments()
    },
    loadComments: function(){
      this.model.fetch().then((comment)=>{
        let i = 0;
        for(let id in comment.val()){
          // console.log(id, comment.val()[id].name,comment.val()[id].message)
          let li = document.createElement('li')
          li.innerText = `${comment.val()[id].name}: ${comment.val()[id].message}`
          this.commentsList.appendChild(li)
          // console.log(comment.val().key())
          i++
        }
      })
      // fetch all comments from leanStorage
      // this.model.fetch().then((comments) => {
      //   let commentsArray = comments.map((item)=> item.attributes)
      //   commentsArray.forEach((comment) => {
      //     let li = document.createElement('li')
      //     li.innerText = `${comment.name}: ${comment.content}`
      //     this.commentsList.appendChild(li)
      //   });
      // })
    },
    bindEvents: function(){
      let errorMsg = this.view.querySelector('.error')
      let inputs = this.view.querySelectorAll('input')
      inputs.forEach((input)=>{
        input.addEventListener('change',()=>{
          errorMsg.style.display = 'none'
        })
      })

      // save comment when form submitted
      let form = this.view.querySelector('#postComment')
      form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let name = form.querySelector('input[name="name"]')
        let content = form.querySelector('input[name="content"]')

        if(name.value.length>0 && content.value.length>0) {
          this.model.save({
            'name': name.value,
            'message': content.value
          }).then(() => {
            this.model.getNewChild().then((newComment) => {
              let li = document.createElement('li')
              li.innerText = `${newComment.name}: ${newComment.message}`
              this.commentsList.appendChild(li)
              // clear the content field after submission
              content.value = ''
            })
          })
        }
        else{
          // let errorMsg = this.view.querySelector('.error')
          errorMsg.style.display="block"
        }



        // this.model.save({
         //  'name': name.value,
         //  'content': content.value
        // })

        // this.model.save({
        //   'name': name.value,
        //   'content': content.value
        // }).then(function (comment) {
        //   console.log("comment saved successfully")
        //   // insert new comment into ol #commentsList
        //   let li = document.createElement('li')
        //   li.innerText = `${comment.attributes.name}: ${comment.attributes.content}`
        //   this.commentsList.appendChild(li)
        //   // clear the content field after submission
        //   content.value = ''
        // }, function (error) {
        //   console.log(error)
        // });
      })
    }
  })

  controller.init(view,model)
}()







