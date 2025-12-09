'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/portal",
    });
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-lightGrey">
        <div className="container mx-auto px-6 max-w-md">
          <h1 className="text-3xl font-bold text-navy mb-8 text-center">Customer Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-gold text-navy">Log In</Button>
          </form>
          <p className="mt-4 text-center">Don't have an account? <a href="/register" className="text-gold">Register</a></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
