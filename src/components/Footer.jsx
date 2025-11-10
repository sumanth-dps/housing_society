const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center ">
      <div className="w-full xl:w-3/4 2xl:w-2/3 flex flex-col md:flex-row items-center justify-between text-center md:text-left py-6 px-6 md:px-10 gap-3 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700">
        <h2 className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          © {currentYear} | <span className="font-semibold">Rajiv Swagruha Twp</span> — All Rights Reserved.
        </h2>
        <p className="text-sm sm:text-base font-light italic">
          Catalyzed by <span className="font-semibold">Housing Board</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
