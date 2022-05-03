import React, {
    Component
} from 'react';

/**
 * Author: Sammy Chauhan (S191181)
 **/

// Bruges ikke
function Picture(props) {
    return (
        <img
            src={props.image}
            width={props.width}
            height={props.height}
            alt={props.name}
        />
    );
}

export default Picture;