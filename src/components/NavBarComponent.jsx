import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    if (link.sectionId) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(link.sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div>
      <Navbar className={scrolled ? "navbar scrolled" : "navbar"}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fs-5 fw-bold me-auto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Daniel Setiawan
          </Navbar.Brand>
          <Nav className="ms-auto text-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className="nav-link-custom"
                onClick={() => handleNavClick(link)}
                style={{ cursor: "pointer" }}
              >
                {link.text}
              </a>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;