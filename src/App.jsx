import './App.css'
import { useEffect, useState } from 'react'
import ContactForm from './components/contact/ContactForm'
import darkLogo from './assets/logos/ReGoTech.png'
import lightLogo from './assets/logos/ReGoTech2.png'

const navItems = ['Services', 'Why Us', 'Process', 'Portfolio', 'Testimonials']

const metrics = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 92, suffix: '%', label: 'Client retention' },
  { value: 24, suffix: '/7', label: 'Support availability' },
  { value: 8, suffix: ' yrs', label: 'Industry experience' },
]

const services = [
  {
    title: 'Custom Software Development',
    text: 'Scalable web, mobile, and enterprise applications built for speed, security, and measurable business outcomes.',
    tag: 'Product engineering',
  },
  {
    title: 'Cloud & DevOps',
    text: 'Modern cloud architecture, CI/CD automation, and observability solutions that keep your systems fast and reliable.',
    tag: 'Infrastructure',
  },
  {
    title: 'UI/UX Design Systems',
    text: 'Premium digital experiences designed to strengthen trust, improve conversion, and simplify complex user journeys.',
    tag: 'Design',
  },
  {
    title: 'AI & Automation',
    text: 'Intelligent workflows, automation pipelines, and AI-powered experiences that reduce manual effort and unlock growth.',
    tag: 'Innovation',
  },
  {
    title: 'Cybersecurity Consulting',
    text: 'Security-first architecture and operational guidance to help protect your brand, data, and digital assets.',
    tag: 'Security',
  },
  {
    title: 'Business Intelligence',
    text: 'Dashboards, reporting systems, and data strategy that turn raw data into confident decisions.',
    tag: 'Insights',
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'We map your goals, pain points, and opportunities to define the right digital roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'We shape the product experience and technical architecture around speed, clarity, and scale.',
  },
  {
    number: '03',
    title: 'Develop',
    text: 'Our team builds with quality in mind, using clean code, strong QA, and dependable delivery.',
  },
  {
    number: '04',
    title: 'Optimize',
    text: 'We monitor adoption, improve performance, and help your platforms evolve with your business.',
  },
]

const projects = [
  {
    name: 'Nexa Commerce',
    outcome: 'Boosted online sales by 41% with a redesigned e-commerce platform.',
    type: 'E-commerce transformation',
    metric: '+41% sales uplift',
    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.88), rgba(34, 211, 238, 0.7))',
    tags: ['UX', 'Checkout', 'Growth'],
  },
  {
    name: 'Aural Insights',
    outcome: 'Automated reporting workflows and cut operational overhead by 38%.',
    type: 'Data & automation',
    metric: '38% faster ops',
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.82), rgba(45, 212, 191, 0.7))',
    tags: ['Automation', 'Insights', 'Dashboard'],
  },
  {
    name: 'PrimeOps Cloud',
    outcome: 'Modernized infrastructure to improve uptime, reduce costs, and simplify deployment.',
    type: 'Cloud migration',
    metric: '99.9% uptime',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.72))',
    tags: ['Cloud', 'DevOps', 'Reliability'],
  },
]

const testimonials = [
  {
    quote:
      'ReGoTech Systems helped us turn a fragmented digital presence into a polished, high-converting platform. Their team feels like an extension of our business.',
    name: 'Riya Shah',
    role: 'Operations Director, NorthPeak',
  },
  {
    quote:
      'The communication, speed, and quality were exceptional. We got a premium product that finally matched the ambition of our brand.',
    name: 'Aarav Mehta',
    role: 'Founder, BlueSignal Labs',
  },
]

const companyHighlights = [
  {
    title: 'Strategy-led delivery',
    text: 'We align product vision, customer needs, and revenue goals before a single line of code is written.',
  },
  {
    title: 'Production-ready engineering',
    text: 'Every platform is built with performance, stability, security, and maintainability in mind.',
  },
  {
    title: 'Growth-focused design',
    text: 'Our UX systems are designed to increase confidence, reduce friction, and support conversion.',
  },
]

const technologies = ['React', 'Node.js', 'Azure', 'AWS', 'AI', 'Design Systems', 'Security', 'Automation']

const industries = ['Startups', 'SaaS', 'Healthcare', 'Fintech', 'E-commerce', 'Agencies']

function AnimatedCounter({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let animationFrameId = null
    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / 1200, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const nextValue = Math.round(value * easedProgress)

      setDisplayValue(nextValue)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [value])

  return <strong>{displayValue}{suffix}</strong>
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('regotech-theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    document.body.style.colorScheme = theme
    window.localStorage.setItem('regotech-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`page-shell ${theme === 'light' ? 'theme-light' : ''}`}>
      <header className="topbar">
        <div className="brand-wrap">
          <img
            className="brand-logo"
            src={theme === 'light' ? lightLogo : darkLogo}
            alt="ReGoTech Systems logo"
          />
          <div>
            <div className="brand-name">ReGoTech Systems</div>
            <div className="brand-tag">Digital Growth Studio</div>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className={`theme-toggle ${theme === 'light' ? 'light' : ''}`}
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle dark and light theme"
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-icon sun" aria-hidden="true">
                ☀
              </span>
              <span className="theme-toggle-icon moon" aria-hidden="true">
                ☾
              </span>
              <span className="theme-toggle-thumb" />
            </span>
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <a className="primary-button small" href="#contact">
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Premium technology partner for ambitious brands</p>
            <div className="hero-badges">
              <span className="hero-badge">Available for Q4 launches</span>
              <span className="hero-badge alt">8+ years of digital delivery</span>
            </div>
            <h1>
              We build <span>smarter digital systems</span> that help businesses grow faster.
            </h1>
            <p className="hero-text">
              ReGoTech Systems combines strategy, engineering, design, and cloud expertise to create
              customer-first experiences and high-performance platforms for the modern digital economy.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#contact">
                Start Your Project
              </a>
              <a className="secondary-button" href="#portfolio">
                View Work
              </a>
            </div>

            <div className="metrics-row">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Product dashboard preview">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <div>
                  <span className="status-dot" />
                  <span>Growth Dashboard</span>
                </div>
                <span className="pill">Live</span>
              </div>

              <div className="chart-grid">
                <div className="chart-block large">
                  <div className="chart-labels">
                    <span>Revenue</span>
                    <strong>$148.2K</strong>
                  </div>
                  <div className="line-chart">
                    <span className="line one" />
                    <span className="line two" />
                  </div>
                </div>

                <div className="mini-grid">
                  <div className="mini-card">
                    <span>Conversion</span>
                    <strong>+24.6%</strong>
                  </div>
                  <div className="mini-card">
                    <span>Efficiency</span>
                    <strong>91%</strong>
                  </div>
                </div>
              </div>

              <div className="progress-list">
                <div>
                  <label>Product velocity</label>
                  <div className="progress-bar"><span style={{ width: '88%' }} /></div>
                </div>
                <div>
                  <label>Platform reliability</label>
                  <div className="progress-bar"><span style={{ width: '96%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip" aria-label="Brand trust indicators">
          <span>Trusted by teams building the next big thing</span>
          <div className="logo-row">
            {['Startups', 'Scale-ups', 'SaaS', 'Agencies', 'Enterprises'].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="industry-strip" aria-label="Industries served">
          <p className="eyebrow">Industries we power</p>
          <div className="industry-list">
            {industries.map((item) => (
              <div key={item} className="industry-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="capabilities-section">
          <div className="section-header narrow">
            <p className="eyebrow">Built for momentum</p>
            <h2>We combine product thinking, engineering expertise, and premium design execution.</h2>
          </div>

          <div className="capabilities-grid">
            {companyHighlights.map((highlight) => (
              <div className="highlight-card" key={highlight.title}>
                <div className="highlight-icon">✦</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>

          <div className="tech-stack" aria-label="Technology stack and capabilities">
            {technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-header">
            <p className="eyebrow">What we do</p>
            <h2>Premium solutions designed for growth, trust, and long-term value.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why-us" className="content-section alt-section">
          <div className="section-header narrow">
            <p className="eyebrow">Why ReGoTech Systems</p>
            <h2>We bring strategy, craftsmanship, and execution under one roof.</h2>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <span className="feature-icon">01</span>
              <h3>Business-first thinking</h3>
              <p>Every design and engineering choice starts with your goals, user needs, and commercial outcomes.</p>
            </div>
            <div className="feature-box">
              <span className="feature-icon">02</span>
              <h3>Premium delivery standards</h3>
              <p>We build polished experiences, maintainable systems, and high-performing workflows that are ready to scale.</p>
            </div>
            <div className="feature-box">
              <span className="feature-icon">03</span>
              <h3>Clear collaboration</h3>
              <p>From kickoff to launch, you get transparent communication, measurable milestones, and consistent updates.</p>
            </div>
          </div>
        </section>

        <section id="process" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Our process</p>
            <h2>A working model that keeps momentum high and outcomes clear.</h2>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <div className="process-card" key={step.number}>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="content-section alt-section">
          <div className="section-header">
            <p className="eyebrow">Selected results</p>
            <h2>Work that combines business impact with exceptional execution.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual" aria-hidden="true" style={{ background: project.gradient }}>
                  <div className="project-visual-overlay">
                    <span className="project-badge">{project.type}</span>
                    <strong className="project-metric">{project.metric}</strong>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="content-section">
          <div className="section-header narrow">
            <p className="eyebrow">Client feedback</p>
            <h2>Partners trust us to turn ambitious ideas into reliable digital growth.</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="quote">“{testimonial.quote}”</p>
                <div className="person-block">
                  <div className="avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <p className="eyebrow">Need a stronger digital edge?</p>
            <h2>Turn strategy into a premium product experience that customers trust and teams love.</h2>
          </div>
          <a className="primary-button" href="#contact">
            Schedule a Discovery Call
          </a>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-header narrow">
            <p className="eyebrow">Let’s build something strong</p>
            <h2>Ready to elevate your digital presence with ReGoTech Systems?</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-details">
              <h3>Tell us about your next project</h3>
              <p>
                We help brands turn ideas into digital systems that feel premium, build trust, and
                scale with confidence.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>Email</span>
                  <a href="mailto:hello@regotechsystems.com">hello@regotechsystems.com</a>
                </div>
                <div className="contact-item">
                  <span>Response time</span>
                  <strong>Within 24 hours</strong>
                </div>
                <div className="contact-item">
                  <span>Focus</span>
                  <strong>Strategy, Design, Engineering, Growth</strong>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-wrap">
          <div className="brand-mark small">R</div>
          <div>
            <div className="brand-name">ReGoTech Systems</div>
          </div>
        </div>
        <div className="footer-links">
          {['Services', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="copyright">© {new Date().getFullYear()} ReGoTech Systems. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
