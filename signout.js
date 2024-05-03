// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Out Button
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', function() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html"; // Redirect to sign-in page
    }).catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
    });
});
