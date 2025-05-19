import { Link, useNavigate } from "react-router-dom";

export default function ExperienceAlternative() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path, { replace: true });
  };
  return (
    <div className="md:w-full 2xl:w-[80%] mx-auto bg-[url('/img/login.png')] bg-cover bg-center h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black/60 z-0 h-[100%]" />
      <div className="w-full max-w-3xl p-6 text-white text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Your Experience</h1>
          <p className="text-lg">Please Select Your Direction for Screening</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <button
              className="bg-[#E51C22] hover:bg-[#E51C22] hover:text-white text-white py-2 h-auto w-full md:w-[345px] mb-4 uppercase flex flex-col text-base font-bold cursor-pointer rounded-xs"
              onClick={() => handleNavigate("/cutomer-details?page=1")}
            >
              <span className="text-xs capitalize">for</span>
              In-Person Scheduling
            </button>
            <ul className=" space-y-2 w-full">
              <li className="flex items-start max-md:justify-center gap-2">
                <img
                  src="/img/white-info-icon 1.svg"
                  alt="Dot"
                  className="h-5 w-5"
                />
                <Link to={""} className="underline">
                  What Happens When Your Pick This?
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-start">
            <button
              // variant="outline"
              className="bg-white text-[#E51C22] py-2 h-auto w-full mb-4 uppercase flex flex-col text-base font-bold cursor-pointer rounded-xs"
              onClick={() =>
                handleNavigate("/cutomer-details?page=1&skip=schedule")
              }
            >
              <span className="capitalize text-xs">for</span>
              Customer Drop-Off
            </button>
            <ul className="space-y-2 w-full">
              <li className="flex items-start max-md:justify-center gap-2">
                <img
                  src="/img/white-info-icon 1.svg"
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
