import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig.js";

export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
    });

    console.log("User registered with displayName:", user.displayName);
    return user;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};


export const logInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User logged in successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Log In Error:", error.message);
    throw error;
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};
