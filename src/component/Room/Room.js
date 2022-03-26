import React from "react";
import RoomInfo from './RoomInfo';
import ReactDOM from 'react-dom';


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

const luxuriousRoom = {
  text: 'This is an example of an luxurious room',
  author: {
    name: 'Luxurious room',
    roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o='
  }
}

ReactDOM.render(
  <Room
  text={luxuriousRoom.text}
  author={luxuriousRoom.author} />,
  document.getElementById('root')
)

export default Room;








