import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from "../../AppContext/AppContext";
import {Room} from "../../models/Room";
import {RoomForm} from "../roomForm/RoomForm";
import {dbCreateOneWithId} from "../dbHelper";
import moment from "moment";

/**
 * Author: Azmi Uslu (s185736)
 * @return {JSX.Element}
 **/

export const AddRoom = () => {
  const {addRoom} = useContext(AppContext);
  const  history = useHistory();

  return (
	<RoomForm
		type="add"
		handleSubmit={values => {
			const {fullName, emailAddress, phoneNumber, roomTypeSelection, 
				adultNumber, checkinDate, checkoutDate, childNumber} = values
			const roomToBeAdded = new Room(fullName, emailAddress, phoneNumber, 
				roomTypeSelection, adultNumber, checkinDate, checkoutDate, childNumber, require('uuid/v4')(), moment().format('DD/MM/YYYY hh:mm:ss A'));
			
			dbCreateOneWithId("rooms", 
			{
				_fullName: fullName,
				_emailAddress: emailAddress, 
				_phoneNumber: phoneNumber, 
				_roomTypeSelection: roomTypeSelection, 
				_adultNumber: adultNumber, 
				_checkinDate: checkinDate,
				_checkoutDate: checkoutDate, 
				_childNumber: childNumber,
				_createOrder: roomToBeAdded._createOrder,
				_id: roomToBeAdded._id,
				_bookings: null,
				_updateOrder: roomToBeAdded._updateOrder
			}, roomToBeAdded._id)
			.then(() => {console.log("room was added to firestore")})
			.catch((err) => {console.log("room added error:", err)});
			
			addRoom('room', roomToBeAdded);
			history.push(`/booking/goto/${roomToBeAdded.id}`);

			
		}}/>
  )
};