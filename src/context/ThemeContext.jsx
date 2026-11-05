import { createContext, useContext, useEffect, useState } from 'react'

export const palettes = [
  { id: 'forest', name: 'Forest', hex: '#1a674a', rgb: '26, 103, 74' },
  { id: 'emerald', name: 'Emerald', hex: '#07966b', rgb: '7, 150, 107' },
  { id: 'sage', name: 'Sage', hex: '#78936c', rgb: '120, 147, 108' },
  { id: 'ocean', name: 'Ocean', hex: '#2877a1', rgb: '40, 119, 161' },
  { id: 'violet', name: 'Violet', hex: '#8063ba', rgb: '128, 99, 186' },
]
const ThemeContext = createContext(null)
function getStored(key, fallback) {
  try { return localStorage.getItem(key) || fallback } catch { return fallback }
}
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => getStored('portfolio-mode', 'dark'))
  const [palette, setPalette] = useState(() => getStored('portfolio-palette', 'forest'))
  const active = palettes.find(p => p.id === palette) || palettes[0]
  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.documentElement.style.setProperty('--accent', active.hex)
    document.documentElement.style.setProperty('--accent-rgb', active.rgb)
    try { localStorage.setItem('portfolio-mode', mode); localStorage.setItem('portfolio-palette', active.id) } catch { /* storage disabled */ }
  }, [mode, active])
  return <ThemeContext.Provider value={{ mode, setMode, palette: active.id, setPalette, palettes }}>{children}</ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)
