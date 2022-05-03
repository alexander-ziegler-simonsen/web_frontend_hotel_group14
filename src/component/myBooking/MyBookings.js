import React from 'react';
import './index.css';
/**
 * Author: Azmi Uslu (s185736)
 * Status: still alot to do..
 **/

export default function MyBookings() {

    return (
        <div>
            <div className="blockBehind row center">
                <div><h1>My Bookings</h1></div>
            </div>
            <div className="blockBehind BookingsDetailsRoom">
                <h2>Previous Bookings</h2>
                <div className="blockBehindOrderSummary BookingsDetailsRoomFrame">
                <div className="OrderDetailColumn">
                    Order 1: Budget Room, booked 01-04-2022.
                    <div></div>
                    Order 2: Business Room, booked 01-04-2020.
                    <div></div>
                    Order 3: Luxury Room, booked 01-04-2018.
                    <div></div>
                </div>
                </div>
            </div>
        </div>
    );
}