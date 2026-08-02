import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import { img } from '../../lib/images.js';

export default function PageHeader({ title, description, image, breadcrumb, action }) {
  return (
    <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
      {image ? (
        <>
          <img src={img(image, 1800, 55)} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </>
      ) : null}
      <Container className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl">{title}</h1>
          {description ? <p className="mt-5 text-white/70 max-w-xl">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </Container>
    </section>
  );
}
