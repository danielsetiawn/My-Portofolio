  import { useState, useEffect } from 'react';
  import { navLinks } from '../data/index';
  import { useNavigate } from 'react-router-dom';

  const SunIcon = () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );

  const SystemIcon = () => (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );

  const ICONS = { light: <SunIcon />, dark: <MoonIcon />, system: <SystemIcon /> };

  const NavBarComponent = () => {
    const navigate = useNavigate();

    const applyTheme = (t) => {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      if (t === 'dark') document.documentElement.classList.remove('light');
      else if (t === 'light') document.documentElement.classList.add('light');
      else mq.matches ? document.documentElement.classList.add('light') : document.documentElement.classList.remove('light');
    };

    const getSaved = () => localStorage.getItem('ds-theme') || 'dark';

    const [current, setCurrent] = useState(getSaved);
    const [dropOpen, setDropOpen] = useState(false);

    useEffect(() => {
      applyTheme(current);
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const handler = () => { if (current === 'system') applyTheme('system'); };
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }, [current]);

    const setTheme = (t) => {
      setCurrent(t);
      localStorage.setItem('ds-theme', t);
      applyTheme(t);
      setDropOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
      const handler = (e) => {
        if (!e.target.closest('#nav-theme-dropdown')) setDropOpen(false);
      };
      document.addEventListener('click', handler);
      return () => document.removeEventListener('click', handler);
    }, []);

    const handleNavClick = (link) => {
      if (link.sectionId) {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(link.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    return (
      <nav className="ds-nav">
        <div className="ds-nav-brand" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          DS
        </div>

        <div className="ds-nav-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="ds-nav-link"
              onClick={() => handleNavClick(link)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="ds-nav-right">
          <div className="ds-nav-avail">
            <span className="ds-nav-dot" />
            Available
          </div>

          <div className="ds-theme-dropdown" id="nav-theme-dropdown">
            <button
              className="ds-theme-btn"
              onClick={() => setDropOpen((o) => !o)}
              aria-label="Toggle theme"
            >
              {ICONS[current]}
            </button>
            <div className={`ds-dropdown-menu${dropOpen ? ' open' : ''}`}>
              {['light', 'dark', 'system'].map((t) => (
                <button
                  key={t}
                  className={`ds-dropdown-item${current === t ? ' active' : ''}`}
                  onClick={() => setTheme(t)}
                >
                  {ICONS[t]}
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default NavBarComponent;