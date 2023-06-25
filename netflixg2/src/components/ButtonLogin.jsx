import { AppFirebase } from "@/firebase/InitConfig";
import Button from 'react-bootstrap/Button';
import {getAuth, signInWithPopup, linkWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export default function ButtonLogin(){

    const googleProvider = new GoogleAuthProvider();

    function Dologin() {
        const auth = getAuth(AppFirebase);
        signInWithPopup(auth, googleProvider)
        .then((credentials)=>{
            const user = credentials.user;
            console.log(user);
        })
        .catch((error)=>{
            const erroCode = error.code;
            const errorMessage = error.message;
            console.log(erroCode);
            console.log(errorMessage);

        })


    }

    return(
        <>
           <Button variant="danger" onClick={()=> Dologin()}>
            Iniciar sesión
            </Button> 
            
        </>
    )
    
    }
