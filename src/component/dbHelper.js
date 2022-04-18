import { getDatabase, ref, set } from "firebase/database";

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

// this is not a component

// read:
// add: https://firebase.google.com/docs/database/web/read-and-write#basic_write
// delete: 
// update:https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document - set it to "web v-8"


// booking CRUD
function dbBookingRead(){

}

function dbBookingUpdate(bookingId, inputDateFrom, inputDateTo, fkRoomId){
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

function dbBookingDelete(){
     
}

function dbBookingCreate(inputDateFrom, inputDateTo, fkRoomId){
    const db = getDatabase();
    set(ref(db, 'booking/'), {
        dateFrom: inputDateFrom,
        dateTo: inputDateTo,
        fk_room_id: fkRoomId
    });
}


// booking_occupants CRUD
function dbBookingOccupRead(){

}

function dbBookingOccupUpdate(bookingOccupId, inputCountOfAdult, inputCountOfChild, fkBookingId){
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

function dbBookingOccupDelete(){
     
}

function dbBookingOccupCreate(inputCountOfAdult, inputCountOfChild, fkBookingId){
    const db = getDatabase();
    set(ref(db, 'booking_occupants/'), {
        countOfAdult: inputCountOfAdult,
        countOfChild: inputCountOfChild,
        fk_booking_id: fkBookingId
    });
}

// floor CRUD
function dbFloorRead(){

}

function dbFloorUpdate(floorId, inputName){
    const db = getDatabase();
    db.collection('booking_occupants').doc(floorId).set({
        name: inputName
    })
    .then(() => {
       console.log("document successfully written");
    })
    .catch((error) => {
       console.error("error writing document: ", error);
    });
}

function dbFloorDelete(){
     
}

function dbFloorCreate(inputName){
    const db = getDatabase();
    set(ref(db, 'floor/'), {
        name: inputName
    });
}

// room CRUD
function dbRoomRead(){

}

function dbRoomUpdate(roomId, fkFloorId, fkRoomType, roomName){
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

function dbRoomDelete(){
     
}

function dbRoomCreate(fkFloorId, fkRoomType, roomName){
    const db = getDatabase();
    set(ref(db, 'room/'), {
        fk_floor_id: fkFloorId,
        fk_room_type: fkRoomType,
        room_name: roomName
    });
}

// user CRUD
function dbUserRead(){

}

function dbUserUpdate(userId, inputName, inputPhone){
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

function dbUserDelete(){
     
}

function dbUserCreate(inputName, inputPhone){
    const db = getDatabase();
    set(ref(db, 'user/'), {
        name: inputName,
        phone: inputPhone
    });
}

// room_type CRUD
function dbRoomTypeRead(){

}

function dbRoomTypeUpdate(roomTypeId, inputName){
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

function dbRoomTypeDelete(){
     
}

function dbRoomTypeCreate(inputName){
    const db = getDatabase();
    set(ref(db, 'room_type/'), {
        name: inputName
    });
}

// master_booking CRUD
function dbMasterBookRead(){

}

function dbMasterBookUpdate(masterBookId, fkBookingId, fkUserId){
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

function dbMasterBookDelete(){
     
}

function dbMasterBookCreate(fkBookingId, fkUserId){
    const db = getDatabase();
    set(ref(db, 'master_booking/'), {
        fk_booking_id: fkBookingId,
        fk_user_id: fkUserId
    });
}

// water_view CRUD
function dbWaterViewRead(){

}

function dbWaterViewUpdate(waterViewId, fkRoomId){
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

function dbWaterViewDelete(){
     
}

function dbWaterViewCreate(fkRoomId){
    const db = getDatabase();
    set(ref(db, 'water_view/'), {
        fk_room_id: fkRoomId
    });
}

// extra_billing CRUD
function dbExtraBillRead(){

}

function dbExtraBillUpdate(extraId, fkBookingId, inputPrice, inputTopic){
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

function dbExtraBillDelete(){
     
}

function dbExtraBillCreate(fkBookingId, inputPrice, inputTopic){
    const db = getDatabase();
    set(ref(db, 'extra_billing/'), {
        fk_booking_id: fkBookingId,
        price: inputPrice,
        topic: inputTopic
    });
}
