'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Password validation checks
  const passwordChecks = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
  };

  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordValid) {
      toast.error("Please ensure your password meets all requirements");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Registration failed");
        return;
      }

      toast.success(data.message || "Registration successful!");
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const PasswordCheck = ({ passed, text }: { passed: boolean; text: string }) => (
    <div className={`flex items-center gap-2 text-sm ${passed ? 'text-green-600' : 'text-slate-500'}`}>
      {passed ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
      {text}
    </div>
  );

  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-md pt-20">
          <h1 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required disabled={loading} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required disabled={loading} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                  required 
                  disabled={loading} 
                  minLength={8} 
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2 space-y-1">
                  <PasswordCheck passed={passwordChecks.minLength} text="At least 8 characters" />
                  <PasswordCheck passed={passwordChecks.hasUppercase} text="One uppercase letter" />
                  <PasswordCheck passed={passwordChecks.hasLowercase} text="One lowercase letter" />
                  <PasswordCheck passed={passwordChecks.hasNumber} text="One number" />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"} 
                  value={confirmPassword} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} 
                  required 
                  disabled={loading}
                  className={`pr-10 ${confirmPassword.length > 0 ? (passwordsMatch ? 'border-green-500 focus:border-green-500' : 'border-red-500 focus:border-red-500') : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
              )}
              {passwordsMatch && (
                <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Passwords match
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gold text-slate-900 hover:bg-gold-dark" 
              disabled={loading || !isPasswordValid || !passwordsMatch}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
          <p className="mt-4 text-center text-slate-600">Already have an account? <Link href="/login" className="text-gold font-semibold">Login</Link></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
