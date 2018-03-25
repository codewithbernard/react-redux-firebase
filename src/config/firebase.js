import * as firebase from "firebase";

firebase.initializeApp(require("./keys"));

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
