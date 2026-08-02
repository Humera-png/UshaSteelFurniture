import { MessageCircle } from 'lucide-react';
import { site } from '../../data/site.js';

export default function WhatsappButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-lift transition-colors hover:bg-emerald-hover"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
