// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsU9Sa1N5V1WzYEpQRYcWl7NqUUAEKxc4",
    authDomain: "car-warehouse-47794.firebaseapp.com",
    projectId: "car-warehouse-47794",
    storageBucket: "car-warehouse-47794.appspot.com",
    messagingSenderId: "832986357525",
    appId: "1:832986357525:web:568d9930a942aaca12531c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;