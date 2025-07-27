import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Benefits />
      <TestimonialsSection />
    </>
  );
}

export default App;
