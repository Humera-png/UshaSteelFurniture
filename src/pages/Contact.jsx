import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Factory } from 'lucide-react';
import useSeo from '../lib/useSeo.js';
import PageHeader from '../components/layout/PageHeader.jsx';
import Container from '../components/ui/Container.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import { site } from '../data/site.js';
import { IMG } from '../lib/images.js';

export default function Contact() {
  useSeo({
    title: 'Contact Us | Usha Steel Furniture, Ahmedabad, Gujarat',
    description:
      'Get in touch with Usha Steel Furniture for storage rack quotations, custom rack design and bulk orders. Located in Kathwada, Ahmedabad, Gujarat.',
  });

  const location = useLocation();
  const defaultProduct = location.state?.product || '';

  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        title="Let's Talk Storage Solutions"
        description="Reach out for a quotation, custom rack design or bulk order enquiry."
        image={IMG.forkliftRacks}
      />

      <section className="py-28 sm:py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>
              <ul className="space-y-7">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="mt-0.5 shrink-0 text-emerald" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-navy">Phone</p>
                    <a href={site.phoneHref} className="text-sm text-ink-sub hover:text-emerald">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-emerald" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-navy">Email</p>
                    <a href={`mailto:${site.email}`} className="text-sm text-ink-sub hover:text-emerald">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-emerald" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-navy">Office Address</p>
                    <p className="text-sm text-ink-sub">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Factory size={20} className="mt-0.5 shrink-0 text-emerald" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-navy">Factory Address</p>
                    <p className="text-sm text-ink-sub">
                      {site.factoryAddress.line1}
                      <br />
                      {site.factoryAddress.line2}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-emerald" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-navy">Business Hours</p>
                    {site.hours.map((h) => (
                      <p key={h.day} className="text-sm text-ink-sub">
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl2 overflow-hidden h-64">
              <iframe
                title="Usha Steel Furniture location map"
                src="https://www.google.com/maps?q=Kathwada,Ahmedabad,Gujarat&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Request a Quote</h2>
            <ContactForm defaultProduct={defaultProduct} />
          </div>
        </Container>
      </section>
    </>
  );
}
