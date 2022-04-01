import logo from '../assets/logo.svg';
import './App.css';
import RoomPage from '../component/RoomPage/RoomPage'
import FrontPage from '../component/FrontPage/FrontPage'
import { Switch } from 'react-native-web';
import { Route, Router } from 'react-router-dom';




function App() {
  return (

      <FrontPage></FrontPage>

      /*
      <div className="Front page">
        <FrontPage></FrontPage>
      </div>

      <div className="Room page">
        <RoomPage></RoomPage>
      </div>
  */

      

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
