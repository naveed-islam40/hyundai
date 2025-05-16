import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between px-10 bg-[#FFFFFF] py-5 text-center border-t border-gray-200 font-sans relative z-10">
      <div className="text-gray-500 text-sm mb-2 font-semibold">
        © 2025 Chain Champions. All rights reserved.
      </div>
      <div className="text-sm flex gap-2 items-center">
        <div>
          <Link to={"#"} className="text-[#6B717B] px-1">
            DMC Policy
          </Link>{" "}
          <span>|</span>
        </div>
        <div>
          <Link to="#" className="text-[#6B717B] px-1">
            Privacy
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
