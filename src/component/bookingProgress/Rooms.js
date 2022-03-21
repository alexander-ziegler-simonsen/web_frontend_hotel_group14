import React from 'react';

export default function Rooms(props) {
    const { room, addToBasket } = props;
    return (
        <div>
            <img className="size" src={room.image} alt={room.roomType} />
            <h3>{room.roomType}</h3>
            <div>{room.price},-</div>
            <div>
                <button onClick={() => addToBasket(room)}>Add To Basket</button>
            </div>
        </div>
    );
}