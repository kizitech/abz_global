import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-10 px-6 bg-white">
        <Companies />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
