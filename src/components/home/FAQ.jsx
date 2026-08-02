import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { faqs } from '../../data/faqs.js';

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border py-2">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-navy">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-emerald transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm text-ink-sub leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-warm-white">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions About Our Storage Solutions"
          align="center"
          className="mb-12"
        />

        <Reveal className="rounded-xl2 border border-border bg-white px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
