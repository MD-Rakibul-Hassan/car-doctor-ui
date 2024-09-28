import { createContext, useEffect, useState } from "react";
import {auth} from '../../config/firebase/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const regesterUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
          .then((user) => {
            if (user) {
              console.log(user);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        })
        return () => unSubscribe()
    },[])


    const authInof = {
      regesterUser,
      signInUser,
      signOutUser,
      user,
      setUser,
      loading,
      setLoading,
      loginWithGoogle,
    };
    return <AuthContext.Provider value={authInof} >
        {children}
    </AuthContext.Provider>
}
export default AuthProvider;