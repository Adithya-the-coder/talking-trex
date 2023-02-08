const firebaseConfig = {
      apiKey: "AIzaSyAGmfSdieZ-cEVxk_TBmkUGseCKMCx623U",
      authDomain: "kwitter-58854.firebaseapp.com",
      databaseURL: "https://kwitter-58854-default-rtdb.firebaseio.com",
      projectId: "kwitter-58854",
      storageBucket: "kwitter-58854.appspot.com",
      messagingSenderId: "586214374452",
      appId: "1:586214374452:web:9d6e8221c85955e9095e61"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}