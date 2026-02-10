'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [theme, setLocalTheme] = useState(null)

  useEffect(() => {
    setLocalTheme(resolvedTheme)
  }, [resolvedTheme])

  if (!theme) {
    return (
      <Button variant="outline" size="icon" disabled />
    )
  }

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setLocalTheme(next)
    setTheme(next)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggle}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
