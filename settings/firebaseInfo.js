// Initialize Firebase
var config = {
	apiKey: "AIzaSyDPxpV1mRneDpY-St5d1hNHnN-KFdR2P14",
    authDomain: "q-sort-56067.firebaseapp.com",
    databaseURL: "https://q-sort-56067.firebaseio.com",
    projectId: "q-sort-56067",
    storageBucket: "q-sort-56067.appspot.com",
    messagingSenderId: "22474544566"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();