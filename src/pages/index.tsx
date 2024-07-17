import NavBar from "@/pages/Components/NavBar";
import Banner from "./Components/Banner";
import AboutUs from "./Components/About";
import Service from "./Components/Service";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div
      className="w-full h-screen"
      style={{ backgroundImage: "url('/garbage.jpg')" }}
    >
      <div className="relative bg-cover bg-center h-[70%]">
        <div className="bg-black bg-opacity-50 w-full h-full absolute inset-0"></div>
        <NavBar />
        <Banner />H
      </div>
      <AboutUs />
      <Service />
      <Pricing />
      <Contact />
    </div>
  );
}
