import React from 'react';

export default function Basket(props) {
    const { basketItems, addToBasket, removeFromBasket } = props;
    const roomPrice = basketItems.reduce(function (a, x) {
        return a + x.quantity * x.price;
    }, 0);
    const totalPrice = roomPrice;
    
    return (
        <div className="blockBehind BasketDetailsRoom">
            <h2>Basket</h2>
            <div>
                {basketItems.length === 0 && <div>Basket is empty...</div>}
                {basketItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="RoomDetailColumn">{item.roomType}</div>
                        <div className="RoomDetailColumn">
                            <button onClick={() => removeFromBasket(item)} className="removeFromBasket">
                                -
                            </button>{' '}<button onClick={() => addToBasket(item)} className="addToBasket">
                                +
                            </button>
                        </div>
                        <div>
                            {item.quantity} x {item.price.toFixed(2)},-
                        </div>
                    </div>
                ))}
                {basketItems.length !== 0 && (
                    <><hr></hr>
                        <div className="row">
                            <div className="RoomDetailColumn"><strong>Total Price</strong></div>
                            <div className="BasketDetailsRoom text-right">
                                <strong>{totalPrice.toFixed(2)},-</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('This feature is not implemented yet.')}>
                                Book Now
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}