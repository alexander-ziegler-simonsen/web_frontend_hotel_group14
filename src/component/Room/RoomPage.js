import ReactDOM from 'react-dom';
import Room from './Room'

function RoomPage(){
    return( 
        ReactDOM.render(
            <div >
            <Room
            text={luxuriousRoom.text}
            author={luxuriousRoom.author} /> 
            <Room
            text={luxuriousRoom2.text}
            author={luxuriousRoom2.author} />
            </div>,
            document.getElementById('root')
        )
    );
}

const luxuriousRoom = {
    text: 'This is an example of an luxurious room',
    author: {
      name: 'Luxurious room',
      roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
      height: 300,
      width: 300
    
    }
  }

  const luxuriousRoom2 = {
    text: 'This is an example of an luxurious room',
    author: {
      name: 'Luxurious room 2',
      height: 300,
      width: 300,
      roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o='
    }
  }

  export default RoomPage;