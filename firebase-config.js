// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcPS9ohnN_1ONLHxEMLsdU72je6FSg2PI",
    authDomain: "group15-9a2c0.firebaseapp.com",
    databaseURL: "https://group15-9a2c0-default-rtdb.firebaseio.com",
    projectId: "group15-9a2c0",
    storageBucket: "group15-9a2c0.appspot.com",
    messagingSenderId: "473178336679",
    appId: "1:473178336679:web:ba120f51c09baa479ada82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const databse = firebase.database();