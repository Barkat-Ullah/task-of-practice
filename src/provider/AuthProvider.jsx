import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
        return signInWithPopup(auth, provider)
    }
    const githubSign = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user on ', currentUser);
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, logOut, signIn, googleSign, githubSign }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;