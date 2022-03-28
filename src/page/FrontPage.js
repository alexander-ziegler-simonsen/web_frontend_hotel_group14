import React from 'react';
import Rooms from '../component/bookingProgress/Rooms';

export default function FrontPage(props) {
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