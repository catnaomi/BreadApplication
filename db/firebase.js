import * as firebase from 'firebase';
// DATABASE CONFIGURATION

const firebaseConfig = {
  apiKey: "AIzaSyAoG-0V4r7eJsauSsOhfU-Gx0cduMTfQZc",
  authDomain: "juniordesign-afa7c.firebaseapp.com",
  databaseURL: "https://juniordesign-afa7c.firebaseio.com",
  projectId: "juniordesign-afa7c",
  storageBucket: "juniordesign-afa7c.appspot.com",
  messagingSenderId: "199705549356"
};

firebase.initializeApp(firebaseConfig);

// DATA BASE APIS

function storeHighScore(userId, name) {
  firebase.database().ref('users/' + userId).set({
    name: name
  }).catch((err) => console.log(err));
}

function registerUser(email, password) {
  let format_email = email.replace(".","-");
  firebase.database().ref('users/' + format_email).set({
    password: password
  }).catch((err) => console.log(err));
}

// function verifyUserExists(email, password) {
//   format_email = email.replace(".","-");
//   firebase.database().ref('users/' + format_email).set({
//     password: password
//   }).catch((err) => console.log(err));
// }


// registerUser("john@gmail.com ", "john_pass");
// registerUser("bob@gmail.com", "bob_pass");
// registerUser("jack@gmail.com", "jack_pass");
// registerUser("bill@gmail.com", "bill_pass");


module.exports = {
  storeHighScore: storeHighScore,
  registerUser: registerUser
};