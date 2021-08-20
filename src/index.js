import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAaS2aQL3zipwdIG5Vf9jF0_UscDwKS3CI",
  authDomain: "hostelmanagementassignment.firebaseapp.com",
  projectId: "hostelmanagementassignment",
  storageBucket: "hostelmanagementassignment.appspot.com",
  messagingSenderId: "42487408656",
  appId: "1:42487408656:web:94c9a72ec3c9e5af56c295",
  measurementId: "G-DM1JSKYZRE"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
