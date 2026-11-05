import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Sparkles, UserRound } from 'lucide-react'
import { profile } from '../data/profile'
const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: .45 } }
export default function Portfolio() {
 return <div className="portfolio-page">
  <motion.section {...reveal} className="portfolio-hero glass"><span className="pill"><Sparkles size={14}/> MY PORTFOLIO</span><h1>Turning ideas into <em>digital experiences.</em></h1><p>{profile.bio}</p><a href={`mailto:${profile.email}`} className="primary-link">Let's connect <ArrowUpRight size={17}/></a></motion.section>
  <motion.section {...reveal} className="portfolio-section"><h2><UserRound size={22}/> About me</h2><div className="glass section-panel"><p>{profile.about}</p><div className="stats-grid">{profile.stats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></div></motion.section>
  <motion.section {...reveal} className="portfolio-section"><h2><Code2 size={22}/> Skills & Expertise</h2><div className="glass section-panel"><div className="skill-list">{profile.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}</div></div></motion.section>
  <motion.section {...reveal} className="portfolio-section"><h2><BriefcaseBusiness size={22}/> Experience</h2><div className="timeline">{profile.experience.map((e, i) => <div className="timeline-item glass" key={`${e.company}-${i}`}><span className="timeline-period">{e.period}</span><h3>{e.role}</h3><strong>{e.company}</strong><p>{e.description}</p></div>)}</div></motion.section>
  <motion.section {...reveal} className="portfolio-section"><h2><Sparkles size={22}/> Featured Projects</h2><div className="project-grid">{profile.projects.map((p, i) => <a className="project-card glass" key={`${p.title}-${i}`} href={p.url} target="_blank" rel="noopener noreferrer"><div className="project-art"><span>{p.emoji}</span><ArrowUpRight size={20}/></div><div className="project-info"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></a>)}</div></motion.section>
  <motion.section {...reveal} className="contact-card glass"><Mail size={28}/><h2>Have something in mind?</h2><p>Hãy kết nối và cùng nhau tạo nên điều thú vị.</p><a className="primary-link" href={`mailto:${profile.email}`}>Contact me <ArrowUpRight size={18}/></a></motion.section>
 </div>
}
