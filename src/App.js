import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import axios from 'axios';
import './App.css';

import GithubState from './context/github/GithubState';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Get single GitHub user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // Get user's repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5
      &sort=created:asc
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear Users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users}/>
                  </Fragment>
                )}
                />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User
                  { ...props }
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
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
