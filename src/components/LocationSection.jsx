const LocationSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 mx-auto bg-orange-100 py-6 px-6 ">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-600 text-center">
          Location
        </h2>
        <p className="text-md text-gray-700 text-center mb-6">
          Find us at Rajiv Swagruha Township, Mettakanigudem, Hyderabad, Telangana 500055
        </p>

        {/* Embedded Map */}
        <div className="w-full h-80 rounded-xl overflow-hidden border-4 border-orange-200 shadow-md">
          <iframe
            title="Rajiv Swagruha Township Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7232.70220053463!2d78.432937!3d17.526621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f0026254d0f%3A0x6206d81240dd6d30!2sB06!5e1!3m2!1sen!2sin!4v1762749774379!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
// const LocationSection = () => {
//   return (
//     <div className="flex justify-center mt-16">
//       <div className="w-full xl:w-3/4 2xl:w-2/3 mx-auto bg-orange-50 py-12 px-6 rounded-xl shadow-md">
//         <h2 className="text-2xl font-extrabold mb-6 text-orange-600 text-center">
//           Location
//         </h2>
//         <p className="text-md text-gray-700 text-center mb-6">
//           Find us at Rajiv Swagruha Township, Mettakanigudem, Hyderabad, Telangana 500055
//         </p>

//         {/* Satellite View Map */}
//         <div className="w-full h-80 rounded-xl overflow-hidden border-4 border-orange-200 shadow-md">
//           <iframe
//             title="Rajiv Swagruha Township Satellite Map"
//             width="100%"
//             height="100%"
//             loading="lazy"
//             allowFullScreen
//             referrerPolicy="no-referrer-when-downgrade"
//             className="border-0"
//             src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=17.526117,78.4332722&zoom=17&maptype=satellite`}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationSection;
