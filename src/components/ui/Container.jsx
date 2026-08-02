export default function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-8xl container-px ${className}`}>{children}</div>;
}
