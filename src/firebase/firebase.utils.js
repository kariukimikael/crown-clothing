import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD4dRtsCws74c3l2ZBBLs683MGZhh7Y2Ck',
  authDomain: 'crown-clothing-km17.firebaseapp.com',
  projectId: 'crown-clothing-km17',
  storageBucket: 'crown-clothing-km17.appspot.com',
  messagingSenderId: '673541802726',
  appId: '1:673541802726:web:1f33d6451858a76b174927',
  measurementId: 'G-BVDLFCWZWZ',
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ 'prompt': 'select account' })

const signInWithGoogle = () => signInWithPopup(auth, provider)

export default signInWithGoogle;