import useSeo from '../lib/useSeo.js';
import PageHeader from '../components/layout/PageHeader.jsx';
import Container from '../components/ui/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Button from '../components/ui/Button.jsx';
import Process from '../components/home/Process.jsx';
import Certifications from '../components/home/Certifications.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { IMG, img } from '../lib/images.js';

export default function About() {
  useSeo({
    title: 'About Us | Usha Steel Furniture, Ahmedabad Steel Furniture Manufacturer',
    description:
      'Usha Steel Furniture is engaged in the manufacturing of iron storage racks and shelving systems for industrial, commercial and warehouse applications across India.',
  });

  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="Manufacturing Storage Systems Built to Last"
        image={IMG.aboutFactory}
      />

      <section className="py-28 sm:py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Engaged in Manufacturing Since Day One"
              description="Usha Steel Furniture is engaged in the manufacturing of iron storage racks and shelving systems for industrial, commercial and warehouse applications."
            />
            <p className="mt-6 text-base text-ink-sub leading-relaxed max-w-xl">
              We manufacture storage solutions designed for durability, functionality and efficient space
              utilization. Our focus is on providing dependable products that meet the storage needs of
              businesses across different industries, from single warehouse racks to complete facility
              fit outs.
            </p>
            <p className="mt-4 text-base text-ink-sub leading-relaxed max-w-xl">
              Based in Kathwada, Ahmedabad, our facility handles cutting, fabrication and finishing in house
              so we can maintain consistent quality across every order.
            </p>
            <div className="mt-10">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl2 overflow-hidden aspect-[4/5]">
            <img
              src={img(IMG.aboutWelding, 900)}
              alt="Welding work at the Usha Steel Furniture manufacturing unit"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </Container>
      </section>

      <Process />
      <Certifications />
      <ContactCTA />
    </>
  );
}
