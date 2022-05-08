import React from 'react';
import {OrderSummary} from "../component/orderSummary/OrderSummary";
import {Route, Switch} from 'react-router-dom';
import {AddRoom} from "../component/addRoom/AddRoom";
// import {firebase} from "../../customFirebase/custom_Firebase";
import {AppProvider} from "../AppContext/AppContext";
import {EditRoom} from "../component/editRoom/EditRoom";
import {OrderNumberID} from "../component/bookingMisc/OrderNumberID";
import {Room} from "../component/models/Room";
import {dbCreateOne, dbReadAll, dbUpdateOne, dbDeleteOne} from "../component/dbHelper";

/**
 * Author: Azmi Uslu (s185736)
 * Type: Main function of the app.
 **/

export class Booking extends React.Component {
	constructor(props) {
		super(props);

		/**
		 * Following is updating the state and also the firebase..
		 * @param room - a room which is the same id as the one which is going to be edited.
		 * @param refreshRemoteD - this is not obligatory, you'll have the opportunity to get updated the database remote.
		 */

		this.editRoom = (room, updateRemote = true) => {
			let fieldsChanged = {};
			this.setState({
				load_indicator: true
			}, () => {
				this.setState(prevState => {
					const {rooms} = {...prevState};
					const oldRoomIndex = rooms.findIndex(v => v.id === room.id);
					const oldRoom = rooms[oldRoomIndex];
					fieldsChanged = Object
						.keys(oldRoom)
						.reduce((fields, field) => {
							if ((oldRoom[field] !== room[field]) && !Array.isArray(room[field])) {
								fields[field] = room[field];
							}
							return fields;
						}, {});
					rooms[oldRoomIndex] = room;

					return ({
						...prevState,
						rooms
					})
				}, () => {
					if (updateRemote) {
						dbUpdateOne("rooms", room.id, fieldsChanged)
							.then(() => {
								this.setState({
									load_indicator: false,
								})
							})
							.catch(() => {
								this.setState({
									load_indicator: false,
								})
							})
					}
				});
			})
		};

		/**
		 *
		 * @param objectType - The room type.
		 * @param object
		 * @param refreshRemoteD - this is not obligatory, you'll have the opportunity to get updated the database remote.
		 */
		this.addRoom = (objectType, object, updateRemote = true) => {
			let collectionName, collection;

			switch (objectType.trim().toLowerCase()) {
				case 'room':
					collectionName = 'rooms';
					break;

				default:
					break;
			}
			let selectedRoom, selectedRoomIndex;
			this.setState(prevState => {
				collection = collectionName && prevState[collectionName];
					const {rooms} = prevState;
					switch (collectionName) {
						default:
							collection.push(object);
							break;
					}
				if (collectionName === 'rooms') {
					return ({
						load_indicator: true,
						rooms: collection
					})
				} else {
					prevState.rooms[selectedRoomIndex] = selectedRoom;
					return ({
						load_indicator: true,
						rooms: [...prevState.rooms]
					})
				}
			}, () => {
				if (collectionName && collection) {
					if (updateRemote) {
						dbUpdateOne(collectionName, object.id, {...object})
							.then(() => {
								this.setState(prevState => ({
									load_indicator: false,
								}))
							})
							.catch(err => {
								this.setState({
									load_indicator: false,
								})
							})
					}
				}
			})
		};


		this.state = {
			load_indicator: true,
			rooms: [],
			bookings: [],
			addRoom: this.addRoom,
			editRoom: this.editRoom,
			addObject: this.addRoom,
			alert: {
				display: false,
				announcement: ''
			}
		}
	}

	/**
	 * This will fetch all the informations from firebase and update it.
	 * */
	componentDidMount() {
		this
			.collectInformations('rooms', 'bookings')
			.then(values => {
				this.setState(prevState => {
					const {bookings, rooms} = prevState;
					rooms.forEach(v => {bookings.filter(b => b.roomID === v.id)});
					return ({rooms})});
			}).catch(err => {
			this.setState({
				alert: {
					display: true,
					announcement: `Error: ${err.announcement}`}
			})
		})
	}

	/**
	 * Will fetch the information from firebase.
	 * @param informations
	 * @returns {Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>[]>}
	 */
	async collectInformations(...informations) {
		return Promise.all(informations.map(collection => this.collectInformation(collection)))
	}

	/**
	 * Will fetch the information of booking oder from firebase and will add it to its state.
	 * @param information - This is rooms.
	 * @returns {Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>}
	 */
	collectInformation = (information) => {
		const formattedCollection = information.trim().toLowerCase();
		//const db = firebase.firestore();
		let data = dbReadAll("rooms")
			.then( (items) => {
				this.setState(prevState => {
					let objects = [];

					items.forEach(element => {
						objects.push(
							new Room(element._fullName, element._emailAddress, element._phoneNumber, element._roomTypeSelection,
								element._adultNumber, element._checkinDate, element.checkoutDate, element._childNumber, element._id,
								element._createOrder, element._updateOrder)
						);
					});

					return ({
						load_indicator: false,
						[information]: [...objects]})
				}, () => {
				})
			})
			.catch(e => {
				this.setState({
					load_indicator: false}, () => {
					console.dir(e);
				})
			});

	};

	render() {
		return (
			<AppProvider value={this.state}>
				<Switch>
					<Route path="/booking/orders">
						<OrderSummary/>
					</Route>
					<Route
						path="/booking/booknow"
						render={(props) =>
							<AddRoom {...props} />}
					/>

					<Route
						path="/booking/goto/:roomID"
						render={(props) =>
							<OrderNumberID {...props}/>}
					/>

					<Route
						path="/booking/edit/:roomID"
						render={(props) =>
							<EditRoom {...props} />}
					/>

					<Route
						path="/booking" //following is the main page of our booking portal page.
						render={(props) =>
							<OrderSummary {...props}/>}
					/>
				</Switch>
			</AppProvider>
		)
	}
}