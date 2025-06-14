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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isCredentialsValid = users.some(
      (user) =>
        user.dealerCode === dealerCode.trim() && user.zipCode === zipCode.trim()
    );

    saveDealderInfo(dealerCode, zipCode);

    if (isCredentialsValid) {
      navigate("/experience");
    } else {
      toast.error("Sorry. The Location You Selected is Not In Your Service Area.");
    }
  };

  return (
    <div className="md:w-full 2xl:w-[80%] mx-auto min-h-screen flex items-center bg-[url('/img/login.png')] bg-cover bg-center px-4 md:px-20">
      <div className="w-full max-w-4xl p-6 md:px-10 bg-black/50 text-white rounded-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome.</h1>
          <h2 className="text-2xl mb-2 font-bold">
            Please Login To Your Account.
          </h2>
          <p className="text-sm text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </div>
    </div>
  );
}
