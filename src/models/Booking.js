import moment from "moment";

/**
 * Author: Azmi Uslu (s185736)
 * Type: Creating a booking.
 */

export class Booking {
  _id;
  _roomID;
  _checkinDate;
  _checkoutDate;
  _bookingType;
  _bookingCost;
  _createOrder;
  _updateOrder;

    /**
     *
     * @param roomID - The ID room with the reservation.
     * @param bookingType -
     * @param checkinDate - start of the reservation.
     * @param checkoutDate - end of the reservation.
     * @param id - the ID number of the reservation
     * @param createOrder - will be generated once the reservation is created.
     * @param updateOrder - will be generated once the reservation is updated.
     */
  constructor(roomID, bookingType, checkinDate, checkoutDate, id = require('uuid/v4')(), createOrder = moment().format('DD/MM/YYYY hh:mm:ss A'), updateOrder = null) {
	this._id = id;
	this._roomID = roomID;
    this._checkinDate = checkinDate;
    this._checkoutDate = checkoutDate;
	this._bookingType = bookingType;
	this._createOrder = createOrder;
	this._updateOrder = updateOrder;
	this._bookingCost = this.calculateBookingCost();
  }

  get id() {
	return this._id;
  }

  set id(value) {
	this._id = value;
  }

  get roomID() {
	return this._roomID;
  }

  set roomID(value) {
	this._roomID = value;
  }

  get bookingType() {
	return this._bookingType;
  }

  set bookingType(value) {
	this._bookingType = value;
  }

  get createOrder() {
	return this._createOrder;
  }

  set createOrder(value) {
	this._createOrder = value;
  }
}