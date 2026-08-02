import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import { IMG, img } from '../../lib/images.js';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy">
      <img
        src={img(IMG.heroWarehouse, 2000, 65)}
        alt="Warehouse interior with heavy duty steel pallet racking"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />

      <Container className="relative z-10 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Quality Iron Storage Racks for Industrial &amp; Commercial Use
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-xl">
            Usha Steel Furniture manufactures iron storage racks for warehouses, factories, retail stores,
            offices and commercial spaces. We focus on delivering durable, practical and space-efficient
            storage solutions designed to meet a variety of storage requirements.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get a Quote
            </Button>
            <Button
              href="/usha-steel-furniture-catalogue.pdf"
              variant="outlineLight"
              size="lg"
              icon={Download}
            >
              Request Catalogue
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
