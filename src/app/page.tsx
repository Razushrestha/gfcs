import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesTicker from '@/components/ServicesTicker';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WorkingProcess from '@/components/WorkingProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesTicker />
        <ServicesSection />
        <AboutSection />
        <WorkingProcess />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <FAQ />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
