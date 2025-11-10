import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { FaMapMarkerAlt} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      phone: value,
      country: countryData.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(
      `Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: +${formData.phone}\nCountry: ${formData.country}`
    );
  };

  return (
    <section  className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 bg-orange-950 text-white py-12 px-4 sm:px-8 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
     
          <div className="flex flex-col gap-y-6">
             <img
            src="./contact_logo.png"
            alt="Contact Logo"
            className="w-1/2 sm:w-1/3 "
          />
            <h2 className="text-xl font-extrabold uppercase text-orange-400">
              About Rajiv Swagruha Township
            </h2>

            <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
              Rajiv Swagruha Township is a government-initiated residential
              project in Hyderabad designed to provide modern, affordable, and
              sustainable living for families. Nestled amidst lush greenery in
              Mettakanigudem, this township features well-planned infrastructure,
              wide roads, landscaped parks, and proximity to schools, hospitals,
              and metro access — offering residents a perfect balance of
              convenience, comfort, and community living.
            </p>
            <div className="flex items-start gap-3 mt-6">
              <FaMapMarkerAlt className="text-orange-400 text-2xl mt-1" />
              <div>
                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                  Rajiv Swagruha Township,
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                  Mettakanigudem, Bandlaguda Jagir,
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                  Hyderabad, Telangana 500055
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <h2 className="text-lg md:text-xl font-extrabold uppercase">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Want to know more about Rajiv Swagruha Township? Fill out the
              contact form below, and our team will reach out to you with more
              details soon.
            </p>

            <h3 id="contact" className="font-bold text-xl mt-4 mb-2 text-orange-400">
              Contact Form
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#FFE0c0] text-black border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#FFE0c0] text-black border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className=" overflow-hidden border border-gray-300 text-black rounded-lg">
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "42px",
                    border: "none",
                    backgroundColor:"#FFE0c0"
                  }}
                  dropdownStyle={{
                    width: "250px",
                  }}
                />
              </div>

              <input
                placeholder="Location"
                className="w-full bg-[#FFE0c0] text-black border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
              />

              <textarea
                placeholder="Message"
                className="w-full bg-[#FFE0c0] text-black border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                rows={3}
              ></textarea>

              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" required />
                <p className="text-xs text-gray-300 leading-snug">
                  I authorize Rajiv Swagruha Township and its representatives to
                  contact me via Email, SMS, WhatsApp, and Call. This will
                  override DND/NDNC preferences.
                </p>
              </div>

              <button
                type="submit"
                className="w-full sm:w-1/3 bg-orange-600 hover:bg-orange-500 text-white py-2.5 font-semibold shadow-md transition-all duration-300 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
