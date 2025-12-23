'use client';

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!token) {
      toast.error("Invalid reset link");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to reset password');
        return;
      }

      setSuccess(true);
      toast.success('Password reset successful!');
      setTimeout(() => router.push('/login'), 3000);
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold text-red-600 mb-2">Invalid Reset Link</h2>
        <p className="text-slate-600 mb-4">
          This password reset link is invalid or has expired.
        </p>
        <Link href="/forgot-password" className="text-gold hover:underline">
          Request a new reset link
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Password Reset!</h2>
        <p className="text-slate-600 mb-4">
          Your password has been successfully reset. Redirecting to login...
        </p>
        <Link href="/login" className="text-gold hover:underline">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
      <div>
        <Label htmlFor="password">New Password</Label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="pl-10"
            placeholder="At least 8 characters"
            minLength={8}
            required 
          />
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Must contain uppercase, lowercase, and a number
        </p>
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input 
            id="confirmPassword" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="pl-10"
            placeholder="Confirm your password"
            minLength={8}
            required 
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-gold text-slate-900 hover:bg-gold-dark" disabled={isLoading}>
        {isLoading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
}

export default function ResetPasswordPage() {
  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-md pt-20">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-4 text-center">Reset Password</h1>
          <p className="text-slate-600 mb-8 text-center">
            Enter your new password below.
          </p>
          <Suspense fallback={<div className="bg-white p-8 rounded-2xl shadow-lg animate-pulse h-64" />}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
