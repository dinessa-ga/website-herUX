import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import Benefits from "./components/Benefits";
import VolunteerForm from "./components/VolunteerForm";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Benefits />
      <TestimonialsSection />
      <VolunteerForm />
    </>
  );
}

export default App;
