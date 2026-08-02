import useSeo from '../lib/useSeo.js';
import Hero from '../components/home/Hero.jsx';
import About from '../components/home/About.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import Products from '../components/home/Products.jsx';
import Process from '../components/home/Process.jsx';
import Industries from '../components/home/Industries.jsx';
import GalleryTeaser from '../components/home/GalleryTeaser.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import FAQ from '../components/home/FAQ.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';

export default function Home() {
  useSeo({
    title: 'Usha Steel Furniture | Industrial Storage Rack Manufacturer, Ahmedabad',
    description:
      'Usha Steel Furniture manufactures iron storage racks for warehouses, factories, retail stores, offices and commercial spaces across India.',
  });

  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Process />
      <Industries />
      <GalleryTeaser />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
