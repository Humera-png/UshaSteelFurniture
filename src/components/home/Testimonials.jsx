import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { testimonials } from '../../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="py-28 sm:py-32 bg-warm-white">
      <Container>
        <SectionHeading
          eyebrow="Client Experience"
          title="What Businesses Value About Working With Us"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {testimonials.map((t) => (
            <Reveal key={t.role} className="flex flex-col">
              <p className="text-base text-ink leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-navy">{t.role}</p>
                <p className="text-xs text-ink-sub">{t.sector}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
