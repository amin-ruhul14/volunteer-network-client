import React, { useContext } from 'react';
import './Login.css';
import logo from '../../images/logos/Group 1329.png';
import googleLogo from '../../images/logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            history.push("/register");
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div className="login mt-5 text-center">
            <div className="container">
                <div className="register-header text-center">
                    <Link to="/">
                        <img src={logo} style={{width:'202.81px'}} alt="login-header-logo"/>
                    </Link>
                </div>
                <div className="google-login mt-5">
                    <div className="p-5 my-5">
                        <h2 className="login-title">Login With</h2>
                        <Link onClick={handleGoogleSignIn} className="btn btn-block mt-4 pt-2 pb-0 pl-2">
                            <img className="icon" src={googleLogo} alt=""/>
                            <p className="login-text pt-1 pb-0 mb-2">Continue with Google</p>
                        </Link>
                        <p className="create-account-text text-center mt-3">Don't have an account? <a href="#">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;