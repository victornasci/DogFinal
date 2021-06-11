import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCN_ZIm3B4xUARLoUUCmq4TKtv2Tv-B15o",
    authDomain: "react-native-firebase-e0fbd.firebaseapp.com",
    projectId: "react-native-firebase-e0fbd",
    storageBucket: "react-native-firebase-e0fbd.appspot.com",
    messagingSenderId: "151924592684",
    appId: "1:151924592684:web:1df72a9d7aed3182db8189"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore()


  export default{
      firebase,
      db,
  }