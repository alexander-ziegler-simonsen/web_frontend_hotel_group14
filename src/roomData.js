import Budget from './assets/Images/Room/Budget.png';
import Standard from './assets/Images/Room/Standard.jpg';
import Business from './assets/Images/Room/Business.jpg';
import Luxury from './assets/Images/Room/Luxury.jpg'
import React, {
    Component
} from 'react';


/**
 * Author: Azmi Uslu (s185736)
 * Co-author: Sammy Chauhan (s191181)
 **/


const roomData = {

    /*Details about the rooms..*/
    rooms: [
        {
            id: '1',
            roomType: 'Budget Room',
            price: 1000,
            image: Budget,
            description:
                <p> This is an example of our budget room.
                    <ul> <b>
                        <li>Bathroom with shower</li>
                        <li>Aircondition</li>
                        <li>Smart tv</li>
                        <li>King size bed</li>
                        <li>Hair dryer</li>
                        <li>Free WIFI</li>
                    </b> </ul></p>,

        },
        {
            id: '2',
            roomType: 'Standard Room',
            price: 2000,
            image: Standard,
            description:
                <p> This is an example of our standard room.
                    <ul> <b>
                        <li>Bathroom with shower</li>
                        <li>Aircondition</li>
                        <li>Smart tv</li>
                        <li>King size bed</li>
                        <li>Hair dryer</li>
                        <li>Free WIFI</li>
                    </b> </ul></p>,
        },
        {
            id: '3',
            roomType: 'Business Room',
            price: 3000,
            image: Business,
            description:
                <p> This is an example of our business room.
                    <ul> <b>
                        <li>Bathroom with shower</li>
                        <li>Aircondition</li>
                        <li>Smart tv</li>
                        <li>King size bed</li>
                        <li>Hair dryer</li>
                        <li>Free WIFI</li>
                    </b> </ul></p>,
        },
        {
            id: '4',
            roomType: 'Luxury Suite',
            price: 4000,
            image: Luxury,
            description:
                <p> This is an example of our luxury suite.
                    <ul> <b>
                        <li>Bathroom with shower</li>
                        <li>Aircondition</li>
                        <li>Smart tv</li>
                        <li>King size bed</li>
                        <li>Hair dryer</li>
                        <li>Free WIFI</li>
                    </b> </ul></p>,
        },
    ],
};
export default roomData;