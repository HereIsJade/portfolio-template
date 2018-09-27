window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function(){
      // BAAS using LeanCloud
      // let APP_ID = 'Gxxxxxxxxxxxxxxxz';
      // let APP_KEY = 'VxxxxxxxxxxxxxxxxT';
      // AV.init({appId: APP_ID, appKey: APP_KEY, region: 'us'});
      const config = {
        apiKey: "Axxxxxxxxxxxxxxxxxxxxx8",
        authDomain: "resume-template-xxxx.firebaseapp.com",
        databaseURL: "https://resume-template-xxxx.firebaseio.com",
        projectId: "resume-template-xxxx",
        storageBucket: "resume-template-xxxx.appspot.com",
        messagingSenderId: "xxxxxxxxxxxxxx"
      };
      firebase.initializeApp(config);
    },
    fetch: function(){
      let resourceRef = firebase.database().ref(resourceName)
      return resourceRef.limitToLast(10).once('value')
      // let query = new AV.Query(resourceName);
      // return query.find()
    },
    save: function(object){
      let resourceRef = firebase.database().ref(resourceName)
      return resourceRef.push().set(object)

      // let Item = AV.Object.extend(resourceName);
      // let item = new Item();
      // return item.save(object)
    },
    getNewChild: function(){
      let resourceRef = firebase.database().ref(resourceName)
      return new Promise((resolve)=>{
        resourceRef.limitToLast(1).on("child_added",(snapshot)=>{
          resolve(snapshot.val())
        })
      })

    }
  }
}