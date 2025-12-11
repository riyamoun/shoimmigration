import MegaNavbar from '@/components/MegaNavbar';
import SearchHero from '@/components/SearchHero';
import VideoDestinations from '@/components/VideoDestinations';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <MegaNavbar />
      <SearchHero />
      <VideoDestinations />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
