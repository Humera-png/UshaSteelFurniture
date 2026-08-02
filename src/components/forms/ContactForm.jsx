import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { site } from '../../data/site.js';
import { products } from '../../data/products.js';

export default function ContactForm({ defaultProduct = '' }) {
  const [values, setValues] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: defaultProduct,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry${values.product ? ` (${values.product})` : ''}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company}\nPhone: ${values.phone}\nEmail: ${values.email}\nProduct: ${
        values.product || 'Not specified'
      }\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-emerald/20 bg-emerald/5 p-10 text-center">
        <CheckCircle2 size={40} className="mx-auto text-emerald mb-4" />
        <p className="font-bold text-navy text-lg">Thanks for reaching out</p>
        <p className="text-sm text-ink-sub mt-2 max-w-sm mx-auto">
          Your email app should have opened with your enquiry pre-filled. If not, email us directly at{' '}
          <a href={`mailto:${site.email}`} className="text-emerald underline">
            {site.email}
          </a>{' '}
          or call {site.phone}.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-xs font-semibold text-navy underline underline-offset-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 border border-border bg-white p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-name">
            Name *
          </label>
          <input
            id="c-name"
            required
            value={values.name}
            onChange={update('name')}
            className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-company">
            Company
          </label>
          <input
            id="c-company"
            value={values.company}
            onChange={update('company')}
            className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-phone">
            Phone *
          </label>
          <input
            id="c-phone"
            type="tel"
            required
            value={values.phone}
            onChange={update('phone')}
            className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
            placeholder="+91"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-email">
            Email *
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={values.email}
            onChange={update('email')}
            className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-product">
          Products Interested In
        </label>
        <select
          id="c-product"
          value={values.product}
          onChange={update('product')}
          className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald bg-white"
        >
          <option value="">Select a product</option>
          {products.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Custom Requirement">Custom Requirement</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="c-message">
          Message *
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          value={values.message}
          onChange={update('message')}
          className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald resize-none"
          placeholder="Tell us about your storage requirement: quantity, dimensions, load, timeline"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl2 bg-emerald px-8 py-3.5 text-sm font-semibold text-white hover:bg-emerald-hover transition-colors"
      >
        Request Quote
        <Send size={16} />
      </button>
    </form>
  );
}
