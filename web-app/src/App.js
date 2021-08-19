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
import Books from './components/Books/Books';
import Sedes from './components/Sedes/Sedes'
import News from './components/News/News'
import Sede from './components/Sede/Sede'


function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/Sede">
            <Sede/>
          </Route>
        <Route path="/Novidades">
            <News/>
          </Route>
        <Route path="/Home">
            <Home />
          </Route>
        <Route path="/Sedes">
            <Sedes />
          </Route>
        <Route path="/Books">
            <Books />
          </Route>
        <Route path="/Dashboard">
            <Dashboard />
          </Route>
        <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 
