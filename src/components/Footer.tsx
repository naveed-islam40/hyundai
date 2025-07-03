import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-sm:py-4 mx-auto flex justify-between items-center md:px-10 px-5  bg-[#FFFFFF] py-2 md:py-5 text-center border-t border-gray-200 font-sans relative z-10">
      <div className="text-gray-500 text-xs md:text-sm mb-2 font-semibold hidden sm:block">
        © 2025 Crash Champions
      </div>
      <div className="text-gray-500 text-xs md:text-sm font-semibold block sm:hidden">
        © 2025 Crash Champions
      </div>
      <div className="md:text-sm text-xs sm:flex gap-2 items-center hidden">
        <div>
          <Link to={"#"} className="text-[#6B717B] px-1">
            SMS Policy
          </Link>{" "}
          <span>|</span>
        </div>
        <div>
          <Link to="#" className="text-[#6B717B] px-1">
            Privacy Policy
          </Link>{" "}
          <span>|</span>
        </div>
        <Link to="#" className="text-[#6B717B]">
          Terms of Use
        </Link>
      </div>

      <div className="md:text-sm text-xs flex gap-2 items-center sm:hidden">
        <div>
          <Link to={"#"} className="text-[#6B717B] px-1">
            SMS Policy
          </Link>{" "}
          <span>|</span>
        </div>
        <div>
          <Link to="#" className="text-[#6B717B] px-1">
            Privacy Policy
          </Link>{" "}
          <span>|</span>
        </div>
        <Link to="#" className="text-[#6B717B]">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
