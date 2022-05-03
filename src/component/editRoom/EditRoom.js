import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import moment from "moment";
import {RoomForm} from "../roomForm/RoomForm";

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
		  editRoom(room);
		  history.push(`/booking/goto/${room.id}`);
	  }}
	/>
  )
};
