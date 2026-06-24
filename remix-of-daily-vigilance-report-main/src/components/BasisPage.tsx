import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BasisPage() {

  const navigate = useNavigate();

  const [openEmployee, setOpenEmployee] = useState(false);

  const [openSidebar, setOpenSidebar] = useState(true);

  const officers = [
    {
      name: "Gulab Kumar Gangwani",
      designation: "Additional Chief Engineer",
      office: "NA",
      home: "NA",
      mobile: "9827406850",
      cug: "NA",
      voip: "NA",
    },

    {
      name: "Ajay Soni",
      designation: "E.E (D.R.C)",
      office: "07752-427004",
      home: "NA",
      mobile: "9907973676",
      cug: "NA",
      voip: "720",
    },

    {
      name: "Mahendra Kumar Kurrey",
      designation: "Manager (IT)",
      office: "0771-2576629",
      home: "NA",
      mobile: "9993239617",
      cug: "9171876406",
      voip: "NA",
    },

    {
      name: "Nizamuddin",
      designation: "Executive Engineer",
      office: "0771-2576629",
      home: "NA",
      mobile: "9893004437",
      cug: "9171876606",
      voip: "194",
    },

    {
      name: "Naresh Singh Dhurvey",
      designation: "Assistant Engineer",
      office: "0771-2574132",
      home: "NA",
      mobile: "9926684686",
      cug: "9171876596",
      voip: "194",
    },

    {
      name: "Akshay Hinduja",
      designation: "Programmer",
      office: "0771-2574132",
      home: "NA",
      mobile: "9993433455",
      cug: "NA",
      voip: "NA",
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#eef1f7]">

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

            <span className="cursor-pointer hover:text-blur-900">
              define it the code.
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

        {/* Top Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">

          <div className="flex items-center gap-4">

            <h1 className="text-3xl font-semibold text-gray-700">
              UrjaiNet
            </h1>

            <p className="text-sm text-gray-500">
              Intranet Portal of Chhattisgarh State Power Companies
            </p>

          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">

            <span>Public Document</span>
            <span>Temporary Document</span>
            <span>Daily Trash</span>

            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
              V
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-3xl font-semibold mb-6">

            <span className="text-gray-400">
              Operations
            </span>

            <span className="text-gray-400">
              ›
            </span>

            <span className="text-gray-500">
              EITC Office
            </span>

            <span className="text-gray-400">
              ›
            </span>

            <span className="text-black">
              Basis
            </span>

          </div>

          {/* Table */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-300">

            {/* Header */}
            <div className="grid grid-cols-7 bg-[#d8dff2] text-gray-700 text-sm font-semibold">

              <div className="p-4">Name of officer</div>
              <div className="p-4">Designation</div>
              <div className="p-4">Office landline</div>
              <div className="p-4">Home landline</div>
              <div className="p-4">Mobile No.</div>
              <div className="p-4">CUG Mobile No.</div>
              <div className="p-4">VoIP No.</div>

            </div>

            {/* Rows */}
            {officers.map((officer, index) => (

              <div
                key={index}
                className="grid grid-cols-7 border-t border-gray-200 text-sm text-gray-700"
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

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm mt-10">
            Designed & Developed by EITC
          </div>

        </div>
      </div>
    </div>
  );
}