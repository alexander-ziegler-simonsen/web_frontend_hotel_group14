import { initializeApp } from "firebase/app"; // firebase
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";

/**
 * Author: Azmi Uslu (s185736)
 * Type: Basic configuration object to connect to firebase
 * @type {{storageBucket: *, apiKey: *, messagingSenderId: *, appId: *, projectId: string, databaseURL: *, authDomain: *}}
 */

const config = {
  apiKey: process.env.API_KEY || '',
  authDomain: process.env.AUTH_DOMAIN || 'hotel-website-30596.firebaseapp.com',
  databaseURL: process.env.DATABASE_URL || 'https://hotel-website-30596.firebaseio.com',
  projectId: process.env.PROJECT_ID || 'hotel-website-30596',
  storageBucket: process.env.STORAGE_BUCKET || 'hotel-website-30596.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID || '116075020745',
  appId: process.env.APP_ID || '1:116075020745:web:31c75c90fef22953c46818'
};
firebase.initializeApp(config);

export { firebase };