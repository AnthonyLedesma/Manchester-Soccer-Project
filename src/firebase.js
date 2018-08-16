import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBJE-wLIQ6D68jQo7XcVAVggo1fcP3xfvQ",
    authDomain: "manchester-soccer-project.firebaseapp.com",
    databaseURL: "https://manchester-soccer-project.firebaseio.com",
    projectId: "manchester-soccer-project",
    storageBucket: "manchester-soccer-project.appspot.com",
    messagingSenderId: "385866759216"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export { firebase,firebaseMatches, firebasePromotions, firebaseDB, firebaseTeams, firebasePlayers }