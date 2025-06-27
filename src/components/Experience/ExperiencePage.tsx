import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import Loader from "../Loader";

export default function Experience1() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path, { replace: true });
  };
  return (
    <div className="bg-[url('img/login.png')] bg-cover bg-center h-[80%] flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black/60 z-0 h-[100%]" />
      <div className="w-full max-w-3xl p-6 text-white text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Your Experience</h1>
          <p className="text-lg">Please Select Your Direction for Screening</p>
        </div>
        {/* <Loader isVisible={true} /> */}

        <div className="flex flex-col md:flex-row justify-between gap-20">
          {/* In-Person Scheduling Option */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <Button
              className="bg-[#E51C22] hover:bg-[#E51C22] cursor-pointer hover:text-white text-white px-6 py-2 h-auto w-full mb-4 uppercase flex flex-col text-base font-bold"
              onClick={() =>
                handleNavigate("/customer-details?page=1&form=dealer")
              }
            >
              <span className="text-xs capitalize">for</span>
              In-Person Scheduling
            </Button>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <img
                  src="img/Ellipse 93.svg"
                  alt="Dot"
                  className="h-3 w-3 mt-2"
                />
                <span>e.g. Ready to Schedule/Coordinate Repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="img/Ellipse 93.svg"
                  alt="Dot"
                  className="h-3 w-3 mt-2"
                />
                <span>e.g. Customer ready to schedule repairs</span>
              </li>
            </ul>
          </div>

          {/* Customer Drop-Off Option */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <Button
              variant="outline"
              className="bg-white text-[#E51C22] hover:bg-white cursor-pointer hover:text-[#E51C22] px-6 py-2 h-auto w-full mb-4 uppercase flex flex-col text-base font-bold"
              onClick={() => handleNavigate("/customer-details?page=1")}
            >
              <span className="capitalize text-xs">for</span>
              Customer Drop-Off
            </Button>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <img
                  src="img/Ellipse 93.svg"
                  alt="Dot"
                  className="h-3 w-3 mt-2"
                />
                <span>
                  e.g. Refer customer to Crash Champions for repairs NOT ready
                  to schedule at this time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="img/Ellipse 93.svg"
                  alt="Dot"
                  className="h-3 w-3 mt-2"
                />
                <span>
                  e.g. If PO has been created and warranty work is approved
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
