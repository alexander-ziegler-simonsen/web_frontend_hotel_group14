import React from "react";
import { Switch } from "react-router-dom";
import Page from "./Page";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import RoomPage from "../RoomPage/RoomPage";
import BookingPage from "../../page/BookingPage";
import MyBookings from "../myBooking/MyBookings";
import LoginPage from "../../page/LoginPage";
import RoomOverview from "../../page/RoomOverview";
// css styling fra https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_right
import './FrontPage.css';



/**
 * Author: Sammy Chauhan (S191181)
 **/

//Switch kan bruges med ældre version af react-router-dom.
//npm uninstall react-router-dom
//npm install react-router-dom@5.2.0

function FrontPage(){
    return(
        <Router>
            <div style={{backgroundColor: "silver"}}>
                <div class="header">
                    <h1><Link to="/">A.S.A Hotel</Link></h1>
                </div> 
                <nav>
                    <ul>
                        <li>
                            <Link class="headerlinks" to="/frontpage">Page</Link>
                        </li>
                        <li>
                            <Link to="/luxuriousroom">RoomPage</Link>
                        </li>
                        <li>
                            <Link to="/bookingpage">Book Now</Link>
                        </li>
                        <li>
                            <Link to="/mybookings">My Bookings</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/roomoverview">Room_overview</Link>
                        </li>   
                        <li class="login">
                            <Link to="/forms">Forms</Link>
                        </li>
                    </ul>

                </nav>
                
                <Switch>
                    <Route path={"/frontpage"}>
                        <Page />
                    </Route>
                    <Route path={"/luxuriousroom"}>
                        <RoomPage />
                    </Route>
                    <Route path={"/bookingpage"}>
                        <BookingPage />
                    </Route>
                    <Route path={"/mybookings"}>
                        <MyBookings />
                    </Route>
                    <Route path={"/about"}>
                        <About />
                    </Route>
                    <Route path={"/users"}>
                        <Users />
                    </Route>
                    <Route path={"/forms"}>
                        <h2>Forms</h2>
                        <LoginPage />
                    </Route>
                    <Route path={"/roomoverview"}>
                        <h2>RoomOverview</h2>
                        <RoomOverview name="batman" time="14:00" />
                    </Route>
                    <Route path={"/"}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

        /*
                <Switch>
                    <Route path={"/frontpage"} component={Page} />
                    <Route exact path={"/"} render={()=><h1>Startside</h1>} />
                </Switch>
        */
    )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

const frontPage = {
    text: 'This is an example of our luxurious room.',
    picture: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',


}

export default FrontPage;