import './App.css'

const navItems = ['Services', 'Why Us', 'Process', 'Portfolio', 'Testimonials']

const metrics = [
  { value: '120+', label: 'Projects delivered' },
  { value: '92%', label: 'Client retention' },
  { value: '24/7', label: 'Support availability' },
  { value: '8 yrs', label: 'Industry experience' },
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
  },
  {
    name: 'Aural Insights',
    outcome: 'Automated reporting workflows and cut operational overhead by 38%.',
    type: 'Data & automation',
  },
  {
    name: 'PrimeOps Cloud',
    outcome: 'Modernized infrastructure to improve uptime, reduce costs, and simplify deployment.',
    type: 'Cloud migration',
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

const technologies = ['React', 'Node.js', 'Azure', 'AWS', 'AI', 'Design Systems', 'Security', 'Automation']

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">R</div>
          <div>
            <div className="brand-name">ReGoTech Systems</div>
            <div className="brand-tag">Digital Growth Studio</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="primary-button small" href="#contact">
          Book a Call
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Premium technology partner for ambitious brands</p>
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
                  <strong>{metric.value}</strong>
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
                <div className="project-visual" aria-hidden="true" />
                <div className="project-content">
                  <span>{project.type}</span>
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

        <section id="contact" className="cta-panel">
          <div>
            <p className="eyebrow">Let’s build something strong</p>
            <h2>Ready to elevate your digital presence with ReGoTech Systems?</h2>
          </div>
          <a className="primary-button" href="mailto:hello@regotechsystems.com">
            hello@regotechsystems.com
          </a>
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
