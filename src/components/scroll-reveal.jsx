'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function ScrollReveal({
  children,
  delay = 0,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-100px',
    amount: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
        filter: 'blur(12px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
          : {
              opacity: 0,
              y: 24,
              filter: 'blur(12px)',
            }
      }
      transition={{
        type: 'spring',
        bounce: 0.25,
        duration: 1.2,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
