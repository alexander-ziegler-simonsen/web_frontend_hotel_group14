import logo from '../assets/logo.svg';
import './App.css';

// import my page
import RoomOveriew from './RoomOverview.jsx';
import LoginPage from './LoginPage';


function App() {
  return (
    <div className="App">
      
      <p>text goes here</p>
      <LoginPage />
      {/* <RoomOveriew name="batman" time="5" /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
