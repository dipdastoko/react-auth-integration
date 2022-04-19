import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [err, setErr] = useState('');

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setErr(error.message);
            })
    }

    return {
        user,
        err,
        signInUsingGoogle
    };

}

export default useFirebase;