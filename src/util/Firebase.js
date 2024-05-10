import firebase from "firebase";

export class Firebase {
  constructor() {
    this.init();
  }

  

  init() {
    if (!window._initializedFirebase) {
      firebase.initializeApp({
        apiKey: "AIzaSyAACjmnyojeVEBl6rFrELA7HjEe-L_S-GE",
        authDomain: "whatsappclone-4e1db.firebaseapp.com",
        projectId: "whatsappclone-4e1db",
        storageBucket: "whatsappclone-4e1db.appspot.com",
        messagingSenderId: "447062061788",
        appId: "1:447062061788:web:5eaf9d6f0ff7e56b36ba19",
        measurementId: "G-QZGYXG8HZR"
      });

      firebase.firestore().settings({
        timestampsInSnapshots: true,
      });

      window._initializedFirebase = true;
    }
  }

  initAuth() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          let token = result.credential.accessToken;
          let user = result.user;

          resolve(user, token);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage();
  }
}
