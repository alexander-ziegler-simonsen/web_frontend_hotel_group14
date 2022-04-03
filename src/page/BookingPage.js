import Header from '../component/bookingProgress/Header';
import Main from '../component/bookingProgress/Main';
import Basket from '../component/bookingProgress/Basket';
import roomData from '../roomData';
import { useState } from 'react';

/**
 * Author: Azmi Uslu (s185736)
 **/

function BookingPage() {
    const { rooms } = roomData;
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (room) => {
        const isOnBasket = basketItems.find((x) => x.id === room.id);
        if (!isOnBasket) {
            setBasketItems([...basketItems, {...room, quantity: 1}]);
        } else {
            setBasketItems(
                basketItems.map((x) =>
                    x.id === room.id ? {...isOnBasket, quantity: isOnBasket.quantity + 1} : x
                )
            );
        }
    };

    const removeFromBasket = (room) => {
        const isOnBasket = basketItems.find((x) => x.id === room.id);
        switch (isOnBasket.quantity) {
            case 1:
                setBasketItems(basketItems.filter((x) => x.id !== room.id));
                break;
            default:
                setBasketItems(
                    basketItems.map((x) =>
                        x.id === room.id ? {...isOnBasket, quantity: isOnBasket.quantity - 1} : x
                    )
                );
                break;
        }
    };

    return (
        <div className="App">
            <Header countBasketItems={basketItems.length}></Header>
            <div className="row">
                <Main rooms={rooms} addToBasket={addToBasket}></Main>
                <Basket
                    basketItems={basketItems}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                ></Basket>
            </div>
        </div>
    );
}

export default BookingPage;
