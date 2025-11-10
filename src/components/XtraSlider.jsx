import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    title: "Xtra Enjoyment",
    description:
      "Enjoyment finds a new meaning at VIRAAT, with unique facilities that are in vogue and most of the times people have to go out, spending time and efforts to avail them. Now enjoy these upmarket facilities like box cricket, skating rink, futsal court and full Basketball court right at your VIRAAT home.",
    image: "./xtra_enjoyment.png",
  },
  {
    title: "Xtra Ease",
    description:
      "Coming home into the parking is extra convenient and adds extra ease. Ease is when there is less waiting time at main gate, ease is when you can navigate smoothly through the entry and exit gates when all this is professionally planned. Extra ease means more delight.",
    image: "./xtra_ease.png",
  },
  {
    title: "Xtra Fitness",
    description:
      "Under designated block be greeted with yoga decks and many more, its more life that is added and more organized spaces gives you no reason to wait for your turn as activities can be completely spread out. It’s like a community of the Like Minded.",
    image: "./xtra_fitness.png",
  },
  {
    title: "Xtra Privilege",
    description:
      "Build extra bonds with coming together at the activity ones. Extra facilities for all generations. Are loaded around the designated sunken courts at designated blocks where likeminded people can indulge in activities of their choice. The seniors, the gen-next or the women kitty areas is an outcome of this thought. Pet parks for the pets bring another dimension to the quality of life inspired by the Lifestyle that you cherish.",
    image: "./xtra_privilige.png",
  },
  {
    title: "Xtra Fun",
    description:
      "Extra fun for children & alike starts the moment you are on the elevation at grand floor. Designated Blocks has its own areas for children so that they don’t have to move far from the block once they come down Adventure ones in an extra proactive area for growing and sweating out swing over or slide & glide you sure are in for extra fun here.",
    image: "./xtra_fun.png",
  },
  {
    title: "Xtra Care",
    description:
      "Express yourself at a club house that comes with thoughtful gestures and fully loaded to indulge in a stunning lifestyle!",
    image: "./xtra_care.png",
  },
];

export default function XtraSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="flex flex-row items-center justify-center relative">
      <div className="w-full lg:w-[85%] xl:w-2/3 relative pt-10 pb-5 px-6 lg:px-4">
        
        <div className="overflow-hidden ">
          
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex flex-col lg:flex-row items-center lg:items-start justify-center md:items-center gap-8 lg:p-6"
              >
                {/* Text Section */}
                <div className=" w-full lg:w-1/2 text-center lg:text-left space-y-4">
                  <h2 className="text-2xl text-[#3c283a] md:text-3xl font-bold">
                    {slide.title}
                  </h2>
                  <p className=" wrap-break-word leading-relaxed text-md lg:text-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-col lg:flex-row  w-full justify-between gap-y-8 gap-x-4 mt-6 text-md font-light text-white">
                    <button className="w-full lg:w-1/2 bg-[#311C2E]  py-1 rounded-full shadow">
                      Schedule a Visit
                    </button>
                    <button className="w-full lg:w-1/2 bg-[#311C2E]  py-1 rounded-full">
                      Download Brochure
                    </button>
                  </div>
                </div>
               
                <div className="w-full lg:w-1/2 flex justify-center md:justify-end pt-5 mt-6 md:mt-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className=" w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-8 lg:p-0 text-black transition z-10"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-8 lg:p-0  text-black transition z-10"
        >
          <ChevronRight size={48} />
        </button>
      </div>
      <div className="hidden lg:block bg-[#3c283a] absolute right-0 h-100 w-[40%] top-0 -z-1"></div>
    </section>
  );
}
