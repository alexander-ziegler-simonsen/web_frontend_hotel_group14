import Header from '../component/bookingProgress/Header';
import { useState } from 'react';
import MyBookings from '../component/myBooking/MyBookings';

/**
 * Author: Azmi Uslu (s185736)
 **/

function BookingsPage() {
    const [basketItems] = useState([]);

    return (
        <div className="App">
            <Header countBasketItems={basketItems.length}></Header>
            <div className="row">
                <MyBookings />
            </div>
        </div>
    );
}

export default BookingsPage;