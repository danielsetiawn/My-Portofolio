import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/DNL.jpeg';

const roles = ["Designer.", "Developer.", "Problem Solver."];

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 100);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero-section w-100 min-vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm Daniel Setiawan</p>
        <h1 className="hero-title">
          <span className="hero-typed">{displayed}</span>
          <span className="hero-cursor">|</span>
        </h1>
        <p className="hero-sub">Computer Science undergraduate at BINUS University</p>
      </div>
    </section>
  );
};

const services = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Projects",
  "Open Source Collab",
  "Internship & Work",
];

const MarqueeRow = () => (
  <div className="lc-row">
    <div className="lc-row-bg" />
    <div className="lc-marquee-viewport">
      <div className="lc-marquee-track">
        {[0, 1, 2, 3].map((s) => (
          <span key={s} className="lc-marquee-set" aria-hidden={s > 0 ? true : undefined}>
            {services.map((label, i) => (
              <a key={i} href="mailto:daniel100setiawan@gmail.com?subject=Let's work together">
                {label}<span className="sep">✦</span>
              </a>
            ))}
          </span>
        ))}
      </div>
    </div>
    <span className="lc-row-arrow">↗</span>
  </div>
);

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates, a nihil impedit voluptatibus hic ipsa doloribus enim dolorum, quae dolor necessitatibus, fugit labore aut aperiam aliquam ut! Optio, animi?",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: null,
    github: "https://github.com/danielsetiawn",
    live: "#",
  },
  {
    num: "02",
    title: "Task Management App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates, a nihil impedit voluptatibus hic ipsa doloribus enim dolorum, quae dolor necessitatibus, fugit labore aut aperiam aliquam ut! Optio, animi?",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    image: null,
    github: "https://github.com/danielsetiawn",
    live: "#",
  },
  {
    num: "03",
    title: "AI Chat Interface",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates, a nihil impedit voluptatibus hic ipsa doloribus enim dolorum, quae dolor necessitatibus, fugit labore aut aperiam aliquam ut! Optio, animi?",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    image: null,
    github: "https://github.com/danielsetiawn",
    live: null,
  },
  {
    num: "04",
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates, a nihil impedit voluptatibus hic ipsa doloribus enim dolorum, quae dolor necessitatibus, fugit labore aut aperiam aliquam ut! Optio, animi?",
    tags: ["React", "Bootstrap", "CSS Animations"],
    image: null,
    github: "https://github.com/danielsetiawn",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="ps-section">
      <div className="ps-header">
        <p className="ps-eyebrow">— Selected Work</p>
        <h2 className="ps-title">My Projects</h2>
      </div>

      <div className="ps-list">
        {projects.map((p, i) => {
          const imgBlock = (
            <div className="ps-img-wrap">
              {p.image
                ? <img src={p.image} alt={p.title} className="ps-img" />
                : <div className="ps-img-placeholder" />}
            </div>
          );
          const metaBlock = (
            <div className="ps-item-meta">
              <span className="ps-item-num">{p.num}</span>
              <h3 className="ps-item-title">{p.title}</h3>
              <p className="ps-item-desc">{p.desc}</p>
              <div className="ps-item-footer">
                <div className="ps-tags">
                  {p.tags.map((t, j) => <span key={j} className="ps-tag">{t}</span>)}
                </div>
              </div>
            </div>
          );

          return (
            <a
              key={i}
              href={p.live || p.github}
              target="_blank"
              rel="noreferrer"
              className="ps-item"
              style={{ textDecoration: 'none' }}
            >
              {i % 2 === 0 ? <>{imgBlock}{metaBlock}</> : <>{metaBlock}{imgBlock}</>}
            </a>
          );
        })}
      </div>

      <a
        href="https://github.com/danielsetiawn"
        target="_blank"
        rel="noreferrer"
        className="ps-archive"
      >
        View full archive &nbsp;↗
      </a>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── ABOUT ── */}
      <header id="about" className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Hello, I'm <br />
                <span>Daniel Setiawan</span>
              </h1>
              <p className="mb-4">
                I'm a Computer Science student at BINUS University who likes building stuff
                and figuring out how things work behind the scenes. I got into tech because it's interesting
                how something as simple as code can turn into something people actually use every day.
              </p>
              <p>
                I enjoy working on both sides, sometimes I'm focused on the logic
                and making things run better, other times I'm thinking about how it looks and feels for the user.
                I just like making things that work well and make sense.
              </p>
              <p>
                Most of what I learn comes from building and experimenting,
                breaking things, and then fixing them again. I'm especially interested in creating projects that
                aren't just for show, but actually solve real problems and can keep improving over time.
              </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <div className="dnl-wrapper">
                <img src={HeroImage} alt="DNL-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* ── PROJECTS ── */}
      <ProjectsSection />

      {/* ── CONTACTS ── */}
      <section id="contacts" className="lc-section">
        <Container fluid className="px-0">
          <div className="lc-top">
            <p className="lc-eyebrow">— Get in touch</p>
            <h2 className="lc-headline">
              Let's<br /><em>Connect</em>
            </h2>
            <p className="lc-services-label">I'm always open to</p>
          </div>
          <div className="lc-services">
            <MarqueeRow />
          </div>
          <div className="lc-bottom">
            <div>
              <p className="lc-cta-sub">Minding a project? Let's talk.</p>
              <a
                className="lc-cta-btn"
                href="mailto:daniel100setiawan@gmail.com?subject=Project inquiry"
              >
                Contact me
              </a>
            </div>
            <div className="lc-socials">
              <a href="https://www.linkedin.com/in/daniel-setiawan-03947231b/"
                target="_blank" rel="noreferrer"
                className="nav-link-custom"
              >LinkedIn</a>
              <a href="https://www.instagram.com/daniel_setiawn/"
                target="_blank" rel="noreferrer"
                className="nav-link-custom"
              >Instagram</a>
              <a href="https://github.com/danielsetiawn"
                target="_blank" rel="noreferrer"
                className="nav-link-custom"
              >GitHub</a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default HomePage;