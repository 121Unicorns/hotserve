// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, OAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVa1EnV8Y5Q-04a4NmRRZj3QsZDo-HxRg",
    authDomain: "hotserve-ca8ff.firebaseapp.com",
    databaseURL: "https://hotserve-ca8ff-default-rtdb.firebaseio.com",
    projectId: "hotserve-ca8ff",
    storageBucket: "hotserve-ca8ff.appspot.com",
    messagingSenderId: "319724132147",
    appId: "1:319724132147:web:4d1b3fc8fd10e448451046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app);

const provider = new OAuthProvider('microsoft.com');
provider.setCustomParameters({
    tenant: '14bf68a9-2dcd-47f9-8655-e4b31e463772'
});

function signInMicrosoft() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // const credential = OAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            // const idToken = credential.idToken;
            return result;
        })
        .catch((error) => {
            console.log(error);
        });
}


function signOutMicrosoft() {
    signOut(auth).then(() => {
        return "Signed out";
    }).catch((error) => {
        console.log(error);
    });
}

function getCurrentUser() {
    return auth.currentUser;
}

//define literally every firebase function here, then type export then include every firebase function you need to export
export { signInMicrosoft, signOutMicrosoft, getCurrentUser, provider, auth, database, db };