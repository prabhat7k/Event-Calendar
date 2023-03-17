// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCpd7htrGRhA6hRMSF5sYC_KXlm6q4hJ3E",
	authDomain: "event-cal-f61d9.firebaseapp.com",
	projectId: "event-cal-f61d9",
	storageBucket: "event-cal-f61d9.appspot.com",
	messagingSenderId: "495375156383",
	appId: "1:495375156383:web:e4b7f6db200a3b2e1e8eaa",
	measurementId: "G-38JKXPNVJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
