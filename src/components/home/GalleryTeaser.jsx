import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import { img } from '../../lib/images.js';
import { galleryImages } from '../../data/gallery.js';

export default function GalleryTeaser() {
  const featured = galleryImages.slice(0, 3);

  return (
    <section className="py-28 sm:py-32 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <SectionHeading eyebrow="Gallery" title="Installations &amp; Manufacturing" />
          <Button to="/gallery" variant="outline" className="shrink-0">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {featured.map((item) => (
            <Reveal key={item.src} className="aspect-[4/3] overflow-hidden rounded-xl2">
              <img src={img(item.src, 800)} alt={item.caption} loading="lazy" className="h-full w-full object-cover" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
