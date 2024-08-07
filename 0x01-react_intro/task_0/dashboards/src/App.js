import { logDOM } from '@testing-library/react';
import holberton_logo from './holberton-logo.jpg';
import './App.css';
import Notifications from './Notifications.js';



import {getFooterCopy , getFullYear} from './utils.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo}className="App-logo" alt="logo"/>
        <h1>School dashboard</h1>
      </header>
      
        <div className="App-body">
          <p>Login to access the full bashboard</p>
          <div className="Form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button>OK</button>
          </div>
        </div>
      <footer className="App-footer">
        <div>
          <p>
            Copyright {getFullYear()}- {getFooterCopy() }
            
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
