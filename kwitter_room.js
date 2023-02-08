function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location("kwitter_page.html");
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

//ADD YOUR FIREBASE LINKS HERE

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

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
