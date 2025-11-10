import { CgGym } from "react-icons/cg";
import { MdOutlinePool } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { IoBedSharp } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";
import { GiTennisCourt } from "react-icons/gi";
import { FaChargingStation } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { GiKidSlide } from "react-icons/gi";

const IconBlocks = () => {
  const amenities = [
    { icon: <CgGym className="text-4xl text-orange-700" />, label: "Gym" },
    { icon: <GrYoga className="text-4xl text-orange-700" />, label: "Yoga" },
    { icon: <MdOutlinePool className="text-4xl text-orange-700" />, label: "Pool" },
    { icon: <FaWalking className="text-4xl text-orange-700" />, label: "Walking Area" },
    { icon: <FaDoorOpen className="text-4xl text-orange-700" />, label: "Conference Room" },
    { icon: <FaChargingStation className="text-4xl text-orange-700" />, label: "EV Charging" },
    { icon: <GiKidSlide className="text-4xl text-orange-700" />, label: "Creche" },
    { icon: <IoBedSharp className="text-4xl text-orange-700" />, label: "Guest Rooms" },
    { icon: <GiFruitTree className="text-4xl text-orange-700" />, label: "Garden" },
    { icon: <GiTennisCourt className="text-4xl text-orange-700" />, label: "Court" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 p-6 md:px-10 bg-orange-100">
        <div className="flex flex-col items-start justify-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600">
            Extra Fun, More Happiness
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 leading-relaxed">
            Extra fun for children & alike starts the moment you are on the elevation at
            the grand floor. Designated blocks have their own areas for children so that
            they don’t have to move far from the block once they come down. Adventurous
            ones in an extra proactive area for growing and sweating out — swing over or
            slide & glide, you sure are in for extra fun here!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 p-2">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4   p-4"
            >
              {item.icon}
              <h2 className="text-lg font-semibold text-gray-800">{item.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconBlocks;
