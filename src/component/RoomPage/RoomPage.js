import ReactDOM from 'react-dom';
import Room from './Room'

/**
 * Author: Sammy Chauhan (S191181)
 **/

function RoomPage(){
    return( 
        ReactDOM.render(
            <div className="Rooms">
            <Room className="First room"
            text={luxuriousRoom.text}
            author={luxuriousRoom.author} /> 
            </div>,
            document.getElementById('root')
        )
    );
}

const luxuriousRoom = {
    text:
    <ul> 
      This is an example of our luxurious room.
      <li>Bathroom with shower</li>
      <li>Aircondition</li>
      <li>Smart tv</li>
      <li>King size bed</li>
      <li>Hair dryer</li>
      <li>Free WIFI</li>
    </ul>,
    author: {
      name: 'Luxurious room',
      roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
      height: 400,
      width: 600
    }
  }
/*
  const luxuriousRoom2 = {
    text: 'This is an example of an luxurious room',
    author: {
      name: 'Luxurious room 2',
      height: 300,
      width: 300,
      roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o='
    }
  }
  */  

  export default RoomPage;