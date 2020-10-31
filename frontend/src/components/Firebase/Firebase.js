import app from "firebase/app"
import "firebase/auth"
import firebaseconfig from "./Config"

export default class Firebase {
  constructor() {
    app.initializeApp(firebaseconfig);
    this.auth = app.auth();
    this.auth().useDeviceLanguage();


  }

  signInUserWithPhoneNumber = () => {
    this.auth.signInWithPhoneNumber = (phoneNumber, appVerifier)
      .then((confirmationResult) => {
        let code = getUserInputCode();
        window.confirmationResult = confirmationResult;
        confirmationResult.confirm(code).then(function (result) {
          let user = result.user;
        }).catch(error => {
          console.log("wrong confirmation code")
        })
      }).catch(error => {
        console.log("couldnt send code")
      })
  }
}


