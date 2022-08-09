import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import NotFound from './component/NotFound';
import AddUser from './component/User/AddUser';
import Edit from './component/User/Edit';
import View from './component/User/View';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          
          <Route exact path="/users/View/:id" component={View} />
          <Route exact path="/users/Edit/:id" component={Edit} />
          <Route exact component={NotFound} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
