import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa_u4pOevx2ux2Z-26y6d7xUAs02JgmZg",
  authDomain: "movie-app-rjs.firebaseapp.com",
  projectId: "movie-app-rjs",
  storageBucket: "movie-app-rjs.appspot.com",
  messagingSenderId: "1020368720435",
  appId: "1:1020368720435:web:160ff96d356df7bea58946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (curretUser) => {
  // console.log(auth);
});

//! SignIn Google Button
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

//! Sign Up
export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const ForgetEmail = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Password reset email sent!
//       // ..
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // console.log(auth);
    })
    .catch((error) => {
      // An error happened.
    });
};
