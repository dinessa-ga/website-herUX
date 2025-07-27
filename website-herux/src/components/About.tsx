
import React, { useState } from "react";

import heroImg from "../assets/about/about1.jpg";
import mainLogo from "../assets/logo/main logo.png";
import altLogo from "../assets/logo/alt logo.png";

const aboutPages = [
    {
        image: heroImg,
        title: "¿Quiénes somos?",
        text: "Somos HerUX, impulsamos el crecimiento profesional de quienes ejercen UX desde cualquier perfil, creando espacios de aprendizaje, visibilidad y comunidad.  Esta comunidad existe para que nadie que ame el UX se sienta sola en su camino profesional.Aquí aprendemos, crecemos y nos visibilizamos juntas. Bienvenidos a un espacio donde tu historia profesional en UX importa.Aquí creemos en el poder de aprender juntos, visibilizar lo que haces y acompañarte en cada paso para que crezcas sin dejar de ser tú.",
    },
    {
        image: mainLogo,
        title: "Nuestro Equipo",
        text: "Contamos con un equipo multidisciplinario apasionado por la innovación, la inclusión y el crecimiento profesional de las mujeres.",
    },
    {
        image: altLogo,
        title: "Nuestra Visión",
        text: "Aspiramos a ser referentes en la formación y desarrollo de talento femenino en UX, UI y tecnología en Latinoamérica.",
    },
];

const About: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextPage = () => setCurrent((prev) => (prev + 1) % aboutPages.length);
    const prevPage = () => setCurrent((prev) => (prev - 1 + aboutPages.length) % aboutPages.length);

    const { image, title, text } = aboutPages[current];

    return (
        <div className="w-full mx-auto pt-10 bg-base-100 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Conócenos</h2>
            <div className="w-full flex pt-1 md:pt-6 flex-col md:flex-row items-center md:items-stretch">
                <div className="md:basis-[55%] items-center justify-center ">
                    <img
                        src={image}
                        alt={title}
                        className="h-auto"
                    />
                </div>
                <div className="flex-1 md:basis-[38%] p-7 md:p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-primary mb-2 text-left">{title}</h3>
                    <p className="text-base text-base-content text-left mb-4">{text}</p>
                </div>
            </div>
            <div className="flex gap-2 mt-4 w-screen justify-center">
                {aboutPages.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-primary" : "bg-base-300"}`}
                    />
                ))}
            </div>
              <div className="flex gap-4 justify-center mt-2">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={prevPage}
                        aria-label="Anterior"
                    >
                        &#8592;
                    </button>
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={nextPage}
                        aria-label="Siguiente"
                    >
                        &#8594;
                    </button>
                </div>
        </div>
    );
};

export default About;
