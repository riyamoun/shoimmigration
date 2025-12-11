import { notFound } from 'next/navigation';
import { getCountryBySlug, getAllCountrySlugs } from '@/data/countries';
import MegaNavbar from '@/components/MegaNavbar';
import CountryHero from '@/components/CountryHero';
import CountryContent from '@/components/CountryContent';
import CountrySidebar from '@/components/CountrySidebar';
import Footer from '@/components/Footer';

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  
  if (!country) {
    return { title: 'Country Not Found' };
  }

  return {
    title: `${country.name} Immigration - Visa & PR Services | ShoImmigration`,
    description: country.shortDesc,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <MegaNavbar />
      <CountryHero country={country} />
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content - 70% */}
          <div className="lg:w-[70%]">
            <CountryContent country={country} />
          </div>
          
          {/* Sidebar - 30% */}
          <div className="lg:w-[30%]">
            <CountrySidebar country={country} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

