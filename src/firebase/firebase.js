import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfVuUl0JzAHZLTkD0qAhdsxuCxHfymdYQ",
  authDomain: "atrur-portfolio-test.firebaseapp.com",
  databaseURL: "https://atrur-portfolio-test.firebaseio.com",
  projectId: "atrur-portfolio-test",
  storageBucket: "atrur-portfolio-test.appspot.com",
  messagingSenderId: "903939022898",
  appId: "1:903939022898:web:70db1f29d993b132659c2b",
  measurementId: "G-R8BMT63KDQ"
};

export default firebase.initializeApp(firebaseConfig)

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
