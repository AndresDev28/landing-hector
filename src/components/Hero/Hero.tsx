"use client"
import React from 'react'
import Link from 'next/link'
import { BackgroundHero } from '../BackgroundHero'

export function Hero() {
  return (
    <>
      <section  id="hero" className="h-screen">
        <BackgroundHero/>
        <div className='absolute inset-0 bg-blackOverlay z-10 flex items-center justify-center text-center'>
          <div className='max-w-3xl px-4'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mt-14 mb-6 leading-tight'>
              Redescubre tu <span className='degradedOrange bg-lightOrange'>Fuerza</span> <span className='degradedOrange bg-lightOrange'>Domina</span> tu Movimiento
            </h1>
            <p className="text-lg sm:text-xl md:txt-2xl mb-8">
              Transforma tu cuerpo y libera tu máximo potencial físico con <span className='degradedOrange bg-lightOrange'>Ground</span> y <span className='degradedOrange bg-lightOrange'>Entrenamiento Funcional</span> bajo una metodología <span className='degradedOrange bg-lightOrange'>Ground</span> y <span className='degradedOrange bg-lightOrange'>ÚNICA</span>
            </p>
            <p className="mb-8">Prepárate para moverte mejor, sentirte más fuerte y vivir con más energía que nunca</p>
            <div className='my-8'>
              <Link href="#contacto" className='px-4 py-3 rounded-md bg-radialOrange'>Reserva tu Sesión de Valoración GRATIS</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
