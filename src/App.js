import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {


  
  return (
    <div className="App">
   <Home/>
    </div>
  );
}

export default App;
