import React from "react";
import {
  Link
} from "react-router-dom";
import Picture from './Picture.js'
import { budget, standard, business, luxury } from '../roomPage/RoomPage.js'

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

/**
 * Author: Sammy Chauhan (s191181)
 **/

function HomePage() {
  return (
    <div className="rooms">
      <Row>
        <Col span={6}>
          <Link to={"/budget"}>
            <Picture
              name={budget.author.name}
              image={budget.author.image}
              height={budget.author.height}
              width={budget.author.width} />
          </Link>
        </Col>
        <Col span={6}>
          <Link to={"/standard"}>
            <Picture
              name={standard.author.name}
              image={standard.author.image}
              height={standard.author.height}
              width={standard.author.width} />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col span={6}> <h1> Budget Room </h1>  <Picture> text={budget.author.name}</Picture> </Col>
        <Col span={6}> <h1> Standard Room </h1> </Col>
      </Row>

      <Row>
        <Col span={6}>
          <Link to={"/business"}>
            <Picture
              name={business.author.name}
              image={business.author.image}
              height={business.author.height}
              width={business.author.width} />
          </Link>
        </Col>
        <Col span={6}>
          <Link to={"/luxury"}>
            <Picture
              name={luxury.author.name}
              image={luxury.author.image}
              height={luxury.author.height}
              width={luxury.author.width} />
          </Link>
        </Col>
      </Row>

      <Row>
        <Col span={6}> <h1> Business Room </h1>  <Picture> text={budget.author.name}</Picture> </Col>
        <Col span={6}> <h1> Luxury Suite </h1> </Col>
      </Row>

    </div >
  );
}

export default HomePage;