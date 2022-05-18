// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACSLXoEmroRHHjRj_yaooxTZTdbjZjPDQ',
  authDomain: 'work-fast-time-back.firebaseapp.com',
  projectId: 'work-fast-time-back',
  storageBucket: 'work-fast-time-back.appspot.com',
  messagingSenderId: '883386892598',
  appId: '1:883386892598:web:f27b997ee73471830e7397',
  measurementId: 'G-TL157C6RC6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
