import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <TestimonialsSection />
    </>
  );
}

export default App;
