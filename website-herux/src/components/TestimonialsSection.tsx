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
      name: "Stalin García",
      role: "UX Lead Designer | Ing. En Computación",
      content: "Ser cofundador y líder del equipo de eventos en HerUX ha sido una experiencia transformadora. Tuve el honor de colaborar en la coordinación de proyectos de capacitación, liderar iniciativas para fortalecer la comunidad como organización y planificar jornadas de networking que nos permitieron conectar con profesionales increíbles. Ver crecer a la comunidad y aportar a su impacto en el desarrollo de mujeres en UX ha sido profundamente gratificante.",
      image: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },
    {
      id: 2,
      name: "Joseline Narcisa",
      role: "N/A",
      content: "Hola! Soy nutricionista y formo parte del equipo de voluntariado de HerUx. El pertenecer a esta comunidad me ha ayudado a comprender que es la experiencia al usuario y darle un enfoque distinto a mis consultas virtuales, además de aprender diferentes técnicas de comunicación, mejorar mis habilidades tanto duras como blandas, Olga, la líder siempre está pendiente de la comunidad y nos aconseja como mejorar nuestro perfil en LinkedIn para ser más visibles, los demás miembros siempre están dispuestos apoyarte con alguna duda o trabajo que tenga que ver con UX y en algunos casos UI. ¡Definitivamente me alegro de haberme unido a HerUx!",
      image: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },
    {
      id: 3,
      name: "Natalia García",
      role: "UI/UX Researcher",
      content: "Me desempeño como asistente de marketing y Comunicación. Ser parte del voluntariado en HerUX ha sido una oportunidad valiosa para contribuir desde mis habilidades en comunicación, organización y trabajo en equipo. Aquí he aprendido y compartido con personas increíbles. Invito a más mujeres profesionales comprometidas a sumarse a HerUX y ser parte de esta red colaborativa con propósito.",
      image: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },
    {
      id: 4,
      name: "Angie Gallo",
      role: "Diseñadora de Productos | UX Researcher",
      content: "HerUX me brindó un espacio dentro del grupo de UX Research donde puedo compartir ideas y aplicar mis conocimientos. Gracias a este espacio he podido coincidir con profesionales de gran calidad humana que enriquecen cada intercambio.",
      image: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },
    {
      id: 5,
      name: "Bethsaida Chea M.",
      role: "Ingeniera de Software | Gestora de Fábrica de Software.",
      content: "Ser parte de HERUX ha transformado mi visión profesional. Aquí encontré apoyo, inspiración y nuevas oportunidades para crecer en UX y en otros aspectos del campo tecnológico. Es una comunidad que realmente empodera y conecta.",
      image: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
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