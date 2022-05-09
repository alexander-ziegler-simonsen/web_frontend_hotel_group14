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
  const {addObject} = useContext(AppContext);
  const  history = useHistory();

  return (
	  /*Following is that when clicking on 'Book Now'.*/
	<RoomForm
		type="add"
		handleSubmit={values => { //handleSubmit is getting the current value of state.value..
			const {fullName, emailAddress, phoneNumber, roomTypeSelection, 
				adultNumber, checkinDate, checkoutDate, childNumber} = values
			const roomToBeAdded = new Room(fullName, emailAddress, phoneNumber, 
				roomTypeSelection, adultNumber, checkinDate, checkoutDate, childNumber, require('uuid/v4')(), moment().format('DD/MM/YYYY hh:mm:ss A'));

			/*creates the table to our Database.*/
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

			/*adds the room with filled informations.*/
			addObject('room', roomToBeAdded);
			/*redirects you to the order page.*/
			history.push(`/booking/goto/${roomToBeAdded.id}`);

			
		}}/>
  )
};