import firebase from 'firebase/app'
import 'firebase/messaging'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'droidconke-70d60.firebaseapp.com',
  projectId: 'droidconke-70d60',
  appId: process.env.FIREBASE_APP_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
