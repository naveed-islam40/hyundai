import OverviewDetailsForm from "@/components/Experience/Forms/OverviewDetailsForm";
import RightSidebar from "@/components/Rightbar";
import { useLocation } from "react-router-dom";
import SchedulingForm from "./Forms/SchedulingForm";
import InformationReview from "./Forms/InformationReview";
import ConfirmationPage from "./Forms/Confirmation";
import PaintServicesMatrixForm from "./Forms/PaintServicesMatrixForm";
import { useEffect, useState } from "react";
import DealerForm from "./Forms/DealerForm";
import { panelDetails } from "@/static/PanelPrices";
import RepairEstimate from "../RepairEstimate";
import InformationReviewMobile from "./Forms/InformationReviewMobile";

export default function OverviewDetails() {
  const [cutomerInfo, setCustomerInfo] = useState<any>({});
  const [selectedPanels, setSelectedPanels] = useState<Record<string, string>>(
    {}
  );
  const [PaintServiceInfo, setPaintServiceInfo] = useState<any>({});
  const [scheduleDate, setScheduleDate] = useState<any>({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get("page");
  const path = queryParams.get("form");

  useEffect(() => {
    if (Object.keys(selectedPanels).length !== 0) {
      localStorage.setItem("totalCost", calculateTotal().toString());
    }
  }, [selectedPanels]);

  const calculateTotal = () => {
    let total = 0;
    selectedPanels != null &&
      Object.entries(selectedPanels).forEach(([panel, isSelected]) => {
        if (isSelected && panelDetails[panel]) {
          total += panelDetails[panel].cost;
        }
      });
    return total;
  };

  const renderForm = () => {
    switch (page) {
      case "1":
        return path === "dealer" ? (
          <DealerForm
            setCustomerInfo={setCustomerInfo}
            customerInfo={cutomerInfo}
          />
        ) : (
          <OverviewDetailsForm
            setCustomerInfo={setCustomerInfo}
            customerInfo={cutomerInfo}
          />
        );
      case "2":
        return (
          <PaintServicesMatrixForm
            setSelectedPanels={setSelectedPanels}
            selectedPanels={selectedPanels}
            name={`${cutomerInfo.firstName || "SMITH_JANE"} ${
              cutomerInfo.lastName || ""
            }`}
            setPaintServiceInfo={setPaintServiceInfo}
            paintServiceInfo={PaintServiceInfo}
          />
        );
      case "3":
        return (
          <SchedulingForm
            setScheduleDate={setScheduleDate}
            scheduleDate={scheduleDate}
            name={`${cutomerInfo.firstName || "SMITH_JANE"} ${
              cutomerInfo.lastName || ""
            }`}
          />
        );
      case "4":
        return (
          <div>
            <div className="hidden sm:block">
              <InformationReview
                PaintServiceInfo={PaintServiceInfo}
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
              />
            </div>
            <div className="block sm:hidden">
              <InformationReviewMobile
                PaintServiceInfo={PaintServiceInfo}
                customerInfo={cutomerInfo}
                scheduleDate={scheduleDate}
              />
            </div>
          </div>
        );
      case "5":
        return <ConfirmationPage />;
    }
  };

  return (
    <div className="flex min-h-screen items-stretch bg-gray-100 sm:px-6 md:w-[100%] 2xl:w-[80%] mx-auto max-base-sm:flex-col">
      <div className="block base-sm:hidden">
        <RepairEstimate selectedPanels={selectedPanels} />
      </div>
      <div className="flex-1 sm:p-4 py-10">{renderForm()}</div>
      <div className="w-80 p-6 h-full text-white hidden base-sm:block">
        <RightSidebar selectedPanels={selectedPanels} />
      </div>
    </div>
  );
}
