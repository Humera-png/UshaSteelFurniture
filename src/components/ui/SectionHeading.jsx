import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? 'text-industrial-orange' : 'text-emerald'
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-sub'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
