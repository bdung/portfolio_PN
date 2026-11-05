import { useState } from 'react'
import { Moon, Sun, Palette, Check, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
export default function ThemeSettings() {
  const [open, setOpen] = useState(false)
  const { mode, setMode, palette, setPalette, palettes } = useTheme()
  return <div className="theme-tools">
    <button className="icon-btn" aria-label={mode === 'dark' ? 'Bật chế độ sáng' : 'Bật chế độ tối'} onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{mode === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
    <button className="icon-btn" aria-label="Chọn màu chủ đạo" aria-expanded={open} onClick={() => setOpen(!open)}><Palette size={19}/></button>
    {open && <div className="theme-popover glass"><div className="popover-heading"><strong>Appearance</strong><button className="plain-icon" aria-label="Đóng" onClick={() => setOpen(false)}><X size={17}/></button></div><p>Chọn màu sắc yêu thích</p><div className="palette-options">{palettes.map(p => <button key={p.id} className={`palette-choice ${palette === p.id ? 'selected' : ''}`} onClick={() => setPalette(p.id)} aria-label={`Chọn màu ${p.name}`} title={p.name}><span style={{ background: p.hex }}>{palette === p.id && <Check size={16} color="white"/>}</span><small>{p.name}</small></button>)}</div></div>}
  </div>
}
