import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.EXPO_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_FIREBASE_APP_ID
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase;