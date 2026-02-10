'use client'

import { useEffect, useState } from 'react'

export function useScrollFade({
  offset = 120,
} = {}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY < offset)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return visible
    ? 'opacity-100 translate-y-0 blur-0'
    : 'opacity-0 translate-y-6 blur-md'
}
