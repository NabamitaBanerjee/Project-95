
const firebaseConfig = {
  apiKey: "AIzaSyA4ni6vDO-x8pj431KVgBdKlHEtW7-xKKc",
  authDomain: "project-95-7de32.firebaseapp.com",
  databaseURL: "https://project-95-7de32-default-rtdb.firebaseio.com",
  projectId: "project-95-7de32",
  storageBucket: "project-95-7de32.appspot.com",
  messagingSenderId: "974834793183",
  appId: "1:974834793183:web:fce812a4efe7bb87d5c76a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + Username + "!";

function addroom()
{
    room_name = document.getElementById("room_name");
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
  });

  localStorage.setItem("room_name", room_name).value
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
Room_names = childKey;
console.log("roomname - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) { console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    }