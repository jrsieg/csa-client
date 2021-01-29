import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import UserSignup from './components/auth/UserSignUp/userSignup';
import UserLogin from './components/auth/UserSignUp/userSignup';
import CSAForm from './components/auth/CSASignUp/CSAForm'
import SignupLanding from './components/auth/SignUpLanding/SignupLanding'
import Footer from './components/Footer/index';
import Profiler from './components/Profiler/test'
import Navbar from './components/Navbar/index'
import UserAccount from './components/Account/UserAccount';
import CSAAccount from './components/Account/CSAAccount';

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
    <>
    <Router>
      <Navbar/>
      <div>


      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/customersignup" exact ><UserSignup updateToken = {updateToken}/></Route>
        <Route path="/csasignup" exact ><CSAForm updateToken = {updateToken} /></Route>
        <Route path="/browsecsas" component={Profiler} exact />
        <Route path="/signuplanding" exact ><SignupLanding/></Route>
        <Route path="/account" exact >{localStorage.getItem('userType') === 'csa' ?  <CSAAccount/> : <UserAccount/>}</Route>




      </Switch>


      </div>
      <Footer/>

    </Router>


    </>



  );
}

export default App;
