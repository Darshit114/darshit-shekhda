import { useEffect, useState } from 'react'
import { site, hero, services, work, steps, engagements, stack, about } from './content'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

const ROUTES = [
  { d: 'M100 172 H254 C280 172 280 72 300 72', begin: '0s', dur: '3.2s' },
  { d: 'M100 172 H300', begin: '1.1s', dur: '2.6s' },
  { d: 'M100 172 H254 C280 172 280 272 300 272', begin: '2.1s', dur: '3.2s' },
]

const NODES = [
  { x: 16, y: 150, w: 84, label: 'Client' },
  { x: 150, y: 150, w: 104, label: 'API layer' },
  { x: 300, y: 50, w: 124, label: 'Data service' },
  { x: 300, y: 150, w: 124, label: 'Search service' },
  { x: 300, y: 250, w: 124, label: 'Batch jobs' },
]

function FlowDiagram() {
  const reduced = usePrefersReducedMotion()
  return (
    <figure className="flow">
      <svg
        viewBox="0 0 440 370"
        role="img"
        aria-label="Diagram of a request moving from a client through an API layer to three backend services, with Prometheus and Grafana monitoring all of them."
      >
        {ROUTES.map((r) => (
          <path key={r.d} d={r.d} className="flow-line" />
        ))}
        {NODES.map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width={n.w} height="44" rx="6" className="flow-node" />
            <text x={n.x + n.w / 2} y={n.y + 27} textAnchor="middle" className="flow-text">
              {n.label}
            </text>
          </g>
        ))}
        <rect x="16" y="318" width="408" height="36" rx="6" className="flow-monitor" />
        <text x="220" y="341" textAnchor="middle" className="flow-text">
          Prometheus and Grafana watch every service
        </text>
        {!reduced &&
          ROUTES.map((r) => (
            <circle key={r.begin} r="4.5" className="flow-pulse">
              <animateMotion path={r.d} dur={r.dur} begin={r.begin} repeatCount="indefinite" />
            </circle>
          ))}
      </svg>
      <figcaption>A request path built on non-blocking services, with metrics on every hop.</figcaption>
    </figure>
  )
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top">
        {site.name}
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
      </nav>
      <a className="btn btn-small" href="#contact">
        Contact
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-role">{site.title}</p>
        <h1>{hero.headline}</h1>
        <p className="lede">{hero.lede}</p>
        <div className="actions">
          <a className="btn" href="#contact">
            {hero.primaryCta}
          </a>
          <a className="btn btn-ghost" href="#work">
            {hero.secondaryCta}
          </a>
        </div>
        <ul className="facts" aria-label="Core technologies">
          {hero.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <FlowDiagram />
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <h2 id="services-h">How I can help</h2>
      <div className="service-grid">
        {services.map((s) => (
          <article key={s.title} className="service">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <h2 id="work-h">Past work</h2>
      <p className="section-note">
        Client names are kept general out of respect for confidentiality. I am happy to talk through details on a call.
      </p>
      <div className="cases">
        {work.map((w) => (
          <article key={w.title} className="case">
            <div className="case-head">
              <h3>{w.title}</h3>
              <p className="case-client">{w.client}</p>
              <ul className="tags" aria-label="Technologies used">
                {w.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="case-body">
              <p>
                <strong>The problem.</strong> {w.problem}
              </p>
              <div>
                <strong>What I did.</strong>
                <ul className="did">
                  {w.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>The result.</strong> {w.result}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-h">
      <h2 id="process-h">How we would work together</h2>
      <ol className="steps">
        {steps.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <h3 className="sub-h">Ways to engage</h3>
      <div className="engage">
        {engagements.map((e) => (
          <div key={e.title}>
            <h4>{e.title}</h4>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-h">
      <div>
        <h2 id="about-h">About me</h2>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="prose">
            {p}
          </p>
        ))}
      </div>
      <div className="stack">
        <h3 className="sub-h">Tools I use</h3>
        {stack.map((g) => (
          <div key={g.group} className="stack-group">
            <h4>{g.group}</h4>
            <p>{g.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const subject = encodeURIComponent('Project enquiry')
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-h">
      <div>
        <h2 id="contact-h">Tell me about your project</h2>
        <p className="prose">
          Email me a few lines about what you are building or fixing: your current setup, what you want to change, and any
          deadline. I will reply within {site.replyWithin} with questions or a suggested next step.
        </p>
        <div className="actions">
          <a className="btn" href={`mailto:${site.email}?subject=${subject}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">
            Message on LinkedIn
          </a>
        </div>
      </div>
      <dl className="contact-list">
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/darshit-shekhda
            </a>
          </dd>
        </div>
        {site.phone && (
          <div>
            <dt>Phone and WhatsApp</dt>
            <dd>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
            </dd>
          </div>
        )}
        <div>
          <dt>Location</dt>
          <dd>{site.location}</dd>
        </div>
      </dl>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>
          <a href={`mailto:${site.email}`}>Email</a> &nbsp;
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  )
}
