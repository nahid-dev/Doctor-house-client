import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
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
  const authInfo = {
    createUser,
    loading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
