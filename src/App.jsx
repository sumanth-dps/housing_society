
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import EnquireButton from "./components/EnquireButton";
import Locationn from "./components/Locationn";
import IconBlocks from "./components/IconBlocks";
import PlanLayout from "./components/PlanLayout";
import Status from "./components/Status";
import Address from "./components/Address";
import Contact from "./components/Contact";
import 'react-phone-input-2/lib/style.css'; 
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";
function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <PlanLayout/>
      <Status/>
      <LocationSection/>
      <EnquireButton />
      {/* <Locationn/> */}
      <IconBlocks/>
      <Address/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
