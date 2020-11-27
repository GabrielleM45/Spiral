import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assets/css/App.css';
import Home from './components/pages/Home';
import dashBoard from './components/pages/dashBoard';
import SignUpForm from './components/Forms/SignUpForm';
import LogInForm from './components/Forms/LogInForm'
import Form from './components/Forms/Form'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component= { Home } />
          <Route path='/dashBoard' exact component= { dashBoard } />
          <Route path='/SignUpForm' exact component= { SignUpForm } />
          <Route path='/LogInForm' exact component= { LogInForm } />
          <Route path='/Form' exact component= { Form } />
        </Switch>
    </Router>

    </>
  );
}

export default App;
