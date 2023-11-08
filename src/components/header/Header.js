import React from "react";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Search from "./Search";
import HeaderListItems from "./HeaderListItems";

export default function Header(props) {
  return (
    <div className="header">
      <div
        className={
          props.List !== "List" ? "header-container" : "header-container-list"
        }
      >
        <div className="header-list">
          <HeaderListItems icon={faCar} text="Stays" />
          <HeaderListItems icon={faPlane} text="Flights" />
          <HeaderListItems icon={faCar} text="Car Rentals" />
          <HeaderListItems icon={faBed} text="Attractions" />
          <HeaderListItems icon={faTaxi} text="Airport Taxi" />
        </div>
        {props.List !== "List" && (
          <Search faBed={faBed} faCalendar={faCalendar} faPerson={faPerson} />
        )}
      </div>
    </div>
  );
}
