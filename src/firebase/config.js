import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcd_w569KhLzbghITLmAbrpIRk-p4yTq4",
  authDomain: "react-photo-gallery-d3e73.firebaseapp.com",
  databaseURL: "https://react-photo-gallery-d3e73.firebaseio.com",
  projectId: "react-photo-gallery-d3e73",
  storageBucket: "react-photo-gallery-d3e73.appspot.com",
  messagingSenderId: "487724545290",
  appId: "1:487724545290:web:639897a227c9f09915b6f3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
