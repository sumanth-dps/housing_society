// const About = () => {
//   return (
//     <div id="about" className="flex justify-center">
//       <div className="w-full xl:w-3/4 2xl:w-2/3 mx-auto bg-orange-100 py-10 px-6 ">
//         <div className="w-full">
//           <h2 className="text-2xl font-extrabold mb-6 text-orange-600">
//             About Housing Society
//           </h2>
//           <p className="text-lg">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam esse eius nemo voluptate provident voluptatibus iure expedita recusandae debitis ad repellendus, aliquam ipsam dolor rerum vel nostrum quam itaque ipsa. Modi sint earum tenetur rem molestiae quisquam? Accusantium asperiores, reiciendis beatae odio atque quia perspiciatis sequi at quo consequatur, sed blanditiis, qui dolorum. Rem blanditiis quidem maiores aut accusamus ad delectus, neque quaerat consequatur, quam architecto libero commodi dignissimos doloribus soluta sed! Voluptatem culpa fugiat recusandae pariatur cumque, veritatis exercitationem beatae inventore architecto dolor eligendi mollitia nihil qui id sint voluptate. Quidem aspernatur quam, dolore voluptates sint perspiciatis at modi aliquam distinctio totam maiores earum voluptas enim natus quia vel ipsa provident consequuntur blanditiis corrupti cum minus ducimus pariatur? Laborum quas ullam at. Error illo deleniti minima, corporis voluptates mollitia laboriosam obcaecati consequatur odit voluptatum esse aliquid fugit quia dolorum doloremque nobis iste est itaque? Officiis maiores fugiat vitae reprehenderit?
//           </p>

         
//         </div>

//         {/* Image Section */}
//         <div className="flex
//          justify-center">
//           <img
//           src="./status3.jpg"  className="  rounded-xl my-6 h-90  object-scale-down"/>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default About;
const About = () => {
  return (
    <div id="about" className="flex justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 mx-auto bg-orange-100 py-10 px-4 sm:px-6 md:px-10 rounded-xl">
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 text-orange-600 text-center md:text-left">
            About Housing Society
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam esse eius
            nemo voluptate provident voluptatibus iure expedita recusandae debitis ad
            repellendus, aliquam ipsam dolor rerum vel nostrum quam itaque ipsa. Modi
            sint earum tenetur rem molestiae quisquam? Accusantium asperiores, reiciendis
            beatae odio atque quia perspiciatis sequi at quo consequatur, sed blanditiis,
            qui dolorum. Rem blanditiis quidem maiores aut accusamus ad delectus, neque
            quaerat consequatur, quam architecto libero commodi dignissimos doloribus
            soluta sed! Voluptatem culpa fugiat recusandae pariatur cumque, veritatis
            exercitationem beatae inventore architecto dolor eligendi mollitia nihil qui
            id sint voluptate. Quidem aspernatur quam, dolore voluptates sint perspiciatis
            at modi aliquam distinctio totam maiores earum voluptas enim natus quia vel
            ipsa provident consequuntur blanditiis corrupti cum minus ducimus pariatur?
            Laborum quas ullam at. Error illo deleniti minima, corporis voluptates
            mollitia laboriosam obcaecati consequatur odit voluptatum esse aliquid fugit
            quia dolorum doloremque nobis iste est itaque? Officiis maiores fugiat vitae
            reprehenderit?
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-8">
          <img
            src="./status3.jpg"
            alt="Housing Society"
            className="rounded-xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-h-[500px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
