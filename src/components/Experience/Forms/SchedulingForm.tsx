import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";

export default function SchedulingForm({ setScheduleDate }: any) {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<any>(null);
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [subTotal, setSubTotal] = useState(0);

  const handleNext = () => {
    setScheduleDate({
      date: date,
      time: time,
      timezone: selectedTimezone,
    });
  };

  useEffect(() => {
    const price = localStorage.getItem("totalCost");
    setSubTotal(Number(price));
  }, []);

  return (
    <div className="mx-auto p-6 bg-white shadow-sm rounded-lg h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-lg font-bold">SCHEDULING</h1>
          <p className="text-xs text-white italic">
            *All fields required to process request
          </p>
        </div>

        <div className="ml-10">
          <div className="flex justify-between mb-8">
            <div className="text-[#E51C22] font-bold text-sm">
              SCHEDULE YOUR APPOINTMENT
            </div>
            <div>
              <span className="text-[#E51C22] font-bold text-sm">
                Customer:
              </span>{" "}
              <span className="text-sm font-bold">SMITH, JANE</span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-bold uppercase mb-4">DATE & TIME</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Date: (select preferred date)
                </label>
                <div className="w-[345px] bg-[#C5C5C573] relative rounded-sm">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                    className="pl-3 pr-10 py-2 rounded text-sm w-[345px] focus:ring-0 focus:border-none focus:outline-0 text-[#E51C22]"
                  />
                  <img
                    src="/img/calendar-picker 1.svg"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Time: (select preferred time)
                </label>
                <div className="relative w-[345px]">
                  <input
                    type="time"
                    className=" px-3 py-2 rounded text-sm w-[345px] focus:ring-0 focus:border-none focus:outline-0 text-[#E51C22] bg-[#C5C5C573]"
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-[522px] mt-10">
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
                className=""
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#C5C5C573",
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#E51C22",
                  }),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end flex-col items-end gap-4 mt-16">
        <div className="mr-6">
          <div className="text-sm text-right">
            Sub-Total: <span className="font-bold">${subTotal}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link
            to={"?page=2"}
            className="bg-black text-white hover:bg-black px-6 rounded-[3px] py-2"
          >
            PREV
          </Link>
          <Link
            to={"?page=4"}
            onClick={handleNext}
            className="bg-[#E51C22] text-white hover:bg-[#E51C22] px-6 rounded-[3px] py-2 "
          >
            NEXT
          </Link>
        </div>
      </div>
    </div>
  );
}
