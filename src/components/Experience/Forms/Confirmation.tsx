import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const handleNavigation = () => {
    window.location.href = "/cutomer-details?page=1";
    localStorage.removeItem("totalCost");
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = localStorage.getItem("totalCost");
    setTotal(Number(total));
  }, []);

  return (
    <div className=" bg-white shadow-lg border flex items-center justify-center p-4 rounded-md">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-lg font-bold">CONFIRMATION</h1>
          <p className="text-xs text-white italic">
            *All fields required to process request
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex justify-end mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm flex items-center gap-1 text-gray-500"
            >
              Print Copy
              <img src="/img/printer 1.svg" className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-10 text-center">
            <h1 className="text-2xl font-bold">
              Thank you! Your Confirmation has emailed.
            </h1>

            <div className="space-y-1">
              <p className="text-sm font-bold">Reference:</p>
              <p className="font-bold text-2xl">Smith, Jane</p>
              <p className="font-bold text-2xl">2022 Hyundai Sonata, 2-DR</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-2xl">Repair Total: ${total}</p>
              <p className="text-[#E51C22] font-bold text-2xl">
                Reference No. 205923403402
              </p>
            </div>

            <div>
              <Button
                className="bg-[#E51C22] cursor-pointer hover:bg-[#E51C22] text-white px-6 py-2 rounded text-sm uppercase"
                onClick={handleNavigation}
              >
                Start New Warranty
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
