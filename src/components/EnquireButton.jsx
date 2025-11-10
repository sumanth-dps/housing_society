// import React from "react";

// const EnquireButton = () => (
//   <a
//     href="#contact"
//     className="hidden lg:block fixed lg:right-5 lg:top-1/2 -translate-y-1/2 bg-orange-700 text-white px-4 py-2 font-semibold tracking-wider rotate-[-90deg] origin-right z-20 "
//   >
//     ENQUIRE NOW
//   </a>
// );

// export default EnquireButton;
import React from "react";

const EnquireButton = () => (
  <>
    {/* For Large Screens - Vertical Side Button */}
    <a
      href="#contact"
      className="hidden lg:block fixed lg:right-5 lg:top-1/2 -translate-y-1/2 bg-orange-700 text-white px-4 py-2 font-semibold tracking-wider rotate-[-90deg] origin-right z-20 hover:bg-orange-600 transition"
    >
      ENQUIRE NOW
    </a>

    {/* For Small & Medium Screens - Bottom Full-Width Button */}
    <a
      href="#contact"
      className="block lg:hidden fixed bottom-0 left-0 right-0 bg-orange-700 text-white text-center py-3 font-semibold tracking-wide z-30 shadow-md hover:bg-orange-600 transition"
    >
      ENQUIRE NOW
    </a>
  </>
);

export default EnquireButton;
