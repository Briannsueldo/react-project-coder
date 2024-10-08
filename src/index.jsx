import React from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';

import './styles/style.scss';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7eJOdLn-9TGULWimW7IvgFSwuF9Kpq58",
  authDomain: "reactprojectdb-a7830.firebaseapp.com",
  projectId: "reactprojectdb-a7830",
  storageBucket: "reactprojectdb-a7830.appspot.com",
  messagingSenderId: "294059874973",
  appId: "1:294059874973:web:81c2ed91b8df9454f31274"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render (
    <App/>
);