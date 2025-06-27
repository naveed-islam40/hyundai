import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ExperienceAlternative2() {
  return (
    <div className="bg-[url('img/login.png')] bg-cover bg-center h-[80%] flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black/60 z-0 h-[100%] " />
      {/* Information Box  */}
      <div className="bg-black absolute left-0 text-white flex justify-center flex-col items-center py-5 px-3 gap-6 w-[300px]">
        <img src="img/white-info-icon 1.svg" alt="" className="h-10 w-10" />
        <h1 className="italic">IMPORTANT INFORMATION</h1>
        <div>
          <div className="flex items-start gap-2">
            <img src="img/Ellipse 93.svg" alt="Dot" className="h-3 w-3 mt-2" />
            <p className="font-semibold">
              e.g. Ready to Schedule/Coordinate Repairs
            </p>
          </div>
          <div className="flex items-start gap-2">
            <img src="img/Ellipse 93.svg" alt="Dot" className="h-3 w-3 mt-2" />
            <p className="font-semibold">
              e.g. Customer ready to schedule repairs
            </p>
          </div>
        </div>
      </div>
      {/* Page Content  */}
      <div className="w-full max-w-3xl p-6 text-white text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Your Experience</h1>
          <p className="text-lg">Please Select Your Direction for Screening</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <Button className="bg-[#E51C22] hover:bg-[#E51C22] hover:text-white text-white px-6 py-2 h-auto w-full mb-4 uppercase flex flex-col text-base font-bold">
              <span className="text-xs capitalize">for</span>
              In-Person Scheduling
            </Button>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <img
                  src="img/white-info-icon 1.svg"
                  alt="Dot"
                  className="h-5 w-5"
                />
                <Link to={""} className="underline">
                  What Happens When Your Pick This?
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start">
            <Button
              variant="outline"
              className="bg-white text-[#E51C22] hover:bg-white hover:text-[#E51C22] px-6 py-2 h-auto w-full mb-4 uppercase flex flex-col text-base font-bold"
            >
              <span className="capitalize text-xs">for</span>
              Customer Drop-Off
            </Button>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <img
                  src="img/white-info-icon 1.svg"
                  alt="Dot"
                  className="h-5 w-5"
                />
                <Link to={""} className="underline">
                  What Happens When Your Pick This?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
