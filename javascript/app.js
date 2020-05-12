
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJ-iH-4Ur9IYcwXgobnTJGo_13gqXqLho",
  authDomain: "queue-karim.firebaseapp.com",
  databaseURL: "https://queue-karim.firebaseio.com",
  projectId: "queue-karim",
  storageBucket: "queue-karim.appspot.com",
  messagingSenderId: "328339795968",
  appId: "1:328339795968:web:3beed401dad4ebcc86e8e5",
  measurementId: "G-BWJNPZRZFC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();
//const docRef = firestore.doc("Organizations/HAJz1KvMnFApuA7D4DXh");
//const docRef = firestore.doc("/Organizations/Emirates NBD/Branches/MOE/Queue");
const docRef = firestore.collection("/Organizations/Emirates NBD/Branches/MOE/Queue");

var zatoona = document.getElementById('zatoona');
var loadButton = document.getElementById('loadButton');


getRealtimeUpdates = function(){
  docRef.onSnapshot(function(collection){
    //if(collection && collection.exists){
      //const myData = doc.data();
      //zatoona.innerText = myData.number;
    docRef.where("status", "==", "serving").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            console.log(doc.data().number);
            zatoona.innerText = doc.data().number;
        });
    })
      //const myData = doc.where("status", "==", "waiting");
      //zatoona.innerText = myData.number;
    //}
  })
}

getRealtimeUpdates();










//THIS IS HOW YOU RETREIVE FROM FIRESTORE WITH A BUTTON CLICK
  /*loadButton.addEventListener("click", function(){
    docRef.get().then(function(doc){
    if(doc && doc.exists){
      const myData = doc.data();
      zatoona.innerText = myData.Current;
      //alert(myData.Current);
    }
  })
})*/

//THIS IS HOW YOU RETREIVE FROM FIRESTORE LIVE!!!
/*getRealtimeUpdates = function(){
  docRef.onSnapshot(function(doc){
    if(doc && doc.exists){
      //const myData = doc.data();
      //zatoona.innerText = myData.number;
    myData = doc.where("status", "==", "waiting").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
      //const myData = doc.where("status", "==", "waiting");
      zatoona.innerText = myData.number;
    }
  })
}*/

//const docRef = firestore.collection("Organizations").doc("HAJz1KvMnFApuA7D4DXh")
//var zatoona = document.getElementById('zatoona');
//var dbRef = firebase.database().ref().child('text');
//dbRef.on('value', snap => zatoona.innerText = snap.val());
