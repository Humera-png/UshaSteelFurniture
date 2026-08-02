import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import DynamicIcon from '../ui/DynamicIcon.jsx';
import { industries } from '../../data/industries.js';

export default function Industries() {
  return (
    <section className="py-28 sm:py-32 bg-warm-white">
      <Container>
        <SectionHeading eyebrow="Industries We Serve" title="Trusted Across Sectors" align="center" className="mb-16" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-12">
          {industries.map(({ icon, title }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.05} className="flex flex-col items-center text-center gap-3">
              <DynamicIcon name={icon} size={26} strokeWidth={1.5} className="text-emerald" />
              <span className="text-sm font-semibold text-navy">{title}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
