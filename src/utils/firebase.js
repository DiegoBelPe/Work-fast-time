// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export async function getDataCollection(collectionName) {
  const tasksCol = collection(db, collectionName);
  const taskSnapshot = await getDocs(tasksCol);
  const taskList = taskSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log('taskList:', taskList);
  return taskList;
}
