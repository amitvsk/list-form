import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Layout/Navbar';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import NotFound from './component/NotFound';
import AddUser from './component/User/AddUser';
import Edit from './component/User/Edit';
import View from './component/User/View';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/users/add" element={<AddUser/>} />
          
          <Route  path="/users/View/:id" element={<View/>} />
          <Route  path="/users/Edit/:id" element={<Edit/>} />
          <Route  path="*" element={<NotFound/>} />
          </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
