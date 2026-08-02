import useSeo from '../lib/useSeo.js';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  useSeo({ title: 'Page Not Found | Usha Steel Furniture', description: 'The page you are looking for could not be found.' });

  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-industrial-orange mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-ink-sub mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
