import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user);

   const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateNamePhoto =(displayName, photoURL)=> {
        setLoading(true)
        return updateProfile( auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }
    const logIn = (email , password) => {
        setLoading(true)
            return signInWithEmailAndPassword(auth,email, password)
        }
     
        const logOut = ()=> {
            localStorage.removeItem('genious-token')
            return signOut(auth)
        }

        const googlesignIn =()=> {
            setLoading(true)
            return  signInWithPopup(auth, googleProvider)
        }
        
      
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
          return  unsubscribe()
        }
    },[])

    
    const authInfo = {
        user,
        loading,
        googlesignIn,
        createUser,
        updateNamePhoto,

        logOut,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;