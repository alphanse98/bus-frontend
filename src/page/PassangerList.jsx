import React, { useEffect, useState } from "react";
import Heter from "../component/Heter";
import getBusListApi from "../service/BookingService";

const PassangerList = () => {
  const [bookingList, setBookingList] = useState([]);

  console.log("bookingList", bookingList);

  const getBookingList = async () => {
    try {
      let res = await getBusListApi();
      setBookingList(res?.data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getBookingList();
  }, []);

  return (
    <div>
      <Heter />
      <div>
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Passenger Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Seat Number
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Mobile
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Age
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Travel
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                 Ticket Price
                </th>
              </tr>
            </thead>
            {/* table ui start */}
            {bookingList?.map((item) => (
            <tbody>
              <tr class="odd:bg-white even:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.passengerName}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.seatNumber}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.mobile}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.age}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.date}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.startFrom} to  {item?.end}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item?.ticketPrice}
                </td>
               
              </tr>
            </tbody>
            ))} 
            {/* table ui end */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PassangerList;
