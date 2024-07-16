import NavBar from "@/pages/Components/NavBar";
import Banner from "./Components/Banner";
import AboutUs from "./Components/About";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div
        className="relative bg-cover bg-center h-[70%]"
        style={{ backgroundImage: "url('/garbage.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute inset-0"></div>
        <NavBar />
        <Banner />
      </div>
      <AboutUs />
    </div>
  );
}
