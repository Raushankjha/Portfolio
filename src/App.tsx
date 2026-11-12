import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Code2, Layers3, Database, Workflow, MapPin, Terminal, CheckCircle2 } from "lucide-react";
import { profile, experience, projects, skillGroups, coreConcepts, softSkills, education, achievements } from "./data";
import Reveal, { revealVariants } from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Button from "./components/Button";
import ResumeLink from "./components/ResumeLink";

function App() {
  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />

      <main>
        <section className="hero container" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb orb-one" aria-hidden="true" />
          <div className="hero-orb orb-two" aria-hidden="true" />
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="eyebrow" variants={revealVariants}><span className="status-dot" /> FULL STACK DEVELOPER <span className="eyebrow-line" /></motion.div>
            <motion.h1 variants={revealVariants}>Building useful<br/>software with <span className="gradient-text">purpose.</span></motion.h1>
            <motion.p className="hero-lead" variants={revealVariants}>I'm <strong>{profile.name}</strong> — a full stack developer crafting secure, scalable enterprise applications and thoughtful digital experiences.</motion.p>
            <motion.div className="hero-actions" variants={revealVariants}>
              <Button href="#projects">Explore my work <ArrowDown size={16}/></Button>
              <ResumeLink className="button button-ghost"><Download size={16}/> Download resume</ResumeLink>
            </motion.div>
            <motion.div className="hero-meta" variants={revealVariants}><span><MapPin size={14}/>{profile.location}</span><span className="meta-divider" /><span><span className="status-dot" /> Open to opportunities</span></motion.div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
            <div className="visual-label"><span>PROFILE.TS</span><span className="window-dots"><i/><i/><i/></span></div>
            <div className="code-panel">
              <div className="code-line"><span className="line-no">01</span><span><b className="syntax-purple">const</b> <b className="syntax-blue">developer</b> = {'{'}</span></div>
              <div className="code-line indent"><span className="line-no">02</span><span><b className="syntax-cyan">name</b>: <b className="syntax-green">"Raushan Kumar Jha"</b>,</span></div>
              <div className="code-line indent"><span className="line-no">03</span><span><b className="syntax-cyan">focus</b>: <b className="syntax-green">"Full Stack"</b>,</span></div>
              <div className="code-line indent"><span className="line-no">04</span><span><b className="syntax-cyan">stack</b>: [</span></div>
              <div className="code-line indent2"><span className="line-no">05</span><span><b className="syntax-green">"React"</b>, <b className="syntax-green">"TypeScript"</b>,</span></div>
              <div className="code-line indent2"><span className="line-no">06</span><span><b className="syntax-green">"Node.js"</b>, <b className="syntax-green">"PostgreSQL"</b></span></div>
              <div className="code-line indent"><span className="line-no">07</span><span>],</span></div>
              <div className="code-line indent"><span className="line-no">08</span><span><b className="syntax-cyan">mission</b>: <b className="syntax-green">"Build with impact"</b></span></div>
              <div className="code-line"><span className="line-no">09</span><span>{'}'}<span className="typing-caret">▍</span></span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={16}/><span><b>Frontend</b><small>React · TypeScript</small></span></div>
            <div className="floating-chip chip-bottom"><Database size={16}/><span><b>Backend & Data</b><small>Node · PostgreSQL</small></span></div>
          </motion.div>
          <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><span className="scroll-track"><i /></span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <Reveal><div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>Engineering thoughtful<br/><span className="muted-heading">digital experiences.</span></h2></div></Reveal>
            <div className="about-layout">
              <Reveal className="about-intro"><p className="large-copy">I connect the dots between <span className="text-accent">great user experiences</span> and dependable backend systems.</p><p className="body-copy">{profile.summary}</p><div className="about-links"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}<ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={14}/></a></div></Reveal>
              <Reveal className="about-cards"><div className="mini-card"><span className="mini-icon"><Layers3 size={19}/></span><h3>End-to-end ownership</h3><p>From intuitive React interfaces to APIs, database design, and enterprise integrations.</p></div><div className="mini-card"><span className="mini-icon"><Workflow size={19}/></span><h3>Workflow expertise</h3><p>Approval systems, multi-tenant SaaS, secure access control, and process automation.</p></div><div className="mini-card"><span className="mini-icon"><Database size={19}/></span><h3>Performance-minded</h3><p>Query tuning, pagination, reusable components, and responsive application delivery.</p></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <Reveal><div className="section-heading row-heading"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>Where I've <span className="muted-heading">made an impact.</span></h2></div><p className="heading-aside">A path shaped by product ownership, collaboration, and solving practical engineering challenges.</p></div></Reveal>
            <div className="timeline">{experience.map((job, index) => <Reveal key={job.company} className="timeline-item"><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div className="timeline-card"><div className="timeline-top"><div><h3>{job.title}</h3><div className="company-name">{job.company}{job.location && <span> · {job.location}</span>}</div></div><span className="period">{job.period}</span></div><p className="job-intro">{job.intro}</p><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul><div className="tag-list">{job.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div></div></Reveal>)}</div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <Reveal><div className="section-heading row-heading"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects built for <span className="muted-heading">real workflows.</span></h2></div><p className="heading-aside">Enterprise experiences and SaaS systems focused on reliability, clarity, and business outcomes.</p></div></Reveal>
            <div className="project-grid">{projects.map((project, i) => <Reveal key={project.name} className={`project-card ${project.featured ? "project-featured" : ""}`}><div className={`project-art art-${i + 1}`}><div className="art-top"><span>{project.type.toUpperCase()}</span><span>0{i + 1}</span></div><div className="art-window"><div className="art-window-head"><span className="art-dots">● ● ●</span><span>workspace / overview</span><span>•••</span></div><div className="art-dashboard"><div className="art-sidebar"><i/><i/><i/><i/></div><div className="art-content"><div className="art-skeleton wide"/><div className="art-skeleton medium"/><div className="art-stats"><i/><i/><i/></div><div className="art-table"><i/><i/><i/><i/></div></div></div></div><div className="art-caption"><span>{project.name}</span><ArrowUpRight size={20}/></div></div><div className="project-info"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><ul className="project-details">{project.details.map(d => <li key={d}><CheckCircle2 size={14}/>{d}</li>)}</ul><div className="tag-list">{project.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div></div></Reveal>)}</div>
            <p className="projects-footnote">Project descriptions are based on professional experience listed in my resume. Source code and public demos are not linked where they are not publicly available.</p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <Reveal><div className="section-heading"><span className="section-kicker">04 / TOOLKIT</span><h2>Tools for turning<br/><span className="muted-heading">ideas into products.</span></h2></div></Reveal>
            <div className="skills-grid">{skillGroups.map((group, i) => <Reveal key={group.title} className="skill-card"><div className="skill-card-head"><span className="skill-number">0{i + 1}</span>{i === 0 ? <Code2/> : i === 1 ? <Terminal/> : i === 2 ? <Database/> : <Workflow/>}</div><h3>{group.title}</h3><p>{group.note}</p><div className="tag-list">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>{i === skillGroups.length - 1 && <><div className="soft-skills-list"><p>Core concepts</p><div className="tag-list">{coreConcepts.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div><div className="soft-skills-list"><p>Soft skills</p><div className="tag-list">{softSkills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div></>}</Reveal>)}</div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container education-layout">
            <Reveal><div><span className="section-kicker">05 / EDUCATION & RECOGNITION</span><h2>Always learning.<br/><span className="muted-heading">Always building.</span></h2></div></Reveal>
            <Reveal className="education-content"><div className="education-card"><div className="education-icon">ED</div><div><span className="period">{education.period}</span><h3>{education.school}</h3><p>{education.degree}</p><small>{education.detail}</small></div></div><div className="achievement-list">{achievements.map(item => <div key={item} className="achievement"><CheckCircle2 size={17}/><p>{item}</p></div>)}</div></Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true"/>
          <div className="container contact-inner">
            <Reveal><span className="section-kicker">06 / CONTACT</span><h2>Have a good problem<br/>to <span className="gradient-text">solve together?</span></h2><p>I'm always happy to connect about interesting products, engineering challenges, and opportunities to build something meaningful.</p><Button className="contact-button" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17}/></Button><div className="social-row"><a href={`mailto:${profile.email}`}><Mail size={17}/>Email</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a><a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17}/>LeetCode</a></div></Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
export default App;