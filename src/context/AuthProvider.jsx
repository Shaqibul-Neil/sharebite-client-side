import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useFood from "../hooks/useFood";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const { allFoodData, foodLoading, foodError } = useFood();

  //create user with email password
  const createUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user
  const updateUser = (displayName, photoURL) => {
    setUserLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  //sign in user with email password
  const signInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google sign in
  const googleSignIn = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const signOutUser = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  //auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    user,
    updateUser,
    setUser,
    userLoading,
    setUserLoading,
    signInUser,
    googleSignIn,
    signOutUser,
    allFoodData,
    foodLoading,
    foodError,
    refresh,
    setRefresh,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
