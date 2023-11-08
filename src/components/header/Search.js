import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import OptionItems from "./OptionItems";

export default function Search(props) {
  const [showdate, setShowDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showoptions, setshowoptions] = useState(false);
  const [count, setcount] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  return (
    <>
      <h1 className="headrer-title">A lifetime of discounts? Its Genius..</h1>
      <p className="header-desc">
        Get rewarded for your travels-unlock instant saving of 10% or more with
        a free Booking.com account
      </p>
      <button className="header-btn">Sign in/ Register</button>
      <div className="header-search">
        <div className="header-search-items">
          <FontAwesomeIcon icon={props.faBed} className="header-icon" />
          <input
            type="text"
            placeholder="Where to?"
            className="header-search-input"
          />
        </div>
        <div className="header-search-items">
          <FontAwesomeIcon icon={props.faCalendar} className="header-icon" />
          <span
            className="header-search-text"
            onClick={() => {
              setShowDate(!showdate);
              setshowoptions(false);
            }}
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {showdate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="header-date-range"
            />
          )}
        </div>
        <div className="header-search-items">
          <FontAwesomeIcon icon={props.faPerson} className="header-icon" />
          <span
            className="header-search-text"
            onClick={() => {
              setshowoptions(!showoptions);
              setShowDate(false);
            }}
          >
            {`${count.Adult} adults ${count.Children} children ${count.Room} room`}
          </span>
          {showoptions && (
            <div className="header-options">
              <OptionItems text="Adult" count={count} setcount={setcount} />
              <OptionItems text="Children" count={count} setcount={setcount} />
              <OptionItems text="Room" count={count} setcount={setcount} />
            </div>
          )}
        </div>
        <div className="header-search-items">
          <button className="header-search-btn">Search</button>
        </div>
      </div>
    </>
  );
}
