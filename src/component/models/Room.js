import moment from "moment";

/**
 * Author: Azmi Uslu (s185736)
 * Type: Creating a Room.
 */
export class Room {
	_id;
	_fullName;
	_emailAddress;
	_phoneNumber;
	_roomTypeSelection;
	_checkinDate;
	_checkoutDate;
	_adultNumber;
	_childNumber;
	_createOrder;
	_updateOrder;
	_bookings = [];

	/**
	 * Type: Will create a new Room.
	 * @param fullName - the full name.
	 * @param emailAddress - email
	 * @param phoneNumber - phone number of customer.
	 * @param roomTypeSelection - Which rooms.
	 * @param adultNumber - how many adults.
	 * @param checkinDate - start of the reservation.
	 * @param checkoutDate - end of the reservation.
	 * @param childNumber - how many children.
	 * @param id - the ID number of the reservation
	 * @param createOrder - will be generated once the reservation is created.
	 * @param updateOrder - will be generated once the reservation is updated.
	 */
	constructor(fullName, emailAddress, phoneNumber, roomTypeSelection, adultNumber, checkinDate, checkoutDate, childNumber, days, id = require('uuid/v4')(), createOrder = moment().format('DD/MM/YYYY hh:mm:ss A'), updateOrder = null) {
		this._id = id;
		this._fullName = fullName;
		this._emailAddress = emailAddress;
		this._phoneNumber = phoneNumber;
		this._roomTypeSelection = roomTypeSelection;
		this._adultNumber = adultNumber;
		this._checkinDate = checkinDate;
		this._checkoutDate = checkoutDate;
		this._childNumber = childNumber;
		this._createOrder = createOrder;
		this._updateOrder = updateOrder;
	}

	/**
	 * Type: will calculate a price of the reservation.
	 * @return {number}
	 */
	calculateBookingCost() {
		let bookingCostAdult = 0;
		let bookingCostChild = 0;
			let days = moment(this.checkoutDate).diff(this.checkinDate);
			if (days === 0) days = 1;
		bookingCostAdult = ((days * 0.00009/4) * this.adultNumber);
		bookingCostChild = ((days * 0.00009/4) * this.childNumber) / 2;
		return parseInt(bookingCostAdult+bookingCostChild);
	}

	/**
	 * Type: will calculate the days
	 * @return {number}
	 */

	calculateBookingDays() {
		let days = moment(this.checkoutDate).diff(this.checkinDate);
		return days/86400000;
	}
	/**
	 * Type: Will show the details of the order when completed the order.
	 * @returns {{"Room Type": string, "Child(ren)": string, "Full Name": string, "Check-in Date", "Phone Number": string, "Check-out Date", "Adult(s)": string, "Email Address": string, "Order Number": string}}
	 */

	showOrderDetails() {
		return ({
			'Full Name': `${this.fullName}`,
			'Email Address': `${this.emailAddress}`,
			'Phone Number': `${this.phoneNumber}`,
			'Room Type' : `${this.roomTypeSelection}`,
			'Check-in Date': this.checkinDate,
			'Check-out Date': this.checkoutDate,
			'Days' : `${this.calculateBookingDays()}`,
			'Adult(s)': `${this.adultNumber}`,
			'Child(ren)': `${this.childNumber}`,
			'Order Number': `${this.id}`,
			'Cost' : `${this.calculateBookingCost()}`,
		})
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get bookings() {
		return this._bookings;
	}

	set bookings(value) {
		this._bookings = value;
	}

	get fullName() {
		return this._fullName;
	}

	set fullName(value) {
		this._fullName = value;
	}

	get roomTypeSelection(){
		return this._roomTypeSelection;
	}

	set roomTypeSelection(value) {
		this._roomTypeSelection = value;
	}

	get emailAddress() {
		return this._emailAddress;
	}

	set emailAddress(value) {
		this._emailAddress = value;
	}

	get phoneNumber() {
		return this._phoneNumber;
	}

	set phoneNumber(value) {
		this._phoneNumber = value;
	}

	get adultNumber() {
		return this._adultNumber;
	}

	set adultNumber(value) {
		this._adultNumber = value;
	}

	get checkinDate() {
		return this._checkinDate;
	}

	set checkinDate(value) {
		this._checkinDate = value;
	}

	get checkoutDate() {
		return this._checkoutDate;
	}

	set checkoutDate(value) {
		this._checkoutDate = value;
	}

	get childNumber() {
		return this._childNumber;
	}

	set childNumber(value) {
		this._childNumber = value;
	}

	get createOrder() {
		return this._createOrder;
	}

	set createOrder(value) {
		this._createOrder = value;
	}
}