import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages'

import './App.css';

function App() {


  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
