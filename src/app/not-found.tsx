import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import MegaNavbar from '@/components/MegaNavbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <MegaNavbar />
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-amber-500 opacity-20">404</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved or doesn&apos;t exist.
          </p>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Search className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
            <h3 className="font-semibold text-slate-900 mb-4">Popular Pages</h3>
            <div className="space-y-2">
              <Link href="/country/australia" className="flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Australia Immigration
              </Link>
              <Link href="/country/canada" className="flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Canada Immigration
              </Link>
              <Link href="/country/uk" className="flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                UK Immigration
              </Link>
              <Link href="/login" className="flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Client Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
