import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    image: "./status1.jpg",
  },
  {
    image: "./status2.jpg",
  },
  {
    image: "./status3.jpg",
  },
  {
    image: "./status4.jpg",
  },
  
];

export default function Status() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className=" flex  justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 relative pt-10 pb-5 px-6  bg-orange-100">
        <div className="overflow-hidden flex flex-col justify-center">
            <h1 className="font-extrabold text-lg md:text-2xl text-orange-600 ml-6">Current Project Status - Sep 2025</h1>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex flex-col lg:flex-row items-center lg:items-start justify-center md:items-center gap-8  "
              >
                <div className="w-full  flex justify-center  pt-5 mt-6 ">
                  <img src={slide.image} className=" w-full object-cover rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-[65%] md:top-[55%] -translate-y-1/2 ml-4 md:ml-6 p-1 text-orange-800 md:bg-white/40 rounded-full transition z-10"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-[65%] md:top-[55%] -translate-y-1/2 mr-4 md:mr-6 p-1 text-orange-800 md:bg-white/40 rounded-full transition z-10"
        >
          <ChevronRight size={48} />
        </button>
      </div>
    </section>
  );
}
