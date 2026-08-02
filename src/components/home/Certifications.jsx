import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import DynamicIcon from '../ui/DynamicIcon.jsx';
import { certifications } from '../../data/certifications.js';

export default function Certifications() {
  return (
    <section className="py-28 sm:py-32 bg-warm-white">
      <Container>
        <SectionHeading
          eyebrow="Quality Standards"
          title="Our Approach to Quality"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-14">
          {certifications.map(({ icon, title, description }) => (
            <Reveal key={title} className="text-center">
              <DynamicIcon name={icon} size={28} strokeWidth={1.5} className="mx-auto text-emerald mb-5" />
              <h3 className="font-bold text-navy mb-2">{title}</h3>
              <p className="text-sm text-ink-sub leading-relaxed">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
