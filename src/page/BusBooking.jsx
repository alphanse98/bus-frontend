import React, { useEffect, useState } from "react";
import Heter from "../component/Heter";
import { useNavigate } from "react-router-dom";
import getBusListApi from "../service/BookingService";
import InputComponent from "../component/InputComponent";

import { bookingBusApi } from "../service/BookingService";

const BusBooking = () => {
  let leftSeat = [1, 2, 3, 4, 5, 6, 7];
  let rightSeat = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [bookingList, setBookingList] = useState([]);

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

  const checkBooked = (seatNUmber, bookingData) => {
    for (let i = 0; i <= bookingList.length; i++) {
      if (seatNUmber == bookingList[i]?.seatNumber) return true;
    }
    return false;
  };

  const bookbus = async () => {
    try {
      await bookingBusApi(bookingData);
      await navigate("/BusBooking");
      await alert("Bus booked");
    } catch (error) {
      alert("error");
    }
  };

  const getBookingList = async () => {
    try {
      let res = await getBusListApi();
      setBookingList(res?.data);
      setLoading(false);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    getBookingList();
  }, []);

  if (loading) return <div>Loading ...... </div>;
  if (bookingData?.seatNumber)
    return (
      <div>
        <Heter />
        <div className="flex flex-col items-center  justify-center ">
          <p className="mb-5"> Arthi travels</p>
          <p className="mb-5"> Tirunelveli to Chennai 28-04-2024</p>
          <p className="mb-5"> Seat numbet = {bookingData?.seatNumber}</p>

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

          <div>
            <button
              onClick={() => bookbus()}
              class=" m-5 shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
            >
              Book
            </button>
            <button
              onClick={() => selectedSeat(null)}
              class="m-5 shrink-0 inline-block w-36 rounded-lg bg-red-600 py-3 font-bold text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );

  if (!bookingData?.seatNumber)
    return (
      <div>
        <div>
          <Heter />
          <p className="mb-5 text-center"> Arthi travels</p>
          <p className="mb-5 text-center"> Tirunelveli to Chennai 28-04-2024</p>
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
