// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
let firebaseConfig = {
    apiKey: "AIzaSyDlRGtXNkpvRroPLGnlpFDs2iSgnQV0oPo",
    authDomain: "blogging-website-cca7b.firebaseapp.com",
    projectId: "blogging-website-cca7b",
    storageBucket: "blogging-website-cca7b.appspot.com",
    messagingSenderId: "239872150744",
    appId: "1:239872150744:web:1f076920217abc5d7d1bad"
};

// Initialize Firebase
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth=firebase.auth();

const logoutUser=()=>{
  auth.signOut();
  location.reload();
}
