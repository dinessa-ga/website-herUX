import { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "HerUX, experiencia que empodera.",
      subtitle:
        "Somos la primera comunidad de Mujeres Profesionales apasionadas por la Experiencia del Usuario en Guayaquil-Ecuador",
      image: "src/assets/hero/1.png",
    },
    {
      title: "Aprende y crece con nosotras",
      subtitle:
        "Participa en talleres, eventos y actividades que potenciarán tu carrera profesional",
      image: "/api/placeholder/1920/1080",
    },
    {
      title: "Conecta con profesionales UX",
      subtitle:
        "Únete a nuestra red de diseñadoras y profesionales UX/UI que están transformando la industria",
      image: "/api/placeholder/1920/1080",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Purple Gradient Overlay - from sides to center */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/15 to-primary/75 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

       
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 btn btn-circle btn-ghost text-white hover:bg-white/20 border-none"
        aria-label="Slide anterior"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 btn btn-circle btn-ghost text-white hover:bg-white/20 border-none"
        aria-label="Siguiente slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

     
    </section>
  );
};

export default HeroSection;
