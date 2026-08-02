import { useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import { img } from '../../lib/images.js';

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {images.map((item, i) => (
          <Reveal
            key={item.src + i}
            delay={(i % 6) * 0.05}
            className="mb-5 break-inside-avoid group relative overflow-hidden rounded-xl2 shadow-soft cursor-zoom-in"
          >
            <button className="block w-full" onClick={() => setActive(item)} aria-label={`View ${item.caption}`}>
              <img
                src={img(item.src, 800)}
                alt={item.caption}
                loading="lazy"
                className={`w-full ${item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} object-cover transition-transform duration-700 ease-out group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-sm font-medium text-left">{item.caption}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={img(active.src, 1600)}
            alt={active.caption}
            className="max-h-[85vh] max-w-full rounded-xl2 object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
