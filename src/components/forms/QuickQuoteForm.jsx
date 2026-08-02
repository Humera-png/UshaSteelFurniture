import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { site } from '../../data/site.js';

export default function QuickQuoteForm({ title = 'Request a Quick Quote', productOptions, defaultProduct = '' }) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    product: defaultProduct,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request${values.product ? ` (${values.product})` : ''}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nPhone: ${values.phone}\nProduct: ${values.product || 'Not specified'}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-emerald/20 bg-emerald/5 p-6 text-center">
        <CheckCircle2 size={32} className="mx-auto text-emerald mb-3" />
        <p className="font-semibold text-navy">Thanks, opening your email app</p>
        <p className="text-sm text-ink-sub mt-1">
          If it didn&apos;t open automatically, email us directly at{' '}
          <a href={`mailto:${site.email}`} className="text-emerald underline">
            {site.email}
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-semibold text-navy underline underline-offset-2"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 border border-border bg-white p-6 space-y-4">
      <h3 className="font-bold text-navy text-lg">{title}</h3>

      <div>
        <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="qq-name">
          Name *
        </label>
        <input
          id="qq-name"
          required
          value={values.name}
          onChange={update('name')}
          placeholder="Your name"
          className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="qq-phone">
          Phone *
        </label>
        <input
          id="qq-phone"
          type="tel"
          required
          value={values.phone}
          onChange={update('phone')}
          placeholder="+91"
          className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald"
        />
      </div>

      {productOptions ? (
        <div>
          <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="qq-product">
            Product
          </label>
          <select
            id="qq-product"
            value={values.product}
            onChange={update('product')}
            className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald bg-white"
          >
            <option value="">Select a product</option>
            {productOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label className="block text-xs font-semibold text-ink-sub mb-1.5" htmlFor="qq-message">
          Requirement
        </label>
        <textarea
          id="qq-message"
          rows={3}
          value={values.message}
          onChange={update('message')}
          placeholder="Quantity, dimensions, load requirement..."
          className="w-full rounded-xl2 border border-border px-4 py-2.5 text-sm outline-none focus:border-emerald resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl2 bg-emerald py-3 text-sm font-semibold text-white hover:bg-emerald-hover transition-colors"
      >
        Request Quote
        <Send size={16} />
      </button>
    </form>
  );
}
