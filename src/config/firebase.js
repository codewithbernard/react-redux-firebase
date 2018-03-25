import * as firebase from "firebase";

firebase.initializeApp(require("./keys"));

export const databaseRef = firebase.database().ref();
