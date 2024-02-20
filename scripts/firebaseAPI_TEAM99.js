//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDP5Y6dFZgJUvEnlZNxcZOzFFoXD0HK2Fw",
    authDomain: "comp1800demo-b034c.firebaseapp.com",
    projectId: "comp1800demo-b034c",
    storageBucket: "comp1800demo-b034c.appspot.com",
    messagingSenderId: "1083328753519",
    appId: "1:1083328753519:web:b0cd1c4109b5f44336029a"
}

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
