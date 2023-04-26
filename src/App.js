import './components/stylesheets/App.css'
import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom" 
import MyRoutes from './components/routes/Routes';
import Home from './components/pages/Home'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <header className="App-header">
          <h3>Mango Seed Pre-School</h3>
          <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/for-parents">For Parents</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          </header>
          <body className='App-body'>
            <MyRoutes/>
          </body>
        </div>
    );
  }
}

export default App;
