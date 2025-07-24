import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      role: "UX Designer",
      content: "HerUX ha sido fundamental en mi crecimiento profesional. La comunidad me ha brindado oportunidades increíbles para aprender, conectar con otras profesionales y desarrollar mis habilidades en UX. Es un espacio seguro donde podemos compartir experiencias y apoyarnos mutuamente.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Ana Rodríguez",
      role: "Product Designer",
      content: "Formar parte de HerUX ha transformado mi carrera. Los eventos, talleres y la red de contactos que he construido aquí son invaluables. Es inspirador estar rodeada de mujeres tan talentosas y apasionadas por el diseño de experiencias.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Carmen Silva",
      role: "UI/UX Researcher",
      content: "La comunidad HerUX es un lugar donde las mujeres en UX podemos crecer juntas. He participado en múltiples eventos que han enriquecido mi conocimiento y me han permitido conocer profesionales increíbles. ¡Totalmente recomendado!",
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Sofía Mendoza",
      role: "Design Lead",
      content: "HerUX no es solo una comunidad, es una familia. Aquí he encontrado mentoras, amigas y oportunidades de crecimiento que han marcado mi trayectoria profesional. El apoyo y la sororidad que se vive aquí es único.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "Isabella Torres",
      role: "UX Strategist",
      content: "Participar en HerUX ha sido una de las mejores decisiones de mi carrera. Los workshops, networking events y el intercambio de conocimientos han sido clave para mi desarrollo profesional. ¡Gracias por crear este espacio tan valioso!",
      image: "/api/placeholder/300/300"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Testimonios
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentTestimonial}`}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  index === 1 ? 'md:scale-105 md:z-10' : 'md:scale-95'
                }`}
              >
                {/* Quote Icon */}
                <div className="p-6 pb-4">
                  <div className="text-primary text-4xl font-serif mb-4">"</div>
                  
                  {/* Testimonial Content */}
                  <p className="text-base-content text-sm md:text-base leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author Info with Image */}
                <div className="flex items-center p-6 pt-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base-content text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20"
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20"
            aria-label="Siguiente testimonio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;