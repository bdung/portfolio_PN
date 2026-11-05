import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, MapPin, Facebook, Instagram, Linkedin, Github, MessageCircle, UserRound } from 'lucide-react'
import { profile } from '../data/profile'
const icons = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, github: Github, message: MessageCircle }
export default function Home() {
 return <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="home-page">
  <section className="profile-card glass"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR CONNECTIONS</div><div className="avatar">{profile.avatar ? <img src={profile.avatar} alt={`Ảnh đại diện ${profile.name}`}/> : <UserRound size={58} strokeWidth={1.3}/>}</div><div className="hello">Hello, I'm</div><h1>{profile.name}</h1><p className="role">{profile.role}</p><p className="bio">{profile.bio}</p><div className="location"><MapPin size={15}/>{profile.location}</div></section>
  <section className="links-section"><div className="section-heading"><span>CONNECT WITH ME</span><span className="line"/></div><div className="social-list">{profile.socials.map(s => { const Icon = icons[s.icon] || MessageCircle; return <a className="social-link glass" key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"><span className="social-icon"><Icon size={21}/></span><span>{s.label}</span><ArrowUpRight className="social-arrow" size={19}/></a> })}</div></section>
  <Link className="portfolio-cta" to="/portfolio"><span><small>EXPLORE MY WORK</small><strong>View Portfolio</strong></span><span className="cta-arrow"><ArrowRight size={23}/></span></Link>
  <div className="bottom-note">DESIGNED TO BE DIFFERENT <span>✳</span></div>
 </motion.div>
}
