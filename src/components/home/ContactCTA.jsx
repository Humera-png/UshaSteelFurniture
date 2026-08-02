import { MessageCircle } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import { site } from '../../data/site.js';

export default function ContactCTA() {
  return (
    <section className="py-28 sm:py-32 bg-navy">
      <Container className="text-center max-w-2xl">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-orange">Get In Touch</span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight">
            Need Storage Solutions? Request a Quote Today.
          </h2>
          <p className="mt-5 text-white/65">
            Tell us your storage requirement and our team will get back with a detailed quotation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href={site.whatsappHref} variant="outlineLight" size="lg" icon={MessageCircle}>
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
