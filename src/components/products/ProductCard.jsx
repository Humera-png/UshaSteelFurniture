import Reveal from '../ui/Reveal.jsx';
import { img } from '../../lib/images.js';

export default function ProductCard({ product, index = 0, onRequestQuote }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl2">
        <img
          src={img(product.image, 900)}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-bold text-navy">{product.title}</h3>
        <p className="mt-2 text-sm text-ink-sub leading-relaxed max-w-sm">{product.description}</p>

        <button
          onClick={() => onRequestQuote?.(product)}
          className="mt-5 text-sm font-semibold text-emerald hover:text-emerald-hover transition-colors"
        >
          Request Quote
        </button>
      </div>
    </Reveal>
  );
}
