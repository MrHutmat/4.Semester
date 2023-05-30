import React, { useContext, useEffect, useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, pwd) => {
    return createUserWithEmailAndPassword(auth, email, pwd);
  };

  const signIn = (email, pwd) => {
    return signInWithEmailAndPassword(auth, email, pwd);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
