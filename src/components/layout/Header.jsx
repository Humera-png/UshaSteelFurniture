import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import { site } from '../../data/site.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-warm-white/95 backdrop-blur shadow-soft border-b border-border' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none shrink-0">
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
            <span className={solid ? 'text-navy' : 'text-white'}>USHA</span>
            <span className="text-industrial-orange">A</span>
          </span>
          <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${solid ? 'text-ink-sub' : 'text-white/70'}`}>
            Steel Furniture
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {site.headerNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${solid ? 'text-ink' : 'text-white'} ${isActive ? 'text-emerald' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${solid ? 'text-navy' : 'text-white'}`}
          >
            <Phone size={15} />
            {site.phone}
          </a>
          <Button to="/contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-lg ${solid ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="lg:hidden bg-warm-white border-t border-border">
          <Container className="flex flex-col py-6 gap-1">
            {site.headerNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-border last:border-b-0 ${
                    isActive ? 'text-emerald' : 'text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 mt-5">
              <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Phone size={15} />
                {site.phone}
              </a>
              <Button to="/contact" variant="primary" className="w-full">
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
