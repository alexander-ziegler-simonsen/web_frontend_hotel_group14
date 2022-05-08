import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import {Room} from "../../models/Room";
import {RoomForm} from "../roomForm/RoomForm";
import {dbCreateOne} from "../dbHelper";

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

			var d = Date(Date.now());

			dbCreateOne("rooms", 
			{
				_fullName: fullName,
				_emailAddress: emailAddress, 
				_phoneNumber: phoneNumber, 
				_roomTypeSelection: roomTypeSelection, 
				_adultNumber: adultNumber, 
				_checkinDate: checkinDate,
				_checkoutDate: checkoutDate, 
				_childNumber: childNumber,
				_createOrder: d.toString(),
				_id: "fix this later",
				_bookings: "",
				_updateOrder: ""
			})
			.then(() => {console.log("room was added to firestore")})
			.catch((err) => {console.log("room added error:", err)});
		}}/>
  )
};