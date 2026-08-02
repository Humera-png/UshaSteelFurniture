import useSeo from '../lib/useSeo.js';
import PageHeader from '../components/layout/PageHeader.jsx';
import Container from '../components/ui/Container.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import DynamicIcon from '../components/ui/DynamicIcon.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { industries } from '../data/industries.js';
import { IMG } from '../lib/images.js';

export default function Industries() {
  useSeo({
    title: 'Industries We Serve | Usha Steel Furniture',
    description:
      'Usha Steel Furniture supplies storage racks and shelving systems to warehouses, factories, retail stores, commercial spaces, distribution centers, supermarkets and offices.',
  });

  return (
    <>
      <PageHeader
        breadcrumb="Industries"
        title="Storage Systems for Every Industry"
        description="We design racking and shelving around how your business actually operates."
        image={IMG.machineryWorkers}
      />

      <section className="py-28 sm:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-16">
            {industries.map(({ icon, title }, i) => (
              <Reveal
                key={title}
                delay={(i % 4) * 0.06}
                className="flex flex-col items-center text-center gap-4"
              >
                <DynamicIcon name={icon} size={30} strokeWidth={1.5} className="text-emerald" />
                <span className="text-base font-semibold text-navy">{title}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
