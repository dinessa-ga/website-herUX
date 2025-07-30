import { useState } from "react";

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
      content:
        "Ser cofundador y líder del equipo de eventos en HerUX ha sido una experiencia transformadora. Tuve el honor de colaborar en la coordinación de proyectos de capacitación, liderar iniciativas para fortalecer la comunidad como organización y planificar jornadas de networking que nos permitieron conectar con profesionales increíbles. Ver crecer a la comunidad y aportar a su impacto en el desarrollo de mujeres en UX ha sido profundamente gratificante.",
      image:
        "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
    {
      id: 2,
      name: "Joseline Narcisa",
      role: "N/A",
      content:
        "Hola! Soy nutricionista y formo parte del equipo de voluntariado de HerUx. El pertenecer a esta comunidad me ha ayudado a comprender que es la experiencia al usuario y darle un enfoque distinto a mis consultas virtuales, además de aprender diferentes técnicas de comunicación, mejorar mis habilidades tanto duras como blandas, Olga, la líder siempre está pendiente de la comunidad y nos aconseja como mejorar nuestro perfil en LinkedIn para ser más visibles, los demás miembros siempre están dispuestos apoyarte con alguna duda o trabajo que tenga que ver con UX y en algunos casos UI. ¡Definitivamente me alegro de haberme unido a HerUx!",
      image:
        "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
    {
      id: 3,
      name: "Natalia García",
      role: "UI/UX Researcher",
      content:
        "Me desempeño como asistente de marketing y Comunicación. Ser parte del voluntariado en HerUX ha sido una oportunidad valiosa para contribuir desde mis habilidades en comunicación, organización y trabajo en equipo. Aquí he aprendido y compartido con personas increíbles. Invito a más mujeres profesionales comprometidas a sumarse a HerUX y ser parte de esta red colaborativa con propósito.",
      image:
        "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
    {
      id: 4,
      name: "Angie Gallo",
      role: "Diseñadora de Productos | UX Researcher",
      content:
        "HerUX me brindó un espacio dentro del grupo de UX Research donde puedo compartir ideas y aplicar mis conocimientos. Gracias a este espacio he podido coincidir con profesionales de gran calidad humana que enriquecen cada intercambio.",
      image:
        "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
    {
      id: 5,
      name: "Bethsaida Chea M.",
      role: "Ingeniera de Software | Gestora de Fábrica de Software.",
      content:
        "Ser parte de HERUX ha transformado mi visión profesional. Aquí encontré apoyo, inspiración y nuevas oportunidades para crecer en UX y en otros aspectos del campo tecnológico. Es una comunidad que realmente empodera y conecta.",
      image:
        "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
            Testimonios
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = index === 1;

              return (
                <div
                  key={`${testimonial.id}-${currentTestimonial}`}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? "w-full max-w-2xl z-20 scale-100"
                      : "w-80 max-w-sm z-10 scale-90 opacity-60 hidden md:block"
                  }`}
                >
                  {/* Center Card - Special Layout */}
                  {isCenter ? (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-primary/20">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/2 relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <div className="text-primary text-6xl font-serif mb-4 leading-none">
                            "
                          </div>
                          <p className="text-base-content text-base leading-relaxed mb-6 flex-grow">
                            {testimonial.content.length > 200
                              ? testimonial.content.substring(0, 200) + "..."
                              : testimonial.content}
                          </p>
                          <div className="border-t border-base-300 pt-4">
                            <h4 className="font-bold text-base-content text-xl mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-neutral text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Side Cards - Simple Layout */
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
                      <div className="p-6 h-full flex flex-col">
                        <div className="text-primary text-4xl font-serif mb-3 leading-none">
                          "
                        </div>
                        <p className="text-base-content text-sm leading-relaxed mb-4 flex-grow">
                          {testimonial.content.length > 120
                            ? testimonial.content.substring(0, 120) + "..."
                            : testimonial.content}
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-base-content text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-neutral text-xs">
                              {testimonial.role.length > 25
                                ? testimonial.role.substring(0, 25) + "..."
                                : testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-30 backdrop-blur-sm"
            aria-label="Testimonio anterior"
          >
            <svg
              className="w-7 h-7"
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
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-30 backdrop-blur-sm"
            aria-label="Siguiente testimonio"
          >
            <svg
              className="w-7 h-7"
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
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-primary/30 hover:bg-primary/50"
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
