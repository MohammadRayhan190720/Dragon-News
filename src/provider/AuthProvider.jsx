import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  console.log(user)

  //creatuserwithemailandpassword

  const creatNewUser = (email ,password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  //signInWithEmailandPassword

  const userSignIn = (email, password) =>{
    return signInWithEmailAndPassword(auth , email , password)
  }

  //handlsignout

  const handleSignOut = () =>{
    return signOut(auth)
  }


  const authInfo = {
    user,
    setUser,
    creatNewUser,
    handleSignOut,
    userSignIn
  };

  //create a observer
 useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
    setUser(currentUser)
  })
  return ()=>{
    unsubscribe
  }
 },[])
    


  return (
    <AuthContext.Provider value={authInfo}>
      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;