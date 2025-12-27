'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Critical Error</h1>
            <p className="text-slate-600 mb-8">
              A critical error occurred. We apologize for the inconvenience. 
              Please try refreshing the page.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors font-bold text-lg"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Application
              </button>
              
              <a
                href="/"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
              >
                <Home className="w-4 h-4" />
                Return to Homepage
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Need help? Contact us at{' '}
                <a href="mailto:support@shoimmigration.com" className="text-amber-600 hover:underline">
                  support@shoimmigration.com
                </a>
              </p>
            </div>

            {error.digest && (
              <p className="mt-4 text-xs text-slate-400">
                Error Reference: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
