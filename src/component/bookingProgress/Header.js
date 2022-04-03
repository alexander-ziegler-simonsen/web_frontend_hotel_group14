import React from 'react';

/**
 * Author: Azmi Uslu (s185736)
 **/

export default function Header(props) {

    return (
        <header className="blockBehind row center">
            <div>
                <a href="#/">
                    <h1>A.S.A Hotel</h1>
                </a>
            </div>
            <div>
                <a href="#/contact"> Contact Us     </a>
                <a href="#/about"> About Us     </a>
                <a href="#/info"> F.A.Q     </a>
                <a href="#/account"> Login     </a>

                <a href="#/basket">
                     Basket{' '}
                    {props.countBasketItems ? (
                        <button className="basket">{props.countBasketItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
            </div>
        </header>
    );
}