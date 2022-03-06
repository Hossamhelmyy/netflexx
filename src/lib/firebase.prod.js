import { initializeApp } from 'firebase/app';
import { seedDatabase } from '../seeds';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqN69-ZcEbpbtNvUpEFwtwYGqdoGNKy38",
  authDomain: "netflex-9a10d.firebaseapp.com",
  databaseURL: "https://netflex-9a10d-default-rtdb.firebaseio.com",
  projectId: "netflex-9a10d",
  storageBucket: "netflex-9a10d.appspot.com",
  messagingSenderId: "501605678208",
  appId: "1:501605678208:web:11425eabe375d067de3a65",
  measurementId: "G-KDGV3Z7RRS"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
