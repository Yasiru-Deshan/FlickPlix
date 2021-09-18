import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCZf0GNHq309LVZPTQfVeWEkBEYfoxY0GY",
  authDomain: "flixplix-89be6.firebaseapp.com",
  projectId: "flixplix-89be6",
  storageBucket: "flixplix-89be6.appspot.com",
  messagingSenderId: "806553780695",
  appId: "1:806553780695:web:a2fb6a1e817ff3e698cb92",
  measurementId: "G-TEWP31C90H"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
