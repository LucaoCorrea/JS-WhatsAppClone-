/** https://firebase.google.com/docs/web/setup?hl=pt-br#aplicativos-node.js*/
import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
export class Firebase {
  constructor() {
    this._config = {
      apiKey: "AIzaSyAACjmnyojeVEBl6rFrELA7HjEe-L_S-GE",
      authDomain: "whatsappclone-4e1db.firebaseapp.com",
      projectId: "whatsappclone-4e1db",
      storageBucket: "whatsappclone-4e1db.appspot.com",
      messagingSenderId: "447062061788",
      appId: "1:447062061788:web:5eaf9d6f0ff7e56b36ba19",
      measurementId: "G-QZGYXG8HZR"
    };
    this.init();
  }
  init() {
    if (!window.initializedFirebase) {
      firebase.initializeApp(this._config)
      firebase.firestore().settings({
        timestampsInSnapshots: true
      })
      window.initializedFirebase = true;
    }
  }

  static db() {
    return firebase.firestore();
  }
  static hd() {
    return firebase.storage();
  }
  initAuth() {
    return new Promise((s, f) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          let token = result.credential.accessToken;
          let user = result.user;
          s(
            user,
            token);
        })
        .catch(err => {
          f(err);
        });
    });
  }
}