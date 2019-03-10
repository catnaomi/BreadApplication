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

//User Methods

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
function registerBusiness(business_id, name) {
  const format_id = business_id.replace(".","-");
  firebase.database().ref('businesses/' + format_id).set({
    business_id:format_id,
    name: name,
    reviews: [],
    owner:{},
    picture_ids:[],
    description: {},
    location: {},
    information: {}
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

module.exports = {
  storeHighScore: storeHighScore,
  registerUser: registerUser,
  registerAdmin: registerAdmin,
  registerBusiness: registerBusiness,
  addReviewToDatabase: addReviewToDatabase
};