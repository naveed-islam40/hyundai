import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ExperienceAlternative() {
  const navigate = useNavigate();

  const handleNavigate = (path: string, key: string) => {
    if (key === "Paint Repairs") {
      toast.error("Paint Repairs Coming Soon!", {
        position: "top-center",
        hideProgressBar: false,
        theme: "colored",
        autoClose: 3000,
      });
      return;
    }

    localStorage.setItem("key", key);
    navigate(path, { replace: true });
  };

  return (
    <div className="experience md:w-full 2xl:w-[80%] mx-auto bg-[url('/img/login.png')] bg-cover bg-center h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black/60 z-0 h-[100%]" />
      <div className="w-full p-80 text-white text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">
            Discover Your Hyundai Experience
          </h1>
          {/*<p className="text-lg">Please Select Your Direction for Screening</p>*/}
        </div>

        {/* Experience start */}
        <div className="flex flex-col md:flex-row justify-between gap-40">
          {" "}
          {/* remove hidden when launching site*/}
          {/* In-Person Scheduling */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <button
              className="bg-[#E51C22] hover:bg-[#E51C22] hover:text-white text-white py-2 h-auto w-full md:w-[100%] mb-4 uppercase flex flex-col text-2xl font-bold cursor-pointer rounded-xs"
              onClick={() =>
                handleNavigate(
                  "/customer-details?page=1",
                  "In-Person Scheduling"
                )
              }
            >
              <span className="text capitalize">for</span>
              SCHEDULE IN PERSON
            </button>
            {/* ...ul content omitted for brevity */}
            <ul className=" space-y-2 w-full left">
              {/*<li className="flex items-start max-md:justify-center gap-2">
                <img
                  src="img/white-info-icon 1.svg"
                  alt="Dot"
                  className="h-5 w-5"
                />
                <Link to={""} className="underline">
                  What Happens When Your Pick This?
                </Link>
              </li>*/}
              <li className="flex items-start gap-2 text-left">
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
          {/* Customer Drop-Off */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <button
              className="bg-white text-[#E51C22] py-2 h-auto w-full mb-4 uppercase flex flex-col text-2xl font-bold cursor-pointer rounded-xs"
              onClick={() =>
                handleNavigate(
                  "/customer-details?page=1&skip=schedule",
                  " Customer Drop-Off"
                )
              }
            >
              <span className="capitalize text">for</span>
              REFER CUSTOMER DROP-OFF
            </button>
            {/* ...ul content omitted for brevity */}
            <ul className="space-y-2 w-full text-left">
              {/*<li className="flex items-start max-md:justify-center gap-2">
                <img
                  src="img/white-info-icon 1.svg"
                  alt="Dot"
                  className="h-5 w-5"
                />
                <Link to={""} className="underline">
                  What Happens When Your Pick This?
                </Link>
              </li>*/}
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
          {/* Paint Repairs */}
        </div>
        {/* Experience end */}
      </div>
    </div>
  );
}
