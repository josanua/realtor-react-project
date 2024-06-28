// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChA0ZYuwl_WknQrXcb7X7WI22yJwGXOQs",
    authDomain: "realtor-react-project-75498.firebaseapp.com",
    projectId: "realtor-react-project-75498",
    storageBucket: "realtor-react-project-75498.appspot.com",
    messagingSenderId: "1030320267946",
    appId: "1:1030320267946:web:b1352a5c30d8d33aee66d3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();