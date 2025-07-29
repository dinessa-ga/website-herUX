
import React, { useState } from "react";

import aboutUs from "../assets/about/about1.jpg";
import mission from "../assets/about/about1.jpg";
import vision from "../assets/about/about1.jpg";
import values from "../assets/about/about1.jpg";

const aboutPages = [
    {
        image: aboutUs,
        title: "¿Quiénes somos?",
        text: "Somos HerUX, impulsamos el crecimiento profesional de quienes ejercen UX desde cualquier perfil, creando espacios de aprendizaje, visibilidad y comunidad.  Esta comunidad existe para que nadie que ame el UX se sienta sola en su camino profesional. Aquí aprendemos, crecemos y nos visibilizamos juntas. Bienvenidos a un espacio donde tu historia profesional en UX importa.Aquí creemos en el poder de aprender juntos, visibilizar lo que haces y acompañarte en cada paso para que crezcas sin dejar de ser tú.",
    },
    {
        image: mission,
        title: "Misión",
        text: "Empoderar a personas que, como Olga, enfrentan barreras para desarrollarse profesionalmente, brindándoles una comunidad solidaria, oportunidades de aprendizaje y un entorno donde puedan crecer, compartir y sentirse acompañadas. Creemos en el poder de la colaboración, en el valor de cada historia y en que ningún talento debe quedar en la sombra por falta de oportunidades o apoyo. Trabajamos para encender esa chispa que impulsa a cada persona a alcanzar su verdadero potencial.",
    },
    {
        image: vision,
        title: "Visión",
        text: "Construir una red sólida y vibrante donde miles de personas, sin importar su punto de partida, puedan acceder a las herramientas, el acompañamiento y las conexiones necesarias para transformar sus vidas profesionales. Soñamos con un futuro en el que crecer profesionalmente no dependa de privilegios, sino del deseo de aprender, compartir y avanzar junto a otros. Queremos ser ese faro que guía, motiva e impulsa, generando un impacto real en las trayectorias individuales y en la sociedad en su conjunto",
    },
    {
        image: values,
        title: "Valores",
        text: "Apoyo mutuo, empatía, aprendizaje continuo, y transparencia.",
    }
];

const About: React.FC = () => {

    const [current, setCurrent] = useState(0);

    const nextPage = () => setCurrent((prev) => (prev + 1) % aboutPages.length);
    const prevPage = () => setCurrent((prev) => (prev - 1 + aboutPages.length) % aboutPages.length);

    // Navegación con teclado y touch
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                prevPage();
            } else if (e.key === "ArrowRight") {
                nextPage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 50;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };
        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            const distance = touchEndX - touchStartX;
            if (distance > minSwipeDistance) {
                // Swipe derecha
                prevPage();
            } else if (distance < -minSwipeDistance) {
                // Swipe izquierda
                nextPage();
            }
        };
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    const { image, title, text } = aboutPages[current];

    return (
        <div className="w-full mx-auto pt-10 bg-base-100 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-primary text-center">Conócenos</h2>
            <div className="w-full flex pt-3 md:pt-6 flex-col md:flex-row items-center md:items-stretch">
                <div className="md:basis-[50%] items-center justify-center ">
                    <img
                        src={image}
                        alt={title}
                        className="h-[400px] w-full object-cover"
                    />
                </div>
                <div className="flex-1 md:basis-[38%] p-7 md:p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-primary mb-4  text-left">{title}</h3>
                    <p className="text-base text-base-content text-left mb-4">{text}</p>
                </div>
            </div>
            <div className="flex gap-4 md:gap-6 mt-4 w-screen justify-center">
                {aboutPages.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-primary" : "bg-base-300"}`}
                    />
                ))}
            </div>
            {/* Navegación con flechas del teclado */}
        </div>
    );
};

export default About;
