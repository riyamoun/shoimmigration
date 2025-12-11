'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registered:", { name, email, password });
    alert("Registration successful! Now log in.");
  };

  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-md pt-20">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-gold text-slate-900 hover:bg-gold-dark">Register</Button>
          </form>
          <p className="mt-4 text-center text-slate-600">Already have an account? <a href="/login" className="text-gold font-semibold">Login</a></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
