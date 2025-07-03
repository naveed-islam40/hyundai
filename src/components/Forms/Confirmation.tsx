import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const handleNavigation = () => {
    window.location.href = "/";
    {
      /*customer-details?page=1*/
    }
    localStorage.removeItem("totalCost");
  };

  const [total, setTotal] = useState(0);

  // auto-generated
  const storedRef = localStorage.getItem("referenceNumber");

  useEffect(() => {
    const total = localStorage.getItem("totalCost");
    setTotal(Number(total));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            CONFIRMATION
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *Please Note: You have completed your request
          </p>
        </div>

        <div className="p-6">
          {/* Thank you confirmation */}

          <div className="space-y-10 text-center">
            <h1 className="text-2xl font-bold">
              Thank you!
              <br className="block base-sm:hidden" />
              &nbsp;&nbsp;Your Confirmation has emailed.
            </h1>

            <div className="space-y-2">
              <p className="font-bold text-2xl">Repair Total: ${total}</p>
              <p className="text-[#E51C22] font-bold text-2xl">
                Reference No. {storedRef}{" "}
                {/* add auto-generated reference number*/}
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                className="bg-[#E51C22] hidden sm:block cursor-pointer hover:bg-[#E51C22] text-white px-6 py-2 rounded text-sm uppercase"
                onClick={handleNavigation}
              >
                START NEW HYUNDAI CLAIM
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-[#E51C22] block sm:hidden cursor-pointer hover:bg-[#E51C22] text-white px-6 py-2 rounded text-sm uppercase"
                onClick={handleNavigation}
              >
                START NEW HYUNDAI CLAIM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
