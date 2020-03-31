import React, {Component} from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
