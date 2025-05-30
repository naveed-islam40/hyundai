import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";

export default function SchedulingForm({ setScheduleDate, name }: any) {
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

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
            <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            SCHEDULING
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields required to process request
          </p>
        </div>

        <div className="p-6">
          <form className="max-base-sm:px-2 pb-2">
              {/* SERVICES & LABOR Section */}
              <div className="flex justify-between">
                <h2 className="text-red-600 font-bold text-sm mb-4">
                  SCHEDULE APPOINTMENT
                </h2>
                <div className="text-right">
                  <span className="text-red-600 font-bold hidden base-xs:block">
                    Customer:
                  </span>{" "}
                  {name}
                </div>
              </div>

              <div className="mb-12">
                <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                    {/* Current Date and Time */}
                    <div className="text-sm text-gray-600 italic mb-4">
                     TIME/DATE of ENTRY: {currentDateTime.toLocaleString()}
                    </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date :
                    </label>
                    <div className="w-full base-lg:w-[345px] bg-[#C5C5C573] relative rounded-sm">
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        className="p-2 bg-gray-100 border w-full sm:w-[345px] lg:w-[355px] text-[#E51C22]"
                      />
                      <img
                        src="/img/calendar-picker 1.svg"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 italic">
                      *Select Preferred Date
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Time :
                    </label>
                    <div className="relative w-full base-lg:w-[345px]">
                      <input
                        type="time"
                        className="p-2 bg-gray-100 border w-full sm:w-[345px] lg:w-[520px] text-[#E51C22]"
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 italic">
                      *Select Preferred Time
                    </div>
                </div>
              </div>


                <div className="w-full base-lg:w-[522px] mt-10">
                  <label className="block text-sm font-medium mb-1">
                        Time-Zone :
                      </label>
                  <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                    className="bg-gray-100 border w-full sm:w-[345px] lg:w-[520px] text-[#E51C22]"
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "",
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
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Select Preferred Time-Zone
                  </div>
                </div>

                <div className="flex justify-end flex-col items-end gap-4 mt-16">
                  <div className="mr-6">
                    <div className="text-sm text-right">
                      Sub-Total: <span className="font-bold">${subTotal}</span>
                    </div>
                  </div>
                  <div className="flex justify-end base-sm:mt-8 mt-4 gap-4">
                    <Link
                      to={"?page=3"}
                      className="bg-black text-white hover:bg-black px-6 rounded-[3px] py-2"
                    >
                      PREV
                    </Link>
                    <Link
                      to={"?page=5"}
                      onClick={handleNext}
                      className="bg-[#E51C22] text-white hover:bg-[#E51C22] px-6 rounded-[3px] py-2 "
                    >
                      NEXT
                    </Link>
                  </div>
                </div>

              </div>
          </form>
        </div>

      </div>
    </div>
  );
}
