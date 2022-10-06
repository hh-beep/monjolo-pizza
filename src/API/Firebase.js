import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyA6qLb8_MOh04BAHzqCjnLxlQD2vk0VnEM",
  authDomain: "monjolo-pizza.firebaseapp.com",
  projectId: "monjolo-pizza",
  storageBucket: "monjolo-pizza.appspot.com",
  messagingSenderId: "540602364017",
  appId: "1:540602364017:web:27496763f557b862b7ebd0",
  measurementId: "G-9TSL4R34QL"
};



function initializeFirebase() {
  initializeApp(  firebaseConfig  );
  getAnalytics(initializeApp(  firebaseConfig  ))
}

export default initializeFirebase;