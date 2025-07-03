import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import users from "../../users.json";
import { toast } from "sonner";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";

export default function LoginForm() {
  const [dealerCode, setDealerCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();
  const { saveDealderInfo } = usePaintServiceContext();

  // VIN update
  const [customerVIN, setCustomerVIN] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const dealerCredsFilled = dealerCode.trim() && zipCode.trim();
  const vinFilled = customerVIN.trim();

  // Prevent both fields from being used at once
  if (dealerCredsFilled && vinFilled) {
    toast.error("Please fill either Dealer Code & Zip OR VIN — not both.");
    return;
  }

  // Require at least one method of login
  if (!dealerCredsFilled && !vinFilled) {
    toast.error("Please provide either Dealer Code & Zip OR VIN.");
    return;
  }

  // Dealer Code + Zip login
  if (dealerCredsFilled) {
    const isCredentialsValid = users.some(
      (user) =>
        user.dealerCode.toLowerCase() === dealerCode.trim().toLowerCase() &&
        user.zipCode === zipCode.trim()
    );

    if (isCredentialsValid) {
      saveDealderInfo(dealerCode.trim().toUpperCase(), zipCode.trim());
      navigate("/experience");
    } else {
      toast.error("Sorry. The Location You Selected is Not In Your Service Area.");
    }
    return;
  }

  // VIN login
if (vinFilled) {
  const enteredVIN = customerVIN.trim();

  const isValidVINFormat = /^[A-HJ-NPR-Z0-9]{17}$/i.test(enteredVIN);
  if (!isValidVINFormat) {
    toast.error("VIN incorrect. Please enter a valid VIN.");
    return;
  }

  const validVIN = "53776763901300130"; // Replace with real VIN lookup logic later

  if (enteredVIN.toLowerCase() === validVIN.toLowerCase()) {
    localStorage.setItem("vinSearch", enteredVIN);
    navigate("/VINFetch");
  } else {
    toast.error("VIN is incorrect. Please verify and try again.");
  }
}
};

  return (
    <div className="md:w-full 2xl:w-[80%] mx-auto min-h-screen flex items-center bg-[url('img/login.png')] bg-cover bg-center px-4 md:px-20">
      <div className="w-full max-w-4xl p-6 md:px-10 bg-black/50 text-white rounded-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome.</h1>
          <h2 className="text-2xl mb-2 font-bold">
            Please Login To Your Account.
          </h2>
          <p className="text-sm text-[#FFFFFF]">
            Login to your account to create a new NON-EXISTING ORDER.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row md:items-center gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full base-sm:w-auto">
              <Input
                type="text"
                placeholder="Dealer Code"
                value={dealerCode}
                maxLength={5}
                onChange={(e) => setDealerCode(e.target.value)}
                className="bg-white text-black h-10 w-full md:w-[250px] lg:w-[310px] rounded-sm border-0 focus-visible:ring-0 italic"
              />
            </div>
            <div className="w-full base-sm:w-auto">
              <Input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                maxLength={5}
                onChange={(e) => setZipCode(e.target.value)}
                className="bg-white text-black h-10 w-full md:w-[250px] lg:w-[310px] rounded-sm border-0 focus-visible:ring-0 italic"
              />
            </div>
          </div>
          <div className="w-full flex justify-center md:w-auto">
            <Button
              type="submit"
              className="bg-red-600 w-[128px] hover:bg-red-700 text-white h-10 md:w-[128px] rounded-sm cursor-pointer"
            >
              LOGIN
            </Button>
          </div>
        </form>

        <div className="mt-10 mb-6">
          <hr/>
        </div>

        <div className="mt-0 mb-6">
            <h1 className="text-2xl font-bold">Search by VIN</h1>
            <p className="text-sm text-[#FFFFFF]">Enter Customer's VIN on PRE-EXISTING ORDERS.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-4"
        >
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full base-sm:w-auto">
                <Input
                  type="text"
                  placeholder="Customer VIN"
                  value={customerVIN}
                  maxLength={17}
                  onChange={(e) => setCustomerVIN(e.target.value)}
                  className="bg-white text-black h-10 w-full md:w-[250px] lg:w-[310px] rounded-sm border-0 focus-visible:ring-0 italic"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center md:w-auto">
            <Button
              type="submit"
              className="bg-red-600 w-[128px] hover:bg-red-700 text-white h-10 md:w-[128px] rounded-sm cursor-pointer"
            >
              SEARCH QUERY
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}
