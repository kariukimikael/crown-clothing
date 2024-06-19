import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4dRtsCws74c3l2ZBBLs683MGZhh7Y2Ck',
  authDomain: 'crown-clothing-km17.firebaseapp.com',
  projectId: 'crown-clothing-km17',
  storageBucket: 'crown-clothing-km17.appspot.com',
  messagingSenderId: '673541802726',
  appId: '1:673541802726:web:1f33d6451858a76b174927',
  measurementId: 'G-BVDLFCWZWZ',
}

const app = initializeApp(firebaseConfig)

export const database = getFirestore(app)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  
  const userRef = doc(database, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if(!snapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('Error creating user', error.message);
    }
  }
  
  return userRef;
}

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
// provider.setCustomParameters({ 'prompt': 'select account' })
const signInWithGoogle = () => signInWithPopup(auth, provider)

export default signInWithGoogle;
