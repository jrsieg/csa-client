import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages'
import UserSignup from './components/auth/userAuth/userSignup';
import UserLogin from './components/auth/userAuth/userLogin';
import CSALogin from './components/auth/csaAuth/csaLogin';
import CSASignup from './components/auth/csaAuth/csaSignup';
import {CSAForm} from './components/auth/CSASignUp/CSAForm'
import Profiler from './components/Profiler';
import './App.css';

function App() {


  const [sessionToken, setSessionToken] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  const toggle = () => {
    setIsOpen(!isOpen)
  } 

  return (
    <Router>
      <div>


      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/customersignup" exact ><UserSignup updateToken = {updateToken}/></Route>
        <Route path="/customerlogin" exact ><UserLogin updateToken = {updateToken} /></Route>
        <Route path="/csalogin" exact ><CSALogin updateToken = {updateToken} /></Route>
        <Route path="/csasignup" exact ><CSAForm updateToken = {updateToken} /></Route>
        <Route path="/browsecsas" component={Profiler} exact />

      </Switch>


      </div>
    </Router>


  );
}

export default App;
