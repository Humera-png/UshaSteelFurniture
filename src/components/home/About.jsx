import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import { IMG, img } from '../../lib/images.js';

export default function About() {
  return (
    <section className="py-28 sm:py-32 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="rounded-xl2 overflow-hidden aspect-[4/5]">
          <img
            src={img(IMG.aboutFactory, 900)}
            alt="Workers manufacturing steel storage racks at the Usha Steel Furniture facility"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Manufacturing Storage Systems Built to Last"
            description="Usha Steel Furniture is engaged in the manufacturing of iron storage racks and shelving systems for industrial, commercial and warehouse applications."
          />

          <p className="mt-6 text-base text-ink-sub leading-relaxed max-w-xl">
            We manufacture storage solutions designed for durability, functionality and efficient space
            utilization. Our focus is on providing dependable products that meet the storage needs of
            businesses across different industries, from single rack orders to complete facility fit outs.
          </p>

          <div className="mt-10">
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
