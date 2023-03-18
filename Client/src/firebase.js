// import firebase from "firebase/app";
// import "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
	apiKey: process.env.React_App_apiKey,
	authDomain: process.env.React_App_authDomain,
	databaseURL: process.env.React_App_databaseURL,
	projectId: process.env.React_App_projectId,
	storageBucket: process.env.React_App_storageBucket,
	messagingSenderId: process.env.React_App_messagingSenderId,
	appId: process.env.React_App_appId,
	measurementId: process.env.React_App_measurementId,
});

export default app;
export const auth = firebase.auth();
export const db = getFirestore(app);
