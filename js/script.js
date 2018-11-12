  var config = {
    apiKey: "AIzaSyDten3ucSOFU6mGJcXLcmqLMK-xd8vDbT4",
    authDomain: "confluence-c54ed.firebaseapp.com",
    databaseURL: "https://confluence-c54ed.firebaseio.com",
    projectId: "confluence-c54ed",
    storageBucket: "confluence-c54ed.appspot.com",
    messagingSenderId: "431697827838"
  };
  firebase.initializeApp(config);
googleSignIn=()=>{
  var base_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(base_provider).then(function(result){
    console.log(result)
    console.log("Success... Google Account Linked");
  }).catch(function(err){
    console.log(err)
    console.log("Unsuccessful... Account not Linked");
  });
  
}