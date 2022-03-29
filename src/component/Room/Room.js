import React from "react";
import RoomInfo from './RoomInfo';


function Room(props) {
  return (
    <div className="Room">
      <RoomInfo user={props.author} />
      <div className="RoomDescription">
        {props.text}
      </div>
    </div>
  );
}


export default Room;








