import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import {Room} from "../../models/Room";
import {RoomForm} from "../roomForm/RoomForm";

/**
 * Author: Azmi Uslu (s185736)
 * @return {JSX.Element}
 **/

export const AddRoom = () => {
  const {addObject} = useContext(AppContext);
  const  history = useHistory();

  return (
	<RoomForm
		type="add"
		handleSubmit={values => {
			const {fullName, emailAddress, phoneNumber, roomTypeSelection, adultNumber, checkinDate, checkoutDate, childNumber} = values
			const roomToBeAdded = new Room(fullName, emailAddress, phoneNumber, roomTypeSelection, adultNumber, checkinDate, checkoutDate, childNumber);
			addObject('room', roomToBeAdded);
			history.push(`/booking/goto/${roomToBeAdded.id}`);
		}}/>
  )
};