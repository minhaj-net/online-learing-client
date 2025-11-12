import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import Loading from "../Components/Loading/Loading";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
    const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const updateUser=(upDatedData)=>{
    return updateProfile(auth.currentUser,upDatedData)
  }

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  if(loading){
    return <Loading></Loading>
  }

  const authData = {
    user,
    loading,
    createUser,
    logOut,
    googleSignIn,
    signIn,
    updateUser,
    setUser,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};
