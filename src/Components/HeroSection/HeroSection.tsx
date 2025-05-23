"use client"
import React from "react";
//import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function HeroSection()  {
  return (
    <>
      <section id="hero" className="relative //Para usar el overlay
      min-h-screen // Para que ocupe al menos toda la altura de la pantalla
      flex flex-col justify-center items-center text-center // Contenido centrado
      p-8 // Padding general
      text-white
      bg-cover // Escala la imagen para cubrir todo el contendor
      bg-center bg-no-repeat // Centra y no repite la imagen si es mas pequena que el contenedor
    "
    >
      <div
        className="absolute inset-0 bg-black opacity-80 z-0" // Cubre toda la sección con opacidad para mejor legibilidad
      ></div>
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Redescubre tu{" "} <span style={{
      backgroundImage: "linear-gradient(90deg, #fb923c 0%, rgba(255, 237, 213, 0.86) 95.83%)",
      WebkitBackgroundClip: "text", // Prefijo para compatibilidad con algunos navegadores (especialmente Webkit)
      backgroundClip: "text",
      color: "transparent",
    }}>Fuerza</span>{" "} <span style={{
      backgroundImage: "linear-gradient(90deg, #fb923c 0%, rgba(255, 237, 213, 0.86) 95.83%)",
      WebkitBackgroundClip: "text", // Prefijo para compatibilidad con algunos navegadores (especialmente Webkit)
      backgroundClip: "text",
      color: "transparent",
    }}>Domina</span> tu Movimiento
        </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg sm:text-xl md:txt-2xl mb-10">
          Transforma tu cuerpo y libera tu máximo potencial físico con <span style={{
      backgroundImage: "linear-gradient(90deg, #fb923c 0%, rgba(255, 237, 213, 0.86) 95.83%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    }}>Ground y Entrenamiento Funcional</span> bajo una metodología ÚNICA
        </p>
        </Reveal>
        <Reveal>
          <p className="mb-10">Prepárate para moverte mejor, sentirte más fuerte y vivir con más energía que nunca</p>
        </Reveal>

        <button 
          className="
            bg-orange-400 hover:bg-orange-600
            text-neutral-50 font-bold
            py-3 px-8 sm:py-4 sm:px-10
            rounded-lg text-lg sm:text-xl
            transition duration-300 ease-in-out
            transform hover:scale-105
            "
        >
          Reserva tu Sesión de Valoración GRATIS
        </button>
      </div>

    </section>
    </>
    
      
  );
};

export default HeroSection;