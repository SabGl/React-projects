

import NewGuest from "./components/Form/NewGuest";
import React, {useState} from "react";
import UserList from "./components/UserList/UserList";

const  GUESTS = [
  {
    id:'g1',
    name: "Chris",
    age: "25",
    mail:"chris1998@mail.ru"
  },
  {
    id:'g2',
    name: "Costa",
    age: "29",
    mail:"costa_medved@mail.ua"
  },
];

const App = () => {
  const [guestInput, setGuestInfo] = useState(GUESTS);



 const addDataHandler = (guestInput) => {
    setGuestInfo((prevGuests) => {
      return [guestInput, ...prevGuests]
    });
 }

  return (
   <>
      <NewGuest onUserData = {addDataHandler}/>
      <UserList guests = {guestInput}/>
      </>
  );
};

export default App;
