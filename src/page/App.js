import logo from '../assets/logo.svg';
import './App.css';
import RoomPage from '../component/RoomPage/RoomPage'
import FrontPage from '../component/FrontPage/FrontPage'
import { Switch } from 'react-native-web';
import { Route, Router } from 'react-router-dom';


//import BookingPage from "./BookingPage";
import BookingPage from "./BookingPage";
import MyBookings from "../component/myBooking/MyBookings";

// import my page
import RoomOveriew from './RoomOverview.jsx';
import LoginPage from './LoginPage';


function App() {
  return (

      <FrontPage />
  )
}

export default App;