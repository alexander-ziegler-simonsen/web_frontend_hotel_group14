import Room from './Room'
import './RoomPage.css'
import roomData from '../../roomData';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import { dbReadAll2, dbReadOne, dbReadAll } from "../dbHelper";


/**
 * Author: Sammy Chauhan (S191181)
 **/

function RoomPage() {
  let output = dbReadOne('room_type', 'El5P83LkQb5EIYseELTP').then((v) => {
    console.log("testing one", v);
    //ljndkcnlscnlsdnclskcd
  }).catch((err) => {
    console.log(err);
  });
  return (
    <div className="Rooms">

      <Route path={"/budget"}>
        <Room className="Budget Room"
          text={budget.text}
          author={budget.author} />
      </Route>
      <Route path={"/standard"}>
        <Room className="Standard Room"
          text={standard.text}
          author={standard.author} />
      </Route>
      <Route path={"/business"}>
        <Room className="Business Room"
          text={business.text}
          author={business.author} />
      </Route>
      <Route path={"/luxury"}>
        <Room className="Luxury Suite"
          text={luxury.text}
          author={luxury.author} />
      </Route>
    </div>
  );
}

export const budget = {
  text: roomData.rooms.find(x => x.id === '1').description,
  author: {
    name: roomData.rooms.find(x => x.id === '1').roomType,
    image: roomData.rooms.find(x => x.id === '1').image,
    height: 400,
    width: 600
  }
}
export const standard = {
  text: roomData.rooms.find(x => x.id === '2').description,
  author: {
    name: roomData.rooms.find(x => x.id === '2').roomType,
    image: roomData.rooms.find(x => x.id === '2').image,
    height: 400,
    width: 600
  }
}
export const business = {
  text: roomData.rooms.find(x => x.id === '3').description,
  author: {
    name: roomData.rooms.find(x => x.id === '3').roomType,
    image: roomData.rooms.find(x => x.id === '3').image,
    height: 400,
    width: 600
  }
}
export const luxury = {
  text: roomData.rooms.find(x => x.id === '4').description,
  author: {
    name: roomData.rooms.find(x => x.id === '4').roomType,
    image: roomData.rooms.find(x => x.id === '4').image,
    height: 400,
    width: 600
  }
}

//dbReadAll2('room_type')
/*
let output = dbReadOne('room_type', 'El5P83LkQb5EIYseELTP').then((v) => { 
  console.log("testing one", v);
//ljndkcnlscnlsdnclskcd
 }).catch((err) => { 
   console.log(err);
   });
   */




let test = dbReadAll("room_type").then((v) => {
  console.log("testing", v);

}).catch((err) => {
  console.log("error", err);

});



export default RoomPage;