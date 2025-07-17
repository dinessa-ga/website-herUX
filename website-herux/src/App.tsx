import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
