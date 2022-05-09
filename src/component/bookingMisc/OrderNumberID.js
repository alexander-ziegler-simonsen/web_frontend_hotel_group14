import React, {useContext} from 'react';
import {LoaderIndicator} from "./LoaderIndicator";
import {useHistory} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import {RoomDetails} from "./RoomDetails";
import {Alert} from "./Alert";
import {Button, Col, Container, Row} from "react-bootstrap";
import './Style.css';

/**
 * Author: Azmi Uslu (s185736)
 * Type: Will be rendered once when the user has gone to the room id.
 * @param props
 * @return {JSX.Element}
 **/

export const OrderNumberID = props => {
  const  history = useHistory();
  const {rooms, load_indicator, alert
  } = useContext(AppContext);
  let room;
  room = rooms.find(v => v.id === props.match.params.roomID);

  return (
	<Container>
	  {alert.display ? (
		  <Alert display={alert.display} announcement={alert.announcement}/>) : ''}
	  {room ? (
			<>
				<Row>
					<Col>
						<h2 className="text-center my-5">
							{`${room.roomTypeSelection} (${room.id})`}
						</h2>
					</Col>
				</Row>
			  {
				load_indicator ?
				  (
					<Row className="justify-content-center mt-5">
					  <LoaderIndicator/>
					</Row>
				  )
				  :
				  <RoomDetails
					room={room}
				  />
			  }
			</>
		  )
		  :
		  (
			<>
			  <Row className="justify-content-center">
				<Col>
				  <h2 className="text-center my-5">A room has not been found yet.</h2>
				</Col>
			  </Row>
			</>
		  )
	  }
	  <Row className="my-5">
		<Col className="text-center">
		  <Button
			onClick={() =>  history.push(`/booking/orders`)}
			variant="primary"
			size="l">
			Goto Orders
		  </Button>
		</Col>
	  </Row>
	</Container>
  )
};
