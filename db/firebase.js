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


//put user into database
function registerUser(email, password) {
  const format_email = email.replace(".","-");
  const profile_pic_id = "placeholder";
  firebase.database().ref('users/' + format_email).set({
    user_id:format_email,
    user_email:email,
    hash_pass: password,
    favorites:[],
    reviews:[], //array of review IDs (look up in review collection)
    settings:{},
    profile_pic_id: profile_pic_id
  }).catch((err) => console.log(err));
}


function printSnapshotOfUser(email) {
  const format_email = email.replace(".","-");
  firebase.database().ref('users/' + format_email).once('value').then(function(snapshot) {
    console.log(snapshot)
  });
}


//put admin into database
function registerAdmin(email, password) {
  const format_email = email.replace(".","-");
  firebase.database().ref('admins/' + format_email).set({
    user_id:format_email,
    admin_email:email,
    hash_pass: password,
    history:{},
    settings:{},
  }).catch((err) => console.log(err));
}

//put business object into database
function registerBusiness(business_id, name, address, email, owner, control_number) {
  const format_id = business_id.replace(".","-");
  firebase.database().ref('businesses/' + format_id).set({
    business_id:format_id,
    name: name,
    reviews: [],
    owner: owner,
    picture_ids:[],
    description: {},
    location: address,
    email: email,
    information: {},
    control: control_number,
  }).catch((err) => console.log(err));
}

//put review into database
function addReviewToDatabase(review_id, review_content) {
  const format_id = review_id.replace(".","-");
  firebase.database().ref('reviews/' + review_id).set({
    review_id:format_id,
    review_content:review_content,
    date:{},
    comments:[],
  }).catch((err) => console.log(err));
} 

function getBusinessWithID(business_id) {
  const format_id = business_id.replace(".","-");
  return firebase.database().ref('businesses/' + format_id).once('value').then(function(snapshot) {
    console.log("snapshot", snapshot)
    console.log("business name", snapshot.val().name)
    return snapshot.val().name
    // ...
  });
  
  // Original Code
  // var userId = firebase.auth().currentUser.uid;
  // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //   // ...
  // });
}

module.exports = {
  registerUser: registerUser,
  registerAdmin: registerAdmin,
  registerBusiness: registerBusiness,
  addReviewToDatabase: addReviewToDatabase,
  getBusinessWithID: getBusinessWithID
};