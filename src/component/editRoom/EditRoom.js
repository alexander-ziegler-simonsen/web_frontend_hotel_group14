import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import moment from "moment";
import {RoomForm} from "../roomForm/RoomForm";
import {dbUpdateOne} from "../dbHelper";

/**
 * Author: Azmi Uslu (s185736)
 * Type: It'll render the form to make changes to a room 'edit'.
 * @type {function(any): any}
 **/

const lodash = require('lodash.clonedeep');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */

export const EditRoom = () => {
  const {rooms, editRoom} = useContext(AppContext);
  const history = useHistory();
  const {roomID} = useParams();
  const roomToBeEdited = rooms.find(v => v.id === roomID);
  let room = lodash(roomToBeEdited);

  return (
	<RoomForm
	  type="edit"
	  room={room}
	  handleSubmit={values => {
		  for (let field in values) {
			  if (room.hasOwnProperty(`_${field}`)) {
				  room[field] = values[field];
			  }
		  }
		  room.updateOrder = moment().format('DD/MM/YYYY hh:mm:ss A');
		  dbUpdateOne("rooms", room._id, 
		  {
			_fullName: room._fullName,
			_emailAddress: room._emailAddress, 
			_phoneNumber: room._phoneNumber, 
			_roomTypeSelection: room._roomTypeSelection, 
			_adultNumber: room._adultNumber, 
			_checkinDate: room._checkinDate,
			_checkoutDate: room._checkoutDate, 
			_childNumber: room._childNumber,
			_createOrder: room._createOrder,
			_id: room._id,
			_bookings: room._bookings,
			_updateOrder: room._updateOrder
		})
		.then(()=> {console.log("the room booking was edited")})
		.catch((err)=> {console.log("room booking edit error:", err)});

		  editRoom(room);
		  history.push(`/booking/goto/${room.id}`);

		  
	  }}
	/>
  )
};
