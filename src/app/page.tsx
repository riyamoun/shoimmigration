import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
