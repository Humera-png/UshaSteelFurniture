import useSeo from '../lib/useSeo.js';
import PageHeader from '../components/layout/PageHeader.jsx';
import Container from '../components/ui/Container.jsx';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { galleryImages } from '../data/gallery.js';
import { IMG } from '../lib/images.js';

export default function Gallery() {
  useSeo({
    title: 'Gallery | Usha Steel Furniture, Warehouse & Rack Installations',
    description:
      'Photo gallery of warehouse racking installations, industrial shelving, manufacturing and completed storage projects by Usha Steel Furniture.',
  });

  return (
    <>
      <PageHeader
        breadcrumb="Gallery"
        title="Installations &amp; Manufacturing"
        description="A look inside our manufacturing floor and completed racking installations."
        image={IMG.redRackAisle}
      />

      <section className="py-28 sm:py-32 bg-white">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
