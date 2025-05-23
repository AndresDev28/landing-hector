import { useEffect, useRef } from "react"
import { MotionTransitionProps } from "./MotionTransition.types"
import { useAnimation, useInView, motion } from "motion/react"
import { fadeIn } from "@/utils/transitions"

export function MotionTransition(props: MotionTransitionProps) {
  // Desestructuración de las props recibidas
  const {children, className} = props

  // Creación de una referencia (ref) para el div contenedor.
  // Esta ref se usará para detectar cuándo este div entra en el viewport.
  const ref = useRef(null)

  // Hook para detectar si el elemento referenciado (ref) está visible en el viewport.
  // { once: false } significa que la detección se ejecutará cada vez que el elemento entre/salga del viewport,
  // no solo la primera vez. Si quisieras que la animación solo ocurra una vez, usarías { once: true }.
  const isInView = useInView(ref, {once: false})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {

    if(isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
