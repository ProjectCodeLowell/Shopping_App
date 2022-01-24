// user: test@gmail.com
// pass: testing
const firebaseConfig = {
    apiKey: "AIzaSyByRf5mTx0CeZTPvH5ErNtg_kGF3_Zs5FQ",
    authDomain: "form-7335a.firebaseapp.com",
    projectId: "form-7335a",
    storageBucket: "form-7335a.appspot.com",
    messagingSenderId: "862937843634",
    appId: "1:862937843634:web:9f9d36fa9bc76ba1ecc6ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser;
        alert("User Created!");
    })
    .catch(function(error) {
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    })
}

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        alert("Logged in!");
    })
    .catch(function(error) {
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    })
}