import { getDatabase, ref, set } from "firebase/database";

// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

// this is not a component

// read:
// add: https://firebase.google.com/docs/database/web/read-and-write#basic_write
// delete:
// update:


// booking CRUD
function dbBookingRead(){

}

function dbBookingUpdate(){
     
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

function dbBookingOccupUpdate(){
     
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

function dbFloorUpdate(){
     
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

function dbRoomUpdate(){
     
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

function dbUserUpdate(){
     
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

function dbRoomTypeUpdate(){
     
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

function dbMasterBookUpdate(){
     
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

function dbWaterViewUpdate(){
     
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

function dbExtraBillUpdate(){
     
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
