import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Shield, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useVigilanceForm } from "@/context/VigilanceFormContext";

const STEP_TITLES: Record<number, string> = {
  1: "Basic Information & Consumer Details",
  2: "Officer Details",
  3: "Site Inspection Report (SIR)",
  4: "Document Attachments",
  5: "BP Checked & Detected",
  6: "Offence / Irregularity Details",
  7: "Provisional Billing",
  8: "Final Billing",
  9: "Assessment of Loss",
  10: "Consumer Statement",
  11: "Payment & EMI Details",
  12: "Billing Timeline & Summary",
};

export const FormShell = ({ children }: { children: React.ReactNode }) => {
  const { currentStep, setCurrentStep, totalSteps } = useVigilanceForm();
  const progress = (currentStep / totalSteps) * 100;
  const navigate = useNavigate();

const [openSidebar, setOpenSidebar] = useState(true);
const [openEmployee, setOpenEmployee] = useState(false);

   return (
  <div className="flex min-h-screen bg-[#eef1f7]">

    {/* Sidebar */}
      <div
  className={`bg-blue-900 text-white min-h-screen transition-all duration-300 flex flex-col ${
    openSidebar
      ? "w-64 p-4"
      : "w-24 p-3 items-center"
  }`}
>

 {/* Header */}
<div
  className={`flex items-center mb-6 w-full ${
    openSidebar
      ? "justify-between"
      : "justify-center"
  }`}
>

  {openSidebar && (
    <h1 className="text-xl font-bold">
      Menu
    </h1>
  )}

  <button
    onClick={() => setOpenSidebar(!openSidebar)}
    className="flex items-center justify-center"
  >
    <img
      src={
        openSidebar
          ? "/arrow-square-left.svg"
          : "/arrow-square-right.svg"
      }
      alt="toggle"
      className="w-6 h-6 brightness-0 invert"
    />
  </button>

</div>

  {/* Menu Items */}
  <div className="flex flex-col gap-3 w-full">

    {[
      {
        name: "Employee",
        icon: "/employee-icon.svg",
      },
      {
        name: "Finance",
        icon: "/finance-icon.svg",
      },
      {
        name: "Operations",
        icon: "/operations-icon.svg",
      },
      {
        name: "IT & Systems",
        icon: "/it-icon.svg",
      },
      {
        name: "Documents",
        icon: "/documents-icon.svg",
      },
      {
        name: "CS Power Companies",
        icon: "/power-icon.svg",
      },
      {
        name: "Help & Support",
        icon: "/support-icon.svg",
      },
    ].map((item) => (

      <div
        key={item.name}
        onClick={() => {

          if (item.name === "Employee") {
            setOpenEmployee(!openEmployee);
          }

          if (item.name === "Operations") {
            navigate("/operations");
          }

        }}
        className={`rounded-xl cursor-pointer transition hover:bg-blue-800 ${
          item.name === "Operations"
            ? "bg-blue-800"
            : ""
        }`}
      >

        <div
          className={`flex items-center ${
            openSidebar
              ? "justify-between px-3 py-3"
              : "justify-center py-4"
          }`}
        >

          {/* Left */}
          <div
            className={`flex items-center ${
              openSidebar
                ? "gap-3"
                : "flex-col gap-2"
            }`}
          >

            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 brightness-0 invert"
            />

            <span
              className={`text-white text-center leading-tight ${
                openSidebar
                  ? "text-sm"
                  : "text-[11px]"
              }`}
            >
              {item.name}
            </span>

          </div>
          
                {/* Dropdown Arrow */}
{openSidebar && (
  <img
    src="/arrow-down.svg"
    alt="dropdown"
    className="w-4 h-4 brightness-0 invert"
  />
)}
        </div>

        {/* Employee Dropdown */}
        {item.name === "Employee" &&
          openEmployee &&
          openSidebar && (

          <div className="ml-3 mb-3 bg-white rounded-xl p-4 flex flex-col gap-3 text-blue-700 shadow-md">

            <span className="cursor-pointer hover:text-blue-900">
              Pay slip
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Biometric attendance
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Employee web login
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              My briefcase
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Gradation list
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Birthday list
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              New pension scheme
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              SAP HR Manuals
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Cashless medical scheme
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Medical orders
            </span>

          </div>
        
        )}

      </div>
      
    ))}

    

  </div>
  </div>
   {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between m-6 mb-0">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              UrjaiNet
            </h1>

            <p className="text-sm text-gray-500">
              Intranet Portal Of Chhattisgarh State Power Companies
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">

            <span>Public Document</span>
            <span>Temporary Document</span>
            <span>Daily Trash</span>

            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold shadow">
              V
            </div>

          </div>
        </div>

 <div className="w-full p-6">

 <div className="mb-6">
  <div className="flex items-center gap-3">
      <Shield className="h-8 w-8 text-primary" />

      <h1 className="text-2xl font-bold">
        Daily Vigilance Checking Report
      </h1>
    </div>

    <p className="text-sm text-muted-foreground mt-2">
      सत्यमेव जयते
    </p>

    
    
<div className="flex items-center justify-between mt-6">
  {Array.from({ length: totalSteps }, (_, i) => {
    const step = i + 1;

    return (
      <div key={step} className="flex items-center flex-1">
        
        {/* Circle */}
        <div
          className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px]
          ${
            step <= currentStep
              ? "bg-green-600 border-green-600 text-white"
              : "border-gray-400 text-gray-400"
          }`}
        >
          {step <= currentStep ? "✓" : ""}
        </div>

        {/* Line */}
        {step < totalSteps && (
          <div
            className={`flex-1 h-[2px] mx-2 ${
              step < currentStep
                ? "bg-green-600"
                : "bg-gray-300"
            }`}
          />
        )}
      </div>
    );
  })}
</div>

  {children}

  <div className="flex items-center justify-between pt-4 border-t mt-6">

  {currentStep !== 1 ? (
    <Button
      type="button"
      variant="outline"
      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back
    </Button>
  ) : (
    <div></div>
  )}

  {currentStep !== 12 ? (
    <Button
      type="button"
      onClick={() =>
        setCurrentStep(Math.min(totalSteps, currentStep + 1))
      }
    >
      Next
      <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  ) : (
    <div></div>
  )}

</div>

</div> 
</div> 
</div> 
</div> 
   )}; 