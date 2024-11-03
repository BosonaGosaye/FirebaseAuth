// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6cm0NsvE1arohFs-qvTUz1V092kEtDHs",
//   authDomain: "fir-auth-49a84.firebaseapp.com",
//   projectId: "fir-auth-49a84",
//   storageBucket: "fir-auth-49a84.firebasestorage.app",
//   messagingSenderId: "102788780435",
//   appId: "1:102788780435:web:ce11c76682329cd3c6d866"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// export { auth };

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6cm0NsvE1arohFs-qvTUz1V092kEtDHs",
  authDomain: "fir-auth-49a84.firebaseapp.com",
  projectId: "fir-auth-49a84",
  storageBucket: "fir-auth-49a84.firebasestorage.app",
  messagingSenderId: "102788780435",
  appId: "1:102788780435:web:ce11c76682329cd3c6d866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence using AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

