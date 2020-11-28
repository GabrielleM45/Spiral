import React from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import dashBoard from './pages/dashBoard';
// import SignUp from './components/Forms/SignUp/signUp';
// import SignIn from './components/Forms/signIn/SignIn'
// import Form from './components/Forms/form'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component= { Home } />
          <Route path='/dashBoard' exact component= { dashBoard } />
          {/* <Route path='/signUp' exact component= { SignUp} /> */}

          {/* <Route path='/signIn' exact component= { SignIn } />
          <Route path='form' exact component= { Form } /> */} */}

        </Switch>
    </Router>

    </>
  );
}

export default App;
