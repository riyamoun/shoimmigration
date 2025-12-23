'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to send reset email');
        return;
      }

      setSubmitted(true);
      toast.success('Check your email for reset instructions');
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-md pt-20">
          <Link href="/login" className="inline-flex items-center gap-2 text-slate-600 hover:text-gold mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4">Forgot Password</h1>
          
          {!submitted ? (
            <>
              <p className="text-slate-600 mb-8">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="pl-10"
                      placeholder="you@example.com"
                      required 
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gold text-slate-900 hover:bg-gold-dark" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Check Your Email</h2>
              <p className="text-slate-600 mb-6">
                If an account exists with <strong>{email}</strong>, you&apos;ll receive a password reset link shortly.
              </p>
              <p className="text-sm text-slate-500">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-gold hover:underline"
                >
                  try again
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
