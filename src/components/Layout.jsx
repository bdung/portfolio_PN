import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import ThemeSettings from './ThemeSettings'
export default function Layout({ children }) {
 const isPortfolio = useLocation().pathname === '/portfolio'
 return <div className="site-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="site-content"><header className="topbar"><Link to="/" className="brand">{isPortfolio ? <ArrowLeft size={19}/> : <Sparkles size={19}/>}<span>{isPortfolio ? 'Back to Profile' : 'my.space'}</span></Link><ThemeSettings/></header><main>{children}</main><footer>© {new Date().getFullYear()} · Made with care <span>✦</span></footer></div></div>
}
