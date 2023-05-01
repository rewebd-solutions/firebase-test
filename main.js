// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyHr3B3mRWHS9NQ-ezaXA6JFsT8Jw31ng",
  authDomain: "quick-test-6788e.firebaseapp.com",
  projectId: "quick-test-6788e",
  storageBucket: "quick-test-6788e.appspot.com",
  messagingSenderId: "175116675341",
  appId: "1:175116675341:web:702181b854ca82ca0de844",
  measurementId: "G-1JL4J7D26D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

const signInBtn = document.querySelector(".sign-in");
const signOutBtn = document.querySelector(".sign-out")
const listData = document.querySelector(".lists");
const loggedInDiv = document.querySelector(".logged-in");

signInBtn.onclick = () => {
  signInWithPopup(auth, authProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(result, user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    // The email of the user's account used.
    const email = error.customData.email;

    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

signOutBtn.onclick = () => signOut(auth);

onAuthStateChanged(auth, (user)=>{
  if (user){
    console.log(user);
  }
  else{
    console.log("ilaye pa");
  }
})