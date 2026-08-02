import { useState } from 'react';
import { Download } from 'lucide-react';
import useSeo from '../lib/useSeo.js';
import PageHeader from '../components/layout/PageHeader.jsx';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import QuickQuoteForm from '../components/forms/QuickQuoteForm.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { products } from '../data/products.js';
import { IMG } from '../lib/images.js';

export default function Products() {
  useSeo({
    title: 'Industrial Storage Rack Products | Usha Steel Furniture',
    description:
      'Browse our range of heavy duty storage racks, slotted angle racks, warehouse racking systems, long span shelving, industrial shelving and customized storage solutions.',
  });

  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <>
      <PageHeader
        breadcrumb="Products"
        title="Storage Racks &amp; Shelving Systems"
        description="Standard ranges and fully custom builds for warehouses, factories, retail stores and commercial spaces."
        image={IMG.heavyDutyRacks}
        action={
          <Button href="/usha-steel-furniture-catalogue.pdf" variant="outlineLight" icon={Download}>
            Request Catalogue
          </Button>
        }
      />

      <section className="py-28 sm:py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={i}
                onRequestQuote={(p) => setSelectedProduct(p.title)}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            <QuickQuoteForm
              title="Quick Quote Request"
              productOptions={products.map((p) => p.title)}
              defaultProduct={selectedProduct}
              key={selectedProduct}
            />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
