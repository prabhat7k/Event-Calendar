// import firebase from "firebase/app";
// import "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyCpd7htrGRhA6hRMSF5sYC_KXlm6q4hJ3E",
	authDomain: "event-cal-f61d9.firebaseapp.com",
	databaseURL: "https://event-cal-f61d9-default-rtdb.firebaseio.com",
	projectId: "event-cal-f61d9",
	storageBucket: "event-cal-f61d9.appspot.com",
	messagingSenderId: "495375156383",
	appId: "1:495375156383:web:e4b7f6db200a3b2e1e8eaa",
	measurementId: "G-38JKXPNVJB",
});

export default app;
export const auth = firebase.auth();
export const db = getFirestore(app);
