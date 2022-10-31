import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getdatabase} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5UsQwREvr2uX4-cBHVxXDo34EsFZC9rI",
    authDomain: "beta-project-1f826.firebaseapp.com",
    databaseURL: "https://beta-project-1f826-default-rtdb.firebaseio.com",
    projectId: "beta-project-1f826",
    storageBucket: "beta-project-1f826.appspot.com",
    messagingSenderId: "769234658373",
    appId: "1:769234658373:web:f46d50fb3a45cb6639ef2c"
};
const app = initializeApp(firebaseConfig);
  // Initialize Firebase
//   reference message collection
let db = getdatabase(app);
document.getElementById('contactform').addEventListener('submit', submitForm);

// submit form 
function submitForm(e) {  
    e.preventDefault();
    ref(db,'message')
    let name = getInputVal('name');
    let address = getInputVal('address');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
    
    // save message
    saveMessages(name,address,email,phone,message)
}
function getInputVal(id) {
        return document.getElementById(id).value;
}
// save to firebase function
function saveMessages(name, address, email, phone, message) {
    let newMessageRef = message.push();
    newMessageRef.set({
        name: name,
        address: address,
        email: email,
        phone: phone,
        message: message
    });
}