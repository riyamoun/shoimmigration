'use client';

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/portal";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid email or password");
      } else {
        toast.success("Login successful!");
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
      </div>
      <div className="text-right">
        <a href="/forgot-password" className="text-sm text-gold hover:underline">Forgot password?</a>
      </div>
      <Button type="submit" className="w-full bg-gold text-slate-900 hover:bg-gold-dark" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-md pt-20">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">Customer Login</h1>
          <Suspense fallback={<div className="bg-white p-8 rounded-2xl shadow-lg animate-pulse h-64" />}>
            <LoginForm />
          </Suspense>
          <p className="mt-4 text-center text-slate-600">Don&apos;t have an account? <a href="/register" className="text-gold font-semibold">Register</a></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
