import React from 'react';
import axios from 'axios';
import{ 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/Dashboard">
            <Dashboard />
          </Route>
        <Route path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 
