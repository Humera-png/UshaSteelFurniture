import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-emerald text-white hover:bg-emerald-hover shadow-soft',
  dark: 'bg-navy text-white hover:bg-navy-light shadow-soft',
  outline: 'border border-navy/15 text-navy hover:border-emerald hover:text-emerald',
  outlineLight: 'border border-white/40 text-white hover:bg-white/10',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl2 font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon ? <Icon size={18} strokeWidth={2} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
