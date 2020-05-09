import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Heading,
  Notification,
  ProfileCard
} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <Heading/>
        <Notification/>
        <ProfileCard/>
      </div>
    </div>
  );
}

export default App;
