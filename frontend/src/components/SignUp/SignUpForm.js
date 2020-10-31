import React from "react-dom"
import { FirebaseContext } from "../Firebase"

const SignUpForm = (props) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  });

  const handleSignUp = (e) => {
    p 
  }
  
  return (
    <FirebaseContext.Consumer>
      <form className="sign-up-form" action="sign-up">
        <input className="sign-up-name" type="text"></input>
        <input className="sign-up-phone" type="text"></input>
        <button className="sign-up-btn btn" type="submit" onClick={handleSignUp}></button>
      </form>

    </FirebaseContext.Consumer>

  )
}