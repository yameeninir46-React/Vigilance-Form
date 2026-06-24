import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VigilanceFormDashboard() {

  const navigate = useNavigate();

  const [openEmployee, setOpenEmployee] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(true);

  const cards = [
    {
      title: "Employee web login",
      desc: "Access your employee account and modules",
      color: "bg-indigo-500",
      image: "/loginlogo.svg",
    },

    {
      title: "Tender upload",
      desc: "Upload and manage tender documents",
      color: "bg-red-400",
      image: "/document-upload.svg",
    },

    {
      title: "Management dashboard",
      desc: "View KPIs, permissions and reports",
      color: "bg-blue-500",
      image: "/managementlogo.svg",
    },

    {
      title: "CSPDCL softwares",
      desc: "Access all internal CSPDCL applications",
      color: "bg-orange-400",
      image: "/cspdclIcon.svg",
    },

    {
      title: "Online telephone directory",
      desc: "Find contact details of all officers",
      color: "bg-purple-400",
      image: "/call-callinglogo.svg",
    },

    {
      title: "Company calendars",
      desc: "View events, holidays and schedules",
      color: "bg-cyan-400",
      image: "/calendarlogo.svg",
    },
  ];

  const news = [
    {
      title: "Aadhaar Biometric Attendance Launched",
      image: "Frame 9.svg"

    },

    {
      title: "New Leave Policy Effective June 2026",
      image: "Frame 99.svg",
    },

    {
      title: "Office Timings Revised for Summer",
      image: "Frame 999.svg",
    },
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

{!openSidebar && (
  <button
    onClick={() => setOpenSidebar(true)}
    className="m-4"
  >
    <img
      src="/arrow-square-right.svg"
      alt="Open"
      className="w-6 h-6"
    />
  </button>
)}


       { /* Main Content */ }
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between mb-6">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              UrjaiNet
            </h1>

            <p className="text-sm text-gray-500">
              Intranet Portal of Chhattisgarh State Power Companies
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">

            <span>Public Document</span>
            <span>Temporary Document</span>
            <span>Daily Trash</span>

            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
              V
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {cards.map((card) => (
               <div
                   key={card.title}
                   onClick={() => {

      if (card.title === "CSPDCL softwares") {
        navigate("/softwares");

      }

    }}
    className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition cursor-pointer"
  > 

              {/* Logo Box */}
              <div
                className={`w-14 h-14 rounded-xl ${card.color} mb-4 p-2 flex items-center justify-center`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-8 h-8 object-contain"
                />
                
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500">
                {card.desc}
              </p>
            </div>
          ))}
        </div>


        {/* News Section */}
        <div className="mt-10">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold text-gray-800">
              News & announcements
            </h2>

             <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white shadow">
                ←
              </button>

              <button className="w-10 h-10 rounded-full bg-white shadow">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {news.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >

                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="p-5">

                  <h3 className="font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <button className="text-blue-700 font-medium">
                    View more
                  </button>
                
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* App Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_0.72fr_0.72fr] gap-2 mt-10">

          {/* Left Card */}
          <div className="bg-white rounded-2xl p-5 shadow-md flex items-center justify-between min-h-[220px]">



            {/* Text */}
            <div className="max-w-[48%]">

              <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                Download Mor Bijlee app today
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Pay your electricity bills and do much
                more with Official Mor Bijlee app
              </p>

            </div>

            {/* Mobile Image */}
            <img
              src="/First_Yourdesignhere.svg"
              alt="Mobile App"
              className="w-56 h-72 object-contain"
            />
          

          </div>

          {/* iOS QR */}
          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center min-h-[220px]">

            {/* QR */}
            <img
              src="/MorBijleeQR-Code1ios.svg"
              alt="iOS QR"
              className="w-28 h-28 object-contain"
            />

            {/* Bottom */}
            <div className="flex items-center gap-2 mt-5">

              <img
                src="/apple-logo.svg"
                alt="Apple"
                className="w-5 h-5 object-contain"
              />

              <p className="text-sm font-semibold text-gray-700">
                For iOS
              </p>

            </div>
          </div>

          {/* Android QR */}
          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center min-h-[220px]">

            {/* QR */}
            <img
              src="/MorBijleeQR-CodeAndroid.svg"
              alt="Android QR"
              className="w-28 h-28 object-contain"
            />

            {/* Bottom */}
            <div className="flex items-center gap-2 mt-5">

              <img
                src="/android-logo.svg"
                alt="Android"
                className="w-5 h-5 object-contain"
              />
              
              <p className="text-sm font-semibold text-gray-700">
                
                For Android
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm py-4 border-t">
          Designed & Developed by EITC
        </div>

      </div>
    </div>
  );
}