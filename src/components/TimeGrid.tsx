import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TimePickerGrid = () => {
  const [time, setTime] = useState<Date | null>(null);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Time: (Select preferred time)
      </label>

      <DatePicker
        selected={time}
        onChange={(time) => setTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        inline
        renderCustomHeader={({ date }) => {
          const changeHour = (hour: number) => {
            const newDate = new Date(date);
            newDate.setHours(hour);
            setTime(newDate);
          };

          const changeMinute = (minute: number) => {
            const newDate = new Date(date);
            newDate.setMinutes(minute);
            setTime(newDate);
          };

          return (
            <div className="flex space-x-4 p-2 bg-gray-50 rounded">
              {/* Hours Column */}
              <div className="flex flex-col">
                <div className="text-xs text-gray-500 mb-1 text-center">
                  Hour
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hour) => (
                    <button
                      key={`hour-${hour}`}
                      className={`w-10 h-8 rounded text-sm ${
                        date.getHours() % 12 === hour % 12
                          ? "bg-blue-500 text-white"
                          : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        changeHour(hour + (date.getHours() >= 12 ? 12 : 0) - 1)
                      }
                    >
                      {hour.toString().padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minutes Column */}
              <div className="flex flex-col">
                <div className="text-xs text-gray-500 mb-1 text-center">
                  Minute
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {[0, 15, 30, 45].map((minute) => (
                    <button
                      key={`minute-${minute}`}
                      className={`w-10 h-8 rounded text-sm ${
                        date.getMinutes() === minute
                          ? "bg-blue-500 text-white"
                          : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() => changeMinute(minute)}
                    >
                      {minute.toString().padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>

              {/* AM/PM Column */}
              <div className="flex flex-col">
                <div className="text-xs text-gray-500 mb-1 text-center">
                  AM/PM
                </div>
                <div className="space-y-1">
                  <button
                    className={`w-10 h-8 rounded text-sm ${
                      date.getHours() < 12
                        ? "bg-blue-500 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => changeHour(date.getHours() % 12)}
                  >
                    AM
                  </button>
                  <button
                    className={`w-10 h-8 rounded text-sm ${
                      date.getHours() >= 12
                        ? "bg-blue-500 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => changeHour((date.getHours() % 12) + 12)}
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
