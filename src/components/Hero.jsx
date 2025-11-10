// const Hero = () => {
//   return (
//     <section className="flex justify-center ">
//       <div className="w-full xl:w-3/4 2xl:w-2/3  flex items-center justify-center p-6 py-12 bg-orange-100">
//         <img
//           src="./status1.jpg"
//           alt=""
//           className="w-full h-100  rounded-xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 flex items-center justify-center p-4 sm:p-6 md:py-12 bg-orange-100">
        <img
          src="./status1.jpg"
          alt="Hero Image"
          className="w-full max-h-[600px] object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
