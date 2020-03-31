import React, {Component} from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log(res.data))
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
