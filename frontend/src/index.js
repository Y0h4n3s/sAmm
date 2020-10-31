import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import Firebase, { FirebaseContext } from "./components/Firebase"

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />, document.getElementById("root")
  </FirebaseContext.Provider>
);