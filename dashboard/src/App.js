import React from "react";
import HolbertonLogo from "./HolbertonLogo.png";
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <>
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form class="form">
              <label for="email">Email:</label>
              <input type="text" id="email" name="email" />
              <label for="Password">Password:</label>
              <input type="password" id="Password" name="Password" />
              <button type="submit">OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;