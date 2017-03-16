import * as firebase from 'firebase';
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyAz3NzGFUX80Wwc6X7JORAiISXISpZccmw",
    authDomain: "car-exposition.firebaseapp.com",
    databaseURL: "https://car-exposition.firebaseio.com",
    storageBucket: "car-exposition.appspot.com",
    messagingSenderId: "161831265504"
  };
  
  firebase.initializeApp(config);
  database = firebase.database()
}
