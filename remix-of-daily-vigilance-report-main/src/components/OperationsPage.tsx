import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OperationsPage() {

  const navigate = useNavigate();

  const [openEmployee, setOpenEmployee] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(true);

  const modules = [
    "Basis",
    "Vigilance Form",
    "Finance & control",
    "R-APDRP",
    "IPDS",
    "SCADA",
    "Meter Data Acquisition",
    "Geographical Information System",
    "SAP Development Module",
    "ISU-CCS Billing",
    "Spot Billing",
    "New Service Connection",
    "E-Payment",
    "E-Service Cell (Website, Mobile Apps, DMS, CCC)",
    "HR Payroll",
    "Material Management",
    "E-Bidding",
    "Enterprise Management System",
    "Plant Maintenance",
    "Information Security Cell",
    "IT-Network",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">

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

        {/* Page Content */}
        <div className="p-6 flex-1">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            
            <span className="text-gray-400">
              Operations
            </span>
            

            <span className="text-gray-400">
              ›
            </span>

            <span className="text-gray-700 font-medium">
              EITC Office
            </span>

          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Telephone directory of Executive director
          </h2>

          {/* Top Cards */}
          <div className="space-y-4 mb-8">

            <div className="bg-white rounded-2xl shadow-md border px-5 py-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>

                <span className="text-sm text-gray-700">
                  The Executive director
                </span>

              </div>

              <button
                onClick={() => navigate("/executive-director")}
                className="text-blue-700 text-sm font-medium"
              >
                See directory
              </button>

            </div>

            <div className="bg-white rounded-2xl shadow-md border px-5 py-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>

                <span className="text-sm text-gray-700">
                  EE(IT)/AE(IT)/JE(IT) posted at circle offices
                </span>

              </div>

              <button className="text-blue-700 text-sm font-medium">
                View more
              </button>

            </div>

          </div>

          {/* Section Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-5">
            Module wise list of Officers
          </h3>

          {/* Modules */}
          <div className="space-y-4">

            {modules.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border px-5 py-4 flex items-center justify-between hover:shadow-lg transition"
              >

                <div className="flex items-center gap-3">

                  <div className="w-4 h-4 border border-gray-400 rounded-full"></div>

                  <span className="text-sm text-gray-700">
                    {item}
                  </span>

                </div>

                <button
                  onClick={() => { 

                    if (item === "Basis") { 
                      navigate("/basis"); 
                    }

                    if (item === "Vigilance Form") {
                      navigate("/form");
                    }

                  }}
                  className="text-blue-700 text-sm font-medium"
                >
                  View more
                </button> 

              </div>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-gray-500 text-sm py-4 border-t bg-white">
          Designed & Developed by EITC
        </div> 
        </div>
    </div>
  );
}