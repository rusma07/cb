// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import * as firebase from 'firebase/app'


import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyALL0VEWSzc8RjIJAHwSoMyaNILlxESgcg",
//   authDomain: "cookbook-4d75a.firebaseapp.com",
//   projectId: "cookbook-4d75a",
//   storageBucket: "cookbook-4d75a.appspot.com",
//   messagingSenderId: "303730434911",
//   appId: "1:303730434911:web:a8c0c8d5171bc3def58cea",
//   measurementId: "G-5GDW0GD19F"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAGLAw_3kSdio1F7DfjdrksdY4SK7y50dU",
  authDomain: "cookbook-705f8.firebaseapp.com",
  projectId: "cookbook-705f8",
  storageBucket: "cookbook-705f8.appspot.com",
  messagingSenderId: "41656941447",
  appId: "1:41656941447:web:72dad74c680d8763cf7122",
  measurementId: "G-K4T9Z6XYXY",
  storageBucket:"cookbook-705f8.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const imagedb = getStorage(app);
export const db = getFirestore(app);
export const auth=getAuth(app);
