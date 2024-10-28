// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBw7T2frQhpSO1K46B32A1dyXPRBKebWe4",
    authDomain: "fullstack405.firebaseapp.com",
    databaseURL: "https://fullstack405-default-rtdb.firebaseio.com",
    projectId: "fullstack405",
    storageBucket: "fullstack405.appspot.com",
    messagingSenderId: "1008589494290",
    appId: "1:1008589494290:web:2078823fbbf9c18ac260cb",
    measurementId: "G-LZD9LLKMJ6"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
