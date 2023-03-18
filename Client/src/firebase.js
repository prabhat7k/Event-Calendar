// import firebase from "firebase/app";
// import "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
	// get your keys here
};


export default app;
export const auth = firebase.auth();
export const db = getFirestore(app);
