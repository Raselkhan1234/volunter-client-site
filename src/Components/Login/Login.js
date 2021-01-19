import React, { useContext } from 'react';
import logo1 from '../../logos/Group 1329.png';
import logo2 from '../../logos/google.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const history=useHistory();
    const location=useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.app.length===0){
        firebase.initializeApp(firebaseConfig);
    }
   
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  
   
    const handleGoogleSignIn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName,email}=result.user;
            const signInUser = {
                name:displayName,
                email:email
            }
          setLoggedInUser(signInUser);
          history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    const handleGoogleSingOut=()=>{
        fetch('https://www.google.com')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="logo-container">
            <img className="logo-img" src={logo1} alt=""/>
            <div className="login">
            <h2>Login With</h2>
            <button onClick={handleGoogleSignIn} className='logo-btn'> <img src={logo2} alt=""/> Continue with Google</button>
            <p className="logo-p">Don’t have an account? <span id="logo" onClick={handleGoogleSingOut}>Create an account</span></p>
            </div>
            
        </div>
    );
};

export default Login;