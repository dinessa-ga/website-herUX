
import React from "react";

import avatar1 from "../assets/benefits/avatar1.svg";
import avatar2 from "../assets/benefits/avatar1.svg";
import avatar3 from "../assets/benefits/avatar1.svg";
import avatar4 from "../assets/benefits/avatar1.svg";
import avatar5 from "../assets/benefits/avatar1.svg";
import avatar6 from "../assets/benefits/avatar1.svg";

const benefitsData = [
  {
    image: avatar1,
    title: "Desarrollo personal",
    text: "Brindamos charlas de habilidades blandas enfocada en lo personal y profesional con especialistas en el área."
  },
  {
    image: avatar2,
    title: "Desarrollo profesional",
    text: "Brindamos participación dentro o fuera de la comunidad desde el área de tu interés. Asímismo tendrás la apertura de ser mentor para un junior, o ponente en alguna charla."

  },
  {
    image: avatar3,
    title: "Beneficio 3",
    text:"Descripción breve del beneficio 3."
  },
  {
    image: avatar4,
    title: "Beneficio 4",
    text: "Descripción breve del beneficio 4."
  },
  {
    image: avatar5,
    title: "Beneficio 5",
    text: "Descripción breve del beneficio 5."
  },
  {
    image: avatar6,
    title: "Beneficio 6",
    text: "Descripción breve del beneficio 6."
  }
];


const Benefits: React.FC = () => {
  return (
    <section className="w-full py-10 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Beneficios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, idx) => (
            <div
              className="flex flex-col-2 gap-4 p-4 items-center bg-primary-content/25 border border-gray-300 rounded-lg shadow-md  h-full transition-transform hover:scale-105"
              key={idx}
            >
              <div className="w-14 h-14 m-2 flex items-center justify-center bg-base-100 rounded-full overflow-hidden">
                <img src={benefit.image}  className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 flex flex-col text-left">
                <h3 className="text-lg font-semibold text-accent mb-2">{benefit.title}</h3>
                <p className="text-base text-base-content">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
