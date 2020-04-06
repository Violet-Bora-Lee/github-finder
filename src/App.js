import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import './App.css';

import GithubState from './context/github/GithubState';

const App = () => {

  const [alert, setAlert] = useState(null);

  // Set alert when user enter no query
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
                />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User}
                />
              )} />
            </Switch>

          </div>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
