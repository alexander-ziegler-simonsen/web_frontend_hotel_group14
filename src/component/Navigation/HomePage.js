import React from "react";
import {
  Link
} from "react-router-dom";
import Picture from './Picture.js'

/**
 * Author: Sammy Chauhan (S191181)
 **/

function HomePage(props) {
  return (
    <div className="rooms">
      <Link to={"/luxuriousroom"}>
        <Picture
          name={room1.name}
          roomUrl={room1.roomUrl}
          height={room1.height}
          width={room1.width} />
      </Link>
      <Link to={"/luxuriousroom"}>
        <Picture
          name={room2.name}
          roomUrl={room2.roomUrl}
          height={room2.height}
          width={room2.width} />
      </Link>
      <Link to={"/about"}>
        <Picture
          name={room3.name}
          roomUrl={room3.roomUrl}
          height={room3.height}
          width={room3.width} />
      </Link>
      <Link to={"/contact"}>
        <Picture
          name={room4.name}
          roomUrl={room4.roomUrl}
          height={room4.height}
          width={room4.width} />
      </Link>
    </div>


  );


}

const room1 = {
  name: 'Room 1',
  roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
  height: 400,
  width: 600,
  link: <a href="http://www.google.com"> click </a>
}
const room2 = {
  name: 'Room 2',
  roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
  height: 400,
  width: 600
}
const room3 = {
  name: 'Room 3',
  roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
  height: 400,
  width: 600
}
const room4 = {
  name: 'Room 4',
  roomUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=',
  height: 400,
  width: 600
}

export default HomePage;

