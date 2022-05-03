import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Style.css';

/**
 * Author: Azmi Uslu (s185736)
 * Type: Will add the spinner when making an order.
 * @return {JSX.Element}
 **/

export const LoaderIndicator = () => (
    <Spinner animation="border" variant="success" />
);