import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";
import { toast } from "sonner";

export default function SchedulingForm({ setScheduleDate, name }: any) {
  const [date, setDate] = useState<Date | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const price: any = localStorage.getItem("totalCost");

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    rental1: "",
    rental2: "",
    rentalCompany: "", // <-- new
    agreed: false,
  });

  const handleRentalCompanyChange = (company: string) => {
  setFormState((prev) => ({
    ...prev,
    rentalCompany: prev.rentalCompany === company ? "" : company, // toggle
  }));
};

  const handleRentalChange = (
    question: "rental1" | "rental2",
    value: "yes" | "no"
  ) => {
    setFormState((prev) => ({ ...prev, [question]: value }));
  };

  const handleAgreeChange = () => {
    setFormState((prev) => ({ ...prev, agreed: !prev.agreed }));
  };

  const handleNext = (e: React.FormEvent) => {
  e.preventDefault();
  const { rental1, rental2, rentalCompany, agreed } = formState;

  if (!rental1 || !rental2 || !agreed) {
    return toast.error("YOU MUST AGREE BEFORE PROCEEDING");
  }

  if (!date) return toast.error("YOU MUST SELECT A DATE");

  // Enforce rental company selection if rental1 is yes
  if (rental1 === "yes" && rentalCompany === "") {
    return toast.error("YOU MUST SELECT A RENTAL COMPANY");
  }

  localStorage.setItem("rental1", rental1);
  localStorage.setItem("rental2", rental2);
  localStorage.setItem("rentalCompany", rentalCompany);
  localStorage.setItem("agreed", String(agreed));
  setScheduleDate({
    date: date,
    timezone: selectedTimezone,
  });

  setTimeout(() => {
    navigate("/customer-details?page=5");
  }, 100);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
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

            <div className="mb-4">
              <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                {/* Current Date and Time */}
                <div className="text-sm text-gray-600 italic mb-4">
                  TIME/DATE of ENTRY: {currentDateTime.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                {/* Current Date and Time */}
                <div className="text-sm text-gray-600 italic mb-4">
                  LEE HYUNDAI OF FAYETTEVILLE | 1960 Skibo Rd, Fayetteville, NC
                  28314
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
                      filterDate={isWeekday} // ⬅️ This is the key addition
                    />
                    <img
                      src="/img/calendar-picker 1.svg"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Select Preferred Date (Weekdays Only)
                  </div>
                </div>

                <div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Time ZOne :
                    </label>
                    <div className="relative w-full base-lg:w-[345px]">
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
                    </div>
                    <div className="text-xs text-gray-500 mt-1 italic">
                      *Select Preferred Time-Zone
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              {/* RENTAL CAR OPTIONS*/}
              <div className="flex justify-between mt-12">
                <h2 className="text-red-600 font-bold text-sm mb-4">
                  RENTAL CAR OPTIONS
                </h2>
              </div>

              <div className="w-full base-lg:w-[522px] mt-10">
                {/* Question 1 with inline checkboxes */}
                <div className="flex items-center flex-wrap gap-4 text-sm font-medium mb-3">
                  <p className="mb-0">
                    Will you be providing your customer, {name}, a courtesy vehicle during Warranty Repairs?
                  </p>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rentalYes1"
                      checked={formState.rental1 === "yes"}
                      className="accent-red-600"
                      onChange={() => handleRentalChange("rental1", "yes")}
                    />
                    <span className="ml-[7px]">YES</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rentalNo1"
                      checked={formState.rental1 === "no"}
                      className="accent-red-600"
                      onChange={() => handleRentalChange("rental1", "no")}
                    />
                    <span className="ml-[7px]">NO</span>
                  </label>
                    
                  {/*Rental Companies*/}
                  <div className="flex flex-wrap gap-6 mt-4 mb-5">
                    {formState.rental1 === "yes" && (
                      <>
                        <p>Select rental company below:</p>
                        <div className="flex flex-wrap gap-6 mt-0 mb-3">
                          {["Enterprise", "Hertz", "Valet Service", "None"].map((company) => (
                            <label key={company} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                name="rentalCompany"
                                checked={formState.rentalCompany === company}
                                onChange={() => handleRentalCompanyChange(company)}
                                className="accent-red-600"
                              />
                              <span>{company}</span>
                            </label>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                </div>

                {/* Question 2 with inline checkboxes */}
                <div className="flex items-center flex-wrap gap-4 text-sm font-medium mb-3">
                  <p className="mb-0">
                    If NO, Would the customer, {name}, like assistance with coordinating an Enterprise rental vehicle during Repairs (*<strong>At the customers Expense</strong>)?
                  </p>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rentalYes2"
                      checked={formState.rental2 === "yes"}
                      className="accent-red-600"
                      onChange={() => handleRentalChange("rental2", "yes")}
                    />
                    <span className="ml-[7px]">YES</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rentalNo2"
                      checked={formState.rental2 === "no"}
                      className="accent-red-600"
                      onChange={() => handleRentalChange("rental2", "no")}
                    />
                    <span className="ml-[7px]">NO</span>
                  </label>
                </div>

                <br />

                {/* Disclaimer */}
                <div className="w-full mb-12 mt-4">
                  <p className="block w-full font-bold">
                    DISCLAIMER (PLEASE READ): You confirm that you have valid
                    automobile insurance coverage that provides primary coverage
                    for the loaner vehicle while it is in your possession.
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formState.agreed}
                    onChange={handleAgreeChange}
                    className="w-4 h-4 text-red-600"
                  />
                  <label htmlFor="agree" className="text-sm">
                    I acknowledge and agree to the disclaimer above.
                  </label>
                </div>
              </div>

              <div className="flex justify-end flex-col items-end gap-4 mt-16">
                <div className="mr-6">
                  <div className="text-sm text-right">
                    Sub-Total: <span className="font-bold">${price}</span>
                  </div>
                </div>
                <div className="flex justify-end base-sm:mt-8 mt-4 gap-4">
                  <Link
                    to={"?page=3"}
                    className="bg-black text-white hover:bg-black px-6 rounded-[3px] py-2"
                  >
                    PREV
                  </Link>
                  <button
                    onClick={handleNext}
                    className="bg-[#E51C22] text-white hover:bg-[#E51C22] px-6 rounded-[3px] py-2 cursor-pointer"
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
