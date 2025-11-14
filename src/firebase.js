import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, 
  signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCLB8pYCZVEQJcv5xc8vkRbGEr3kAFemS0",
  authDomain: "netflix-xlone-6e3d5.firebaseapp.com",
  projectId: "netflix-xlone-6e3d5",
  storageBucket: "netflix-xlone-6e3d5.firebasestorage.app",
  messagingSenderId: "910730605730",
  appId: "1:910730605730:web:03f5e8945e3eb2d19893fb",
  measurementId: "G-9MZVCK0RCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name ,email , password)=>{
  try{
 const res = await createUserWithEmailAndPassword(auth , email, password);
const user = res.user;
await addDoc(collection(db, 'user'), {
  uid: user.uid,
  name,
  authprovider: "local",
  email
})
  }catch(error){
    console.log(error)
    toast.error(error.code)
  }
}

const login = async (email ,password)=>{
  try{
 signInWithEmailAndPassword(auth , email , password)
  }catch(error){
    console.log(error)
toast.error(error.code) 

}
}
const logout =()=>{
  signOut(auth)
}
export{ auth , db , login, signup , logout}