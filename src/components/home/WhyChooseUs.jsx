import { Gem, Settings2, IndianRupee, Clock } from 'lucide-react';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

const reasons = [
  { icon: Gem, title: 'Quality Materials', description: 'Iron and steel selected for strength and long-term durability.' },
  { icon: Settings2, title: 'Custom Manufacturing', description: 'Racks built to match your space and load requirements.' },
  { icon: IndianRupee, title: 'Competitive Pricing', description: 'Efficient manufacturing reflected in fair, transparent pricing.' },
  { icon: Clock, title: 'Timely Delivery', description: 'Production planned to keep your project on schedule.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 sm:py-32 bg-warm-white">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="Built on Reliability" align="center" className="mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {reasons.map(({ icon: Icon, title, description }) => (
            <Reveal key={title} className="text-center sm:text-left">
              <Icon size={28} className="mx-auto sm:mx-0 text-emerald mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
              <p className="text-sm text-ink-sub leading-relaxed">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
