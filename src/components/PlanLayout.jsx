
import { useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const PlanLayout = () => {
  const [selected, setSelected] = useState("site");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const plans = [
    { key: "site", title: "Site Layout", src: "./layout.png" },
    { key: "ab", title: "Floor Plan", src: "./b06.jpg" },
    { key: "map", title: "Map Location", src: "./map.jpg" },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <div id="floorplans" className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 p-6 flex flex-col items-center md:items-start bg-orange-100">
        <h2 className="text-lg md:text-2xl font-bold text-orange-600 mb-8">
          Site Layout & Floor Plans
        </h2>


        <div className="flex flex-row justify-center items-start gap-3 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.key}
              onClick={() => setSelected(plan.key)}
              className={`px-3 py-1 md:px-6 md:py-2 rounded-md font-light transition text-black hover:bg-orange-700 hover:text-white ${
                selected === plan.key ? "bg-orange-700 text-white" : ""
              }`}
            >
              {plan.title}
            </button>
          ))}
        </div>

        <div
          className="cursor-pointer"
          onClick={() =>
            openLightbox(plans.findIndex((p) => p.key === selected))
          }
        >
          <img
            src={plans.find((p) => p.key === selected).src}
            alt="Floor Plan"
            className="w-full h-auto  rounded-xl shadow-md"
          />
        </div>
        

        {isOpen && (
          <div className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-50">
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <div className="relative w-[90%] md:w-[70%] lg:w-[60%]">
              <img
                src={plans[currentIndex].src}
                alt={plans[currentIndex].title}
                className="rounded-lg w-full h-auto object-contain"
              />

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 p-2 rounded-full"
                onClick={prevImage}
              >
                <IoChevronBack />
              </button>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 p-2 rounded-full"
                onClick={nextImage}
              >
                <IoChevronForward />
              </button>
            </div>

            <p className="text-white mt-4 text-lg font-semibold">
              {plans[currentIndex].title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanLayout;
