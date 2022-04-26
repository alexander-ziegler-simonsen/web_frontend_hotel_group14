import React from "react";
import {
  Link
} from "react-router-dom";
import Picture from './Picture.js'
import { budget, standard, business, luxury } from '../RoomPage/RoomPage.js'


/**
 * Author: Sammy Chauhan (s191181)
 **/

function HomePage(props) {
  return (
    <div className="rooms">
      <div className="budget">
        <Link to={"/budget"}>
          <Picture
            name={budget.author.name}
            image={budget.author.image}
            height={budget.author.height}
            width={budget.author.width} />
        </Link>

      </div>

      <div>
        hej
      </div>

      <Link to={"/standard"}>
        <Picture
          name={standard.author.name}
          image={standard.author.image}
          height={standard.author.height}
          width={standard.author.width} />
      </Link>
      <Link to={"/business"}>
        <Picture
          name={business.author.name}
          image={business.author.image}
          height={business.author.height}
          width={business.author.width} />
      </Link>
      <Link to={"/luxury"}>
        <Picture
          name={luxury.author.name}
          image={luxury.author.image}
          height={luxury.author.height}
          width={luxury.author.width} />
      </Link>
    </div>


  );


}

export default HomePage;

