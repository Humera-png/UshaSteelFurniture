import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { processSteps } from '../../data/process.js';

export default function Process() {
  return (
    <section className="py-28 sm:py-32 bg-navy">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Manufacturing Process"
          align="center"
          light
          className="mb-20"
        />

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          <div className="absolute top-5 left-0 right-0 hidden lg:block h-px bg-white/10" />
          {processSteps.map(({ step, title }, i) => (
            <Reveal key={step} delay={i * 0.06} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy text-sm font-bold text-industrial-orange mb-4">
                {step}
              </div>
              <h3 className="text-white text-sm font-semibold">{title}</h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
