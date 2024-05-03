// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjc07eQ0cMt7ZtU_3vvRUbAyhim8mJ1AI",
    authDomain: "digital-kyr-assistant.firebaseapp.com",
    projectId: "digital-kyr-assistant",
    storageBucket: "digital-kyr-assistant.appspot.com",
    messagingSenderId: "873007337963",
    appId: "1:873007337963:web:b0803e87280ca469ebc9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//inputs


//submit button
const submit = document.getElementById('loginSubmit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logged in")
            window.location.href = "home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})