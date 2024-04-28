import React, { useState } from "react";
import Heter from "../component/Heter";
import InputComponent from "../component/InputComponent";
import { data } from "autoprefixer";

const BusBooking = () => {
  let leftSeat = [1, 2, 3, 4, 5, 6, 7];
  let rightSeat = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];

  const bookingList = [1, 3, 16, 8, 22, 5, 10];

  const [bookingData, setBookingData] = useState({
    busNumber: "Arthi travels",
    date: "28-04-2024",
    startFrom: "tirunelveli",
    end: "Chennai",
    ticketPrice: "999",
    seatNumber: "",
    mobile: "",
    age: "",
    sex: "",
    passengerName: "",
  });

  const selectedSeat = (seatNUmber) => {
    let temCopy = { ...bookingData };
    temCopy.seatNumber = seatNUmber;
    setBookingData(temCopy);
  };

  const updateValue = (e) => {
    let temCopy = { ...bookingData };
    temCopy[e.target.name] = e.target.value;
    setBookingData(temCopy);
  };

  console.log("bookingData", bookingData);

  const checkBooked = (seatNUmber, bookingData) => {
    for (let i = 0; i <= bookingData.length; i++) {
      if (seatNUmber == bookingData[i]) return true;
    }
    return false;
  };

  if (bookingData?.seatNumber)
    return (
      <div>
        <Heter />
        <div className="flex justify-center gap-2">
          {bookingData?.seatNumber}
          <div className="w-96 flex flex-col gap-5">
            <InputComponent
              placeholder={"passenger Name"}
              type={"text"}
              name={"passengerName"}
              value={bookingData?.passengerName}
              onChange={updateValue}
            />
            <InputComponent
              placeholder={"mobile"}
              type={"text"}
              name={"mobile"}
              value={bookingData?.mobile}
              onChange={updateValue}
            />
            <InputComponent
              placeholder={"age"}
              type={"text"}
              name={"age"}
              value={bookingData?.age}
              onChange={updateValue}
            />
            <InputComponent
              placeholder={"sex"}
              type={"text"}
              name={"sex"}
              value={bookingData?.sex}
              onChange={updateValue}
            />
          </div>
        </div>
      </div>
    );

  if (!bookingData?.seatNumber)
    return (
      <div>
        <div>
          <Heter />
          <div className="flex justify-center mt-2">
            <div
              className=" border-solid border-4 border-sky-500 p-5 flex flex-wrap flex-col rounded-md mb-20"
              style={{
                width: "400px",
              }}
            >
              <div className="text-right  mp-12">
                <div className="w-16 mb-5 h-16 border-solid border-2 border-sky-500 flex justify-center items-center text-base	cursor-pointer rounded-md">
                  Driver
                </div>

                <div className="flex">
                  <div className="flex flex-wrap  w-16  justify-around mr-16">
                    {/* left side seat ui */}
                    {leftSeat?.map((item) => (
                      <div
                        onClick={() => selectedSeat(item)}
                        className={`w-16 mt-4 h-16 border-solid border-2 border-sky-500 flex justify-center items-center text-base cursor-pointer rounded-md ${
                          checkBooked(item, bookingList) && "bg-sky-300"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {/* right side seat ui */}
                    {rightSeat?.map((item) => (
                      <div
                        onClick={() => selectedSeat(item)}
                        className={`w-16 mt-4 h-16 border-solid border-2 border-sky-500 flex justify-center items-center text-base cursor-pointer rounded-md ${
                          checkBooked(item, bookingList) && "bg-sky-300"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BusBooking;
