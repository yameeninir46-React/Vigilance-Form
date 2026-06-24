import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExecutiveDirectorPage()  {

  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(true);

const [openEmployee, setOpenEmployee] = useState(false);

  const officers = [
    {
      name: "SMT. SHARDA RANI",
      designation: "Additional Chief Engineer",
      office: "0771-2574625",
      home: "NA",
      mobile: "9826310874",
      cug: "9171876747",
      voip: "198",
    },

    {
      name: "ALSHWARYA SONI",
      designation: "A.G.M.",
      office: "0771-2574137",
      home: "NA",
      mobile: "9893694479",
      cug: "9171876489",
      voip: "720",
    },

    {
      name: "GULAB KUMAR GANGWANI",
      designation: "Additional Chief Engineer",
      office: "0771-2576629",
      home: "NA",
      mobile: "9827406850",
      cug: "NA",
      voip: "NA",
    },

    {
      name: "VIKAS SHARMA",
      designation: "ADDL. C.E.",
      office: "0771-2574130",
      home: "NA",
      mobile: "9425510090",
      cug: "9171876606",
      voip: "500",
    }, 

    {
      name: "AMIT KUMAR GULHARE",
      designation: "D.G.M (IT)",
      office: "0771-2576652",
      home: "NA",
      mobile: "9713886371",
      cug: "9171876493",
      voip: "199",
    },
  ];

  const publicInfo = [
    {
      name: "SMT. SHARDA RANI SINGH",
      designation: "Public Information Officer",
      landline: "0771-2574625",
      mobile: "9171876747",
      voip: "NA",
    },

    {
      name: "ALOK KUJUR",
      designation: "Assistant Public Information Officer",
      landline: "0771-2576637",
      mobile: "9907973676",
      voip: "720",
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#eef1f7]">

        {/* Sidebar Menu */}
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
        <div className="bg-white h-16 flex items-center justify-between px-6 border-b">

          <div className="flex items-center gap-4">

            <h1 className="text-2xl font-semibold text-gray-700">
              Urjainet
            </h1>

            <p className="text-xs text-gray-500">
              Intranet Portal Of Chhattisgarh State Power Companies
            </p>

            </div>

          <div className="flex items-center gap-6 text-xs text-gray-500">

            <span>Public Document</span>
            <span>Temporary Document</span>
            <span>Daily Trash</span>

            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shadow text-sm font-semibold">
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

            <span>›</span>

            <span className="text-gray-700 font-semibold">
              EITC Office
            </span>

          </div>

          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Telephone directory of EITC
          </h2>

          {/* Office Details */}
          <div className="bg-[#d8dff2] rounded-lg p-6 mb-6">

            <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm">

              <div className="flex gap-4">
                <span className="font-semibold">Office:</span>
                <span>The Executive Director (EITC), Raipur</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">Address:</span>
                <span>Dangania</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">City:</span>
                <span>Raipur</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">Pincode:</span>
                <span>492013</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">Telephone:</span>
                <span>0771-2574123</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">Fax:</span>
                <span>0771-2574125</span>
              </div>

              <div className="flex gap-4">
                <span className="font-semibold">Email:</span>
                <span>eitc@cspc.co.in</span>
              </div>

            </div>
          </div>

          {/* Officers Table */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300 mb-8">

            {/* Table Header */}
            <div className="grid grid-cols-7 bg-[#cfd8f3] text-xs font-semibold text-gray-700">

              <div className="p-4">Name of officer</div>
              <div className="p-4">Designation</div>
              <div className="p-4">Office landline</div>
              <div className="p-4">Home landline</div>
              <div className="p-4">Mobile No.</div>
              <div className="p-4">CUG Mobile No.</div>
              <div className="p-4">VoIP No.</div>

            </div>

            {/* Table Rows */}
            {officers.map((officer, index) => (

              <div
                key={index}
                className="grid grid-cols-7 border-t border-gray-200 text-xs text-gray-700"
              >

                <div className="p-4">{officer.name}</div>
                <div className="p-4">{officer.designation}</div>
                <div className="p-4">{officer.office}</div>
                <div className="p-4">{officer.home}</div>
                <div className="p-4">{officer.mobile}</div>
                <div className="p-4">{officer.cug}</div>
                <div className="p-4">{officer.voip}</div>

              </div>
            ))}

          </div>

          {/* Public Information */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            Public Information Officer
          </h3>

          <div className="bg-white rounded-lg overflow-hidden border border-gray-300">

            {/* Header */}
            <div className="grid grid-cols-5 bg-[#cfd8f3] text-xs font-semibold text-gray-700">

              <div className="p-4">Name of officer</div>
              <div className="p-4">Designation</div>
              <div className="p-4">Landline no.</div>
              <div className="p-4">Mobile No.</div>
              <div className="p-4">VoIP No.</div>

            </div>

            {/* Rows */}
            {publicInfo.map((item, index) => (

              <div
                key={index}
                className="grid grid-cols-5 border-t border-gray-200 text-xs text-gray-700"
              >

                <div className="p-4">{item.name}</div>
                <div className="p-4">{item.designation}</div>
                <div className="p-4">{item.landline}</div>
                <div className="p-4">{item.mobile}</div>
                <div className="p-4">{item.voip}</div>

              </div>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="h-14 bg-white border-t flex items-center justify-center text-sm text-gray-500">
          Designed & Developed by EITC
        </div>
        </div>
    </div>
  );
}