import React from "react";

export default function SoftwaresPage() {

  const softwares = [
    {
      short: "MD",
      title: "Management dashboard",
      desc: "Access your employee account and modules",
      badge: "New",
    },

    {
      short: "RF",
      title: "Online consumer grievance redressal forum",
      desc: "Access your employee account and modules",
    },

    {
      short: "ES",
      title: "E-Seam (Web portal for GIS survey)",
      desc: "Access your employee account and modules",
      badge: "New",
    },

    {
      short: "SP",
      title: "Sangwari portal",
      desc: "Access your employee account and modules",
      badge: "New",
    },

    {
      short: "PP",
      title: "Pragati portal",
      desc: "Access your employee account and modules",
      badge: "New",
    },

    {
      short: "SP",
      title: "Samiksha portal",
      desc: "Access your employee account and modules",
    },

    {
      short: "EM",
      title: "ESS / MSS login",
      desc: "Access your employee account and modules",
    },

    {
      short: "PS",
      title: "Prakash software",
      desc: "Access your employee account and modules",
    },

    {
      short: "TL",
      title: "Time limit case",
      desc: "Access your employee account and modules",
    },

    {
      short: "OC",
      title: "Order circular login",
      desc: "Access your employee account and modules",
    },

    {
      short: "MB",
      title: "Mor bijlee website",
      desc: "Access your employee account and modules",
    },

    {
      short: "EP",
      title: "Employee payslip",
      desc: "Access your employee account and modules",
    },

    {
      short: "SA",
      title: "SAP BI Login",
      desc: "Access your employee account and modules",
    },

    {
      short: "CR",
      title: "CRM login",
      desc: "Access your employee account and modules",
    },

    {
      short: "SA",
      title: "GST E-Invoice software",
      desc: "Access your employee account and modules",
    },

    {
      short: "TU",
      title: "Tender upload software",
      desc: "Access your employee account and modules",
    },

    {
      short: "SA",
      title: "Legal case monitoring",
      desc: "Access your employee account and modules",
    },

    {
      short: "MD",
      title: "Meter difference compilation software",
      desc: "Access your employee account and modules",
    },

  ];

  return (
    <div className="min-h-screen flex bg-[#eef1f7]">

      {/* Sidebar */}
      <div className="w-64 bg-[#2343a2] text-white flex flex-col">

        {/* Menu */}
        <div className="p-5 border-b border-blue-700 font-semibold">
          Menu
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col mt-3">

          {[
            "Employee",
            "Finance",
            "Operations",
            "IT & Systems",
            "Documents",
            "CS Power companies",
            "Help & Support",
          ].map((item) => (

            <div
              key={item}
              className={`px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-blue-700 ${
                item === "Operations"
                  ? "bg-blue-700"
                  : ""
              }`}
            >

              <span className="text-sm font-medium">
                {item}
              </span>

              <span>⌄</span>

            </div>
          ))}

        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b">

          <div className="flex items-center gap-4">

            <h1 className="text-3xl font-semibold text-gray-700">
              UrjaiNet
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

        {/* Content */}
        <div className="p-6 flex-1">

          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Softwares
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {softwares.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition relative"
              >

                {/* Top */}
                <div className="flex items-start justify-between mb-5">

                  <div className="w-10 h-10 rounded-lg bg-pink-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {item.short}
                  </div>

                  {item.badge && (

                    <span className="bg-red-200 text-red-700 text-xs px-3 py-1 rounded">
                      {item.badge}
                    </span>
             
                  )}

                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Desc */} 
                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="bg-white border-t h-14 flex items-center justify-center text-sm text-gray-500">
          Designed & Developed by EITC
        </div>

      </div>
    </div>
  );
}