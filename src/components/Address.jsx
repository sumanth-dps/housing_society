
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Address = () => {
  const [activeTab, setActiveTab] = useState("schools");

  const data = {
    schools: [
      { name: "Urban International School", distance: "1.9 KM" },
      { name: "Geetanjali Concept School", distance: "2.6 KM" },
      { name: "Tatva Global School", distance: "2.6 KM" },
      { name: "Bachpan A Play School", distance: "3.0 KM" },
      { name: "Orchids The International School", distance: "3.2 KM" },
    ],
    transport: [
      { name: "Jeedimetla Bus Depot", distance: "1.2 KM" },
      { name: "KPHB Metro Station", distance: "7.4 KM" },
      { name: "Kukatpally Metro Station", distance: "8.3 KM" },
    ],
    parks: [
      { name: "Prashantha Vanam", distance: "3.2 KM" },
      { name: "Pranavayu Urban Forest Park", distance: "2.7 KM" },
      { name: "Children's Park", distance: "2.6 KM" },
    ],
    hospitals: [
      { name: "Lifespan Super Speciality Hospital", distance: "2.3 KM" },
      { name: "Malla Reddy Narayana Multispeciality Hospital", distance: "3.3 KM" },
      { name: "Usha Mullapudi Cardiac Centre Shapur", distance: "3.6 KM" },
      { name: "Lifespan Super Speciality Hospital", distance: "3.8 KM" },
    ],
    education: [
      { name: "Malla Reddy Engineering College", distance: "6.7 KM" },
      { name: "St. Peter’s Engineering College", distance: "7.6 KM" },
      { name: "APJ Abdul Kalam Junior College", distance: "3.6 KM" },
      { name: "Capital Degree & PG College", distance: "3.7 KM" },
    ],
    malls: [
      { name: "TRENDS", distance: "2.9 KM" },
      { name: "TNR Northcity Mall & Multiplex", distance: "8.3 KM" },
      { name: "LULU Mall", distance: "9.1 KM" },
      { name: "Nexus Mall ", distance: "10.5 KM" },
      { name: "Manjeera Majestic Commercial", distance: "8.8 KM" },
    ],
  };

  const tabs = [
    { id: "schools", label: "SCHOOLS" },
    { id: "hospitals", label: "HOSPITALS" },
    { id: "transport", label: "TRANSPORT" },
    { id: "malls", label: "MALLS" },
    { id: "education", label: "EDUCATIONAL INSTITIONS" },
    { id: "parks", label: "PARKS" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 p-4 sm:p-6 md:px-10 py-10 bg-orange-100">
        {/* Heading */}
        <div className="flex flex-col items-start justify-center gap-y-6">
          <h1 className="font-extrabold text-2xl sm:text-3xl text-orange-600 text-center sm:text-left">
            Location Highlights
          </h1>
        </div>

        {/* Tabs Section */}
        <div className="w-full flex flex-wrap justify-center sm:justify-start gap-2 mt-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-[10px] sm:text-xs md:text-sm border border-orange-700 rounded-md font-medium transition-all duration-200 
              ${
                activeTab === tab.id
                  ? "bg-orange-700 text-white"
                  : "bg-transparent text-orange-700 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Data List */}
        <div className="w-full flex flex-col items-center justify-center">
          <ul className="space-y-3 w-full px-2 sm:px-0">
            {data[activeTab].map((item, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-orange-200 text-orange-700"
              >
                <div className="flex flex-row items-center gap-x-2">
                  <FaArrowRightLong className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">{item.name}</span>
                </div>
                <span className="font-medium text-xs sm:text-sm md:text-base mt-1 sm:mt-0">
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Address;
