import React, { useState } from "react";
import values from "../assets/form/Blush Illustration.png";
const VolunteerForm: React.FC = () => {
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        mensaje: ""
    });

    const [errors, setErrors] = useState({
        nombre: false,
        correo: false,
        mensaje: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Limpiar error si se empieza a escribir
        setErrors({ ...errors, [name]: false });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            nombre: form.nombre.trim() === "",
            correo: !/\S+@\S+\.\S+/.test(form.correo),
            mensaje: form.mensaje.trim() === ""
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (!hasErrors) {
            // Aquí se puede hacer el envío
            console.log("Formulario enviado", form);
            alert("Gracias por escribirno ✨");
        }
    };

    return (
        <section className="w-full py-10 bg-base-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
                {/* Texto lateral */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-primary mb-4">Quiero ser voluntario</h2>
                    <p className="text-base text-base-content">
                        ¿O quizás quieres ser sponsor en algún evento de la comunidad?
                        <br />
                        ¡Escríbenos!
                    </p>
                      <img 
        src={values} 
        alt="Ilustración voluntariado" 
        className="w-full max-w-sm mx-auto"
    />
                </div>

                {/* Formulario */}
                <form
                    className="md:w-1/2 space-y-5"
                    onSubmit={handleSubmit}
                >
                    {/* Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-base-content mb-1">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none ${errors.nombre ? "border-red-500" : "border-base-300"}`}
                        />
                        {errors.nombre && (
                            <p className="text-red-500 text-sm">Este campo es obligatorio</p>
                        )}
                    </div>

                    {/* Correo */}
                    <div>
                        <label className="block text-sm font-medium text-base-content mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            name="correo"
                            value={form.correo}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none ${errors.correo ? "border-red-500" : "border-base-300"}`}
                        />
                        {errors.correo && (
                            <p className="text-red-500 text-sm">Correo no válido</p>
                        )}
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-sm font-medium text-base-content mb-1">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full p-2 border rounded-md focus:outline-none ${errors.mensaje ? "border-red-500" : "border-base-300"}`}
                        />
                        {errors.mensaje && (
                            <p className="text-red-500 text-sm">Este campo es obligatorio</p>
                        )}
                    </div>

                    {/* Botón */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-focus transition-colors"
                        >
                            Contáctanos
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default VolunteerForm;
