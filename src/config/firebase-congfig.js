import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAaS2aQL3zipwdIG5Vf9jF0_UscDwKS3CI",
    authDomain: "hostelmanagementassignment.firebaseapp.com",
    projectId: "hostelmanagementassignment",
    storageBucket: "hostelmanagementassignment.appspot.com",
    messagingSenderId: "42487408656",
    appId: "1:42487408656:web:94c9a72ec3c9e5af56c295",
    measurementId: "G-DM1JSKYZRE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;