import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";
import { toast } from "sonner";

export default function SchedulingForm({
  setScheduleDate,
  name,
  paintServiceInfo,
  scheduleDate,
}: any) {
  const [date, setDate] = useState<Date | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const { formState, setFormState } = usePaintServiceContext();

  const price: any = localStorage.getItem("totalCost");

  useEffect(() => {
    setDate(scheduleDate?.date);
  }, [scheduleDate?.date]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const navigate = useNavigate();

  const handleRentalChange = (
  question: "rental1" | "rental2",
  value: "yes" | "no"
) => {
  setFormState((prev: any) => {
    if (question === "rental1") {
      return {
        ...prev,
        rental1: value,
        rentalCompany: value === "yes" ? "Dealer Courtesy" : "",
      };
    }

    if (question === "rental2") {
      return {
        ...prev,
        rental2: value,
        rentalCompany: value === "yes" ? "Enterprise" : "",
      };
    }

    return { ...prev, [question]: value };
  });
};

  const handleAgreeChange = () => {
    setFormState((prev: any) => ({ ...prev, agreed: !prev.agreed }));
  };

  const handleNext = (e: React.FormEvent) => {
  e.preventDefault();
  const { rental1, rental2, rentalCompany, agreed } = formState;

  if (!date) {
    return toast.error("PLEASE SELECT PREFERRED APPOINTMENT DATE");
  }

  if (!rental1 || (rental1 === "no" && !rental2)) {
    return toast.error(
      "PLEASE ANSWER BOTH COURTESY VEHICLE QUESTIONS (YES or NO)"
    );
  }

  if (rental1 === "yes" && rentalCompany === "") {
    return toast.error("PLEASE SELECT A RENTAL COMPANY");
  }

  if (!agreed) {
    return toast.error("YOU MUST AGREE TO THE DISCLAIMER BEFORE PROCEEDING");
  }

  localStorage.setItem("rental1", rental1);
  localStorage.setItem("rental2", rental2);
  localStorage.setItem("rentalCompany", rentalCompany);
  localStorage.setItem("agreed", String(agreed));

  if (rentalCompany === "Dealer Courtesy") {
    localStorage.setItem("rental1", "courtesy");
    localStorage.setItem(
      "dealerCourtesyNote",
      "Dealer Courtesy Required. HMA Customer will receive a courtesy vehicle from the dealership."
    );
  } else {
    localStorage.setItem("rental1", rental1);
    localStorage.removeItem("dealerCourtesyNote");
  }

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
      <div>
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold max-base-sm:w-full">
            SCHEDULING
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields required to process request
          </p>
        </div>

        <div className="p-6">
          <form className="max-base-sm:px-2 pb-2">
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
                <div className="text-sm text-gray-600 italic mb-4">
                  TIME/DATE of ENTRY:{" "}
                  {currentDateTime.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {currentDateTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                <div className="text-sm text-gray-600 italic mb-4">
                  <p>
                    NEAREST LOCATION:{" "}
                    {paintServiceInfo?.cbsa || "CA Dir San Ramon"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date :</label>
                  <div className="w-full base-lg:w-[345px] bg-[#C5C5C573] relative rounded-sm">
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="DD/MM/YYYY"
                      className="p-2 bg-gray-100 border w-full sm:w-[345px] lg:w-[355px] text-[#E51C22]"
                      filterDate={isWeekday}
                      minDate={new Date()}
                    />
                    <img
                      src="img/calendar-picker 1.svg"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Select Preferred Date (Weekdays Only)
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Time Zone :</label>
                  <div className="relative w-full base-lg:w-[345px]">
                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                      className="bg-gray-100 border w-full text-[#E51C22]"
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

              <hr />

              <div className="flex justify-between mt-12">
                <h2 className="text-red-600 font-bold text-sm mb-4">
                  RENTAL CAR OPTIONS
                </h2>
              </div>

              <div className="w-full base-lg:w-[522px] mt-10">
                <div className="flex items-center flex-wrap gap-4 text-sm font-medium mb-3">
                  <p className="mb-0">
                    Will you be providing your customer, <strong>{name}</strong>, a courtesy
                    vehicle during Warranty Repairs?
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
                </div>

                {formState.rental1 === "yes" && (
                  <div className="text-sm text-green-700 font-medium mt-4 mb-5">
                    <p>✔ Dealer Courtesy vehicle will be provided.</p>
                  </div>
                )}

                {formState.rental1 === "no" && (
                <>
                  <div className="flex items-center flex-wrap gap-4 text-sm font-medium mb-3">
                    <p className="mb-0">
                      Since you selected NO, would the customer,<strong>{name}</strong>, like assistance with
                      coordinating an Enterprise rental vehicle during Repairs (
                      <strong>At the customer’s expense</strong>)?
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

                  {formState.rental2 === "yes" && (
                    <div className="text-sm text-green-700 font-medium mt-4 mb-5">
                      <p>✔ An Enterprise rental vehicle will be coordinated at customers expense.</p>
                    </div>
                  )}
                </>
              )}

                <div className="w-full mb-12 mt-8">
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