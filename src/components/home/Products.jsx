import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import ProductCard from '../products/ProductCard.jsx';
import { products } from '../../data/products.js';

export default function Products() {
  const navigate = useNavigate();

  function handleRequestQuote(product) {
    navigate('/contact', { state: { product: product.title } });
  }

  return (
    <section className="py-28 sm:py-32 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Our Products"
            title="Storage Systems Built for Every Industrial Need"
          />
          <Button to="/products" variant="outline" className="shrink-0">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} onRequestQuote={handleRequestQuote} />
          ))}
        </div>
      </Container>
    </section>
  );
}
