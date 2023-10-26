import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc,  getDoc, setDoc} from 'firebase/firestore'
    
const firebaseConfig = {
  apiKey: "AIzaSyB1yMb4fpTox1q_KC0-QWfXpdSBFipAn0s",
  authDomain: "login-1fa1d.firebaseapp.com",
  projectId: "login-1fa1d",
  storageBucket: "login-1fa1d.appspot.com",
  messagingSenderId: "1096805396715",
  appId: "1:1096805396715:web:897730afbccb955e4bceae"
};


  const firebaseapp = initializeApp(firebaseConfig);
  const provider= new GoogleAuthProvider();
 
  provider.setCustomParameters({
  prompt:"select_account"
});
  
  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
  export const db =getFirestore();
  export const createuserdocfromAuth = async(userAuth, additionalInformation ={}) =>

{
  if(!userAuth.email) return;

  const userDocRef=doc (db, 'users', userAuth.uid);
  console.log(userDocRef)


const userSnapShots = await getDoc(userDocRef);
console.log(userSnapShots)
console.log(userSnapShots.exists())

if(!userSnapShots.exists())
{
   const {displayName, email} =userAuth
   const createdAt = new Date();
   try{
    await setDoc(userDocRef,{
   displayName,
   email,
   createdAt,
   ...additionalInformation
    })
  }
    catch(error){
    console.log('error in creating', error.message)
    }

   }
   return userDocRef;
}

export async function createAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await createUserWithEmailAndPassword(auth,email,password)
}

export async function signinAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await signInWithEmailAndPassword(auth,email,password)
}

