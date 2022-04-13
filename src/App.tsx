import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App App-bg">
      <header>
        <img src={logo} className="App-logo" alt="React logo"/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        "Sugar Teddy Bear" (https://skfb.ly/onM8v) by Suvalien is licensed under Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </footer>
    </div>
  );
}

export default App;
