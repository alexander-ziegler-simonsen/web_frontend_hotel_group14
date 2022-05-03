import RoomPicture from './RoomPicture';
import React, {
    Component
} from 'react';
/**
 * Author: Sammy Chauhan (S191181)
 **/

function RoomInfo(props) {
    return (
        <div className="RoomInfo">
            <RoomPicture user={props.user}/>
            <div className="RoomName">
                <h1>
                    {props.user.name}
                </h1>
            </div>
        </div>
    );
}
export default RoomInfo