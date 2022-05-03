import React from 'react';
import Rooms from './Rooms';
import './index.css';
/**
 * Author: Azmi Uslu (s185736)
 **/

export default function Main(props) {
    const { rooms, addToBasket } = props;

    return (
        <div className="blockBehind RoomDetailColumn">
            <h2>Rooms</h2>
            <div className="row">
                {rooms.map((room) => (<Rooms key={room.id} room={room} addToBasket={addToBasket}></Rooms>))}
            </div>
        </div>
    );
}