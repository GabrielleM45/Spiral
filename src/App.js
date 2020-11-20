import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assets/css/App.css';
import Home from './components/pages/Home';
import dashBoard from './components/pages/dashBoard';
import signUp from './components/pages/signUp';
import logIn from './components/pages/logIn'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component= { Home } />
          <Route path='/dashBoard' exact component= { dashBoard } />
          <Route path='/signUp' exact component= { signUp } />
          <Route path='/logIn' exact component= { logIn } />
        </Switch>
    </Router>

    </>
  );
}

export default App;
