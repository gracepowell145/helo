import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/auth/Auth';
import Dashboard from './Components/dashboard/Dashboard';
import Form from './Components/form/Form';
import Nav from './Components/nav/Nav';
import Post from './Components/post/Post';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Auth />
      <Dashboard />
      <Form />
      <Post />
    
    </div>
  );
}

export default App;
