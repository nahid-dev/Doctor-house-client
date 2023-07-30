import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Update User
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update User State:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("https://server-nahid-dev.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem("accessToken", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("accessToken");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);
  // log Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    createUser,
    loading,
    updateUser,
    signInUser,
    user,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
