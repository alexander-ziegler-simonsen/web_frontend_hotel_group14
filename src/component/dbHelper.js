import { initializeApp } from "firebase/app"; // firebase
import { collection, getDocs, doc, setDoc, getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

// this is not a component

// read all: https://firebase.google.com/docs/firestore/query-data/get-data#get_all_documents_in_a_collection
// read one: 
// create: https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
// delete: https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
// update:https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document - set it to "web v-8"


// firebase
const keys = require('../firebaseKey.json');
const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db)
const firestore = getFirestore(app);

export async function dbReadAll(tableName){
    // TODO: maybe just load this into the redux store, or return as a list of json objs

    let output = [];
    
    const resultRef = collection(firestore, tableName);
    const result = await (await getDocs(resultRef)).forEach(item => {
        output.push({id: item.id, ...item.data()})
    })

    //TODO: check if return gets runed, before the get is done
    return output;
}

// #region booking CRUD
export function dbBookingReadOne(){

}

export function dbBookingUpdate(bookingId, inputDateFrom, inputDateTo, fkRoomId){
     const db = getDatabase();
     db.collection('booking').doc(bookingId).set({
        dateFrom: inputDateFrom,
        dateTo: inputDateTo,
        fk_room_id: fkRoomId
     })
     .then(() => {
        console.log("document successfully written");
     })
     .catch((error) => {
        console.error("error writing document: ", error);
     });
}

export function dbBookingDelete(bookingId){
     const db = getDatabase();
     db.collection('booking').doc(bookingId).delete().then(() => {
        console.log("document successfully deleted!");
     })
     .catch((error) => {
        console.error("error removing document: ", error);
     });
}

export function dbBookingCreate(inputDateFrom, inputDateTo, fkRoomId){
    const db = getDatabase();
    db.collection("booking").add({
        dateFrom: inputDateFrom,
        dateTo: inputDateTo,
        fk_room_id: fkRoomId})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });


}
// #endregion

// #region booking_occupants CRUD
export function dbBookingOccupUpdate(bookingOccupId, inputCountOfAdult, inputCountOfChild, fkBookingId){
    const db = getDatabase();
    db.collection('booking_occupants').doc(bookingOccupId).set({
        countOfAdult: inputCountOfAdult,
        countOfChild: inputCountOfChild,
        fk_booking_id: fkBookingId
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbBookingOccupDelete(bookingOccupId){
    const db = getDatabase();
    db.collection('booking_occupants').doc(bookingOccupId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbBookingOccupCreate(inputCountOfAdult, inputCountOfChild, fkBookingId){
    const db = getDatabase();
    db.collection("booking_occupants").add({
        countOfAdult: inputCountOfAdult,
        countOfChild: inputCountOfChild,
        fk_booking_id: fkBookingId})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion

// #region floor CRUD
export function dbFloorUpdate(floorId, inputName){
    const db = getDatabase();
    db.collection('floor').doc(floorId).set({
        name: inputName
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbFloorDelete(floorId){
    const db = getDatabase();
    db.collection('floor').doc(floorId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbFloorCreate(inputName){
    const db = getDatabase();
    db.collection("floor").add({
        name: inputName})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion

// #region room CRUD
export async function dbRoomRead(tableName){
    // TODO: maybe just load this into the redux store, or return as a list of json objs

    let output = [];
    
    const resultRef = collection(firestore, "room")
    const result = await (await getDocs(resultRef)).forEach(room => {
        output.push({id: room.id, ...room.data()})
    })

    //TODO: check if return gets runed, before the get is done
    return output;
}

export function dbRoomUpdate(roomId, fkFloorId, fkRoomType, roomName){
    const db = getDatabase();
    db.collection('room').doc(roomId).set({
        fk_floor_id: fkFloorId,
        fk_room_type: fkRoomType,
        room_name: roomName
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbRoomDelete(roomId){
    const db = getDatabase();
    db.collection('room').doc(roomId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbRoomCreate(fkFloorId, fkRoomType, roomName){
    const db = getDatabase();
    db.collection("room").add({
        fk_floor_id: fkFloorId,
        fk_room_type: fkRoomType,
        room_name: roomName})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion 

// #region user CRUD
export function dbUserUpdate(userId, inputName, inputPhone){
    const db = getDatabase();
    db.collection('user').doc(userId).set({
        name: inputName,
        phone: inputPhone
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbUserDelete(userId){
    const db = getDatabase();
    db.collection('user').doc(userId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });

    // TODO: we also need to delete the user, not just the userdata from our database
}

export function dbUserCreate(inputName, inputPhone){
    const db = getDatabase();
    db.collection("user").add({
        name: inputName,
        phone: inputPhone})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion 

// #region room_type CRUD
export function dbRoomTypeUpdate(roomTypeId, inputName){
    const db = getDatabase();
    db.collection('room_type').doc(roomTypeId).set({
        name: inputName
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbRoomTypeDelete(roomTypeId){
    const db = getDatabase();
    db.collection('room_type').doc(roomTypeId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbRoomTypeCreate(inputName){
    const db = getDatabase();
    db.collection("room_type").add({
        name: inputName})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion

// #region master_booking CRUD
export function dbMasterBookUpdate(masterBookId, fkBookingId, fkUserId){
    const db = getDatabase();
    db.collection('master_booking').doc(masterBookId).set({
        fk_booking_id: fkBookingId,
        fk_user_id: fkUserId
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbMasterBookDelete(masterBookId){
    const db = getDatabase();
    db.collection('master_booking').doc(masterBookId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbMasterBookCreate(fkBookingId, fkUserId){
    const db = getDatabase();
    db.collection("master_booking").add({
        fk_booking_id: fkBookingId,
        fk_user_id: fkUserId})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion

// #region water_view CRUD
export function dbWaterViewUpdate(waterViewId, fkRoomId){
    const db = getDatabase();
    db.collection('water_view').doc(waterViewId).set({
        fk_room_id: fkRoomId
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbWaterViewDelete(waterViewId){
    const db = getDatabase();
    db.collection('water_view').doc(waterViewId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbWaterViewCreate(fkRoomId){
    const db = getDatabase();
    db.collection("water_view").add({
        fk_room_id: fkRoomId})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion

// #region extra_billing CRUD
export function dbExtraBillUpdate(extraId, fkBookingId, inputPrice, inputTopic){
    const db = getDatabase();
    db.collection('extra_billing').doc(extraId).set({
        fk_booking_id: fkBookingId,
        price: inputPrice,
        topic: inputTopic
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

export function dbExtraBillDelete(extraId){
    const db = getDatabase();
    db.collection('extra_billing').doc(extraId).delete().then(() => {
       console.log("document successfully deleted!");
    })
    .catch((error) => {
       console.error("error removing document: ", error);
    });
}

export function dbExtraBillCreate(fkBookingId, inputPrice, inputTopic){
    const db = getDatabase();
    db.collection("extra_billing").add({
        fk_booking_id: fkBookingId,
        price: inputPrice,
        topic: inputTopic})
    .then((docRef) => {
        console.log("document written with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("error adding document: ", error);
    });
}
// #endregion
