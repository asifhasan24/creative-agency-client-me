import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import logo from '../../images/logos/logo.png'
import googleLogo from '../../images/logos/google.png';
import { userInfo } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const nuser = result.user;
            const { displayName, email } = nuser;
            const signedInUser = { displayName: displayName, email: email, error: false }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(err => {
            const user = { ...loggedInUser }
            user.error = true
            setLoggedInUser(user)
            const errorMessage = err.message;
            console.log(errorMessage)

        });
    }
    return (
        <div className='text-center mt-4'>
            <img width='150px' src={logo} alt="" />
            <div className="d-flex justify-content-center p-5 ">
                <div className='loginBox'>
                    <h3 className='text-center' style={{ marginTop: '50px' }}>Login With</h3><br />
                    <button onClick={handleGoogleSignIn} className="loginBtn mb-2">
                        <div className="d-flex">
                            <img width='50px' height='35px' src={googleLogo} alt="" />
                            <p style={{ marginLeft: '30px', paddingTop: '5px' }}>Continue with Google</p>
                        </div>
                    </button>
                    <p>Don't have an account? <span style={{ color: 'royalblue', cursor: 'pointer' }}><u>Create an account</u></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;