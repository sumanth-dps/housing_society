import React from "react";

const Stats = () => {
  const data = [
    { value: "1428", label: "UNITS" },
    { value: "8.75", label: "ACRES" },
    { value: "2 & 3", label: "BHK" },
    { value: "6", label: "SKY SCRAPERS" },
    { value: "+30", label: "FLOORS" },
    { value: "1340–2030", label: "SQ.FT" },
  ];
  return (
    <section className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3  grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-0 text-center bg-orange-700 text-white py-12 px-2 xl:px-0">
        {data.map((d) => (
          <div key={d.label}>
            {d.value === "+30" ? <div className="text-md font-semibold">PLAY SCAPES (STILT)</div> : null}
            <div className="text-2xl font-bold">{d.value}</div>
            <div className="text-md uppercase tracking-wide mt-1 font-semibold">{d.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
