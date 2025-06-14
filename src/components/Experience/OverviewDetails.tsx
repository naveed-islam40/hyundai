import OverviewDetailsForm from "@/components/Forms/OverviewDetailsForm";
import RightSidebar from "@/components/Rightbar";
import { useLocation } from "react-router-dom";
import SchedulingForm from "../Forms/SchedulingForm";
import InformationReview from "../Forms/InformationReview";
import ConfirmationPage from "../Forms/Confirmation";
import PaintServicesMatrixForm from "../Forms/PaintServicesMatrixForm";
import { useEffect, useState } from "react";
import DealerForm from "../Forms/DealerForm";
import RepairEstimate from "../RepairEstimate";
import InformationReviewMobile from "../Forms/InformationReviewMobile";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import { calculateTotal } from "@/helper/calculateTotal";

export default function OverviewDetails() {
  const [cutomerInfo, setCustomerInfo] = useState<any>({});
  const [dealerInfo, setDealerInfo] = useState<any>({});
  const [selectedPanels, setSelectedPanels] = useState<Record<string, string>>(
    {}
  );
  const [scheduleDate, setScheduleDate] = useState<any>({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { year, model, getDealerInfo } = usePaintServiceContext();

  const dealerInf = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );
  const { matchingEntry } = getBodyPanelOptions(
    year,
    model,
    dealerInf?.dealerInfo?.CBSA
  );
  const panelDetails: any = matchingEntry ? matchingEntry[1] : {};

  const page = queryParams.get("page");
  const skip = queryParams.get("skip");

  useEffect(() => {
    if (Object.keys(selectedPanels).length !== 0) {
      const total = calculateTotal(selectedPanels, panelDetails);
      localStorage.setItem("totalCost", total.toFixed(2));
    }
  }, [selectedPanels]);

  // const calculateTotal = () => {
  //   let total = 0;

  //   Object.entries(selectedPanels || {}).forEach(
  //     ([panel, selectedServices]) => {
  //       if (Array.isArray(selectedServices)) {
  //         const panelSum = selectedServices.reduce(
  //           (sum: number, svc: string) => {
  //             const cost =
  //               panelDetails[panel]?.services?.find(
  //                 (s: any) => s.name.toLowerCase() === svc.toLowerCase()
  //               )?.cost ?? 0;
  //             return sum + cost;
  //           },
  //           0
  //         );

  //         total += panelSum;
  //       }
  //     }
  //   );

  //   return total;
  // };

  const renderForm = () => {
    switch (page) {
      case "1":
        return (
          <OverviewDetailsForm
            setCustomerInfo={setCustomerInfo}
            customerInfo={cutomerInfo}
          />
        );
      case "2":
        return (
          <DealerForm
            setCustomerInfo={setDealerInfo}
            customerInfo={dealerInfo}
          />
        );

      case "3":
        return (
          <PaintServicesMatrixForm
            setSelectedPanels={setSelectedPanels}
            selectedPanels={selectedPanels}
            name={`${cutomerInfo.firstName || "SMITH_JANE"} ${
              cutomerInfo.lastName || ""
            }`}
          />
        );

      case "4":
        return skip === "schedule" ? (
          <div>
            <div className="hidden sm:block">
              <InformationReview
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
                selectedPanels={selectedPanels}
                dealerInfo={dealerInfo}
              />
            </div>
            <div className="block sm:hidden">
              <InformationReviewMobile
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
                dealerInfo={dealerInfo}
              />
            </div>
          </div>
        ) : (
          <SchedulingForm
            setScheduleDate={setScheduleDate}
            scheduleDate={scheduleDate}
            name={`${cutomerInfo.firstName || "SMITH_JANE"} ${
              cutomerInfo.lastName || ""
            }`}
          />
        );

      case "5":
        return (
          <div>
            <div className="hidden sm:block">
              <InformationReview
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
                selectedPanels={selectedPanels}
                dealerInfo={dealerInfo}
              />
            </div>
            <div className="block sm:hidden">
              <InformationReviewMobile
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
                selectedPanels={selectedPanels}
                dealerInfo={dealerInfo}
              />
            </div>
          </div>
        );
      case "6":
        return <ConfirmationPage />;
    }
  };

  return (
    <div className="flex min-h-screen items-stretch bg-gray-100 sm:px-6 md:w-[100%] 2xl:w-[80%] mx-auto max-base-sm:flex-col">
      <div className="block base-sm:hidden">
        <RepairEstimate
          selectedPanels={selectedPanels}
          setSelectedPanels={setSelectedPanels}
        />
      </div>
      <div className="flex-1 sm:p-4 py-10">{renderForm()}</div>
      <div className="w-80 p-6 h-full text-white hidden base-sm:block">
        <RightSidebar
          selectedPanels={selectedPanels}
          setSelectedPanels={setSelectedPanels}
        />
      </div>
    </div>
  );
}
