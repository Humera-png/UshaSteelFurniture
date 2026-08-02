import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container.jsx';
import { site } from '../../data/site.js';
import { products } from '../../data/products.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <Container className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="font-display text-2xl font-extrabold leading-none mb-4">
            <span className="text-white">USH</span>
            <span className="text-industrial-orange">A</span>
          </div>
          <p className="text-sm uppercase tracking-[0.15em] text-white/50 mb-4">{site.tagline}</p>
          <p className="text-sm leading-relaxed text-white/60">
            Manufacturer of industrial storage racks and shelving systems for warehouses, factories, retail
            stores and commercial spaces across India.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Products</h4>
          <ul className="space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to="/products" className="hover:text-white transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-industrial-orange" />
              <a href={site.phoneHref} className="hover:text-white transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-industrial-orange" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-industrial-orange" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a aria-label="Facebook" href="#" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a aria-label="Instagram" href="#" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a aria-label="LinkedIn" href="#" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Usha Steel Furniture. All rights reserved.</span>
          <span>{site.strapline}</span>
        </Container>
      </div>
    </footer>
  );
}
