import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// In production, this would call an API to create user

export default function RegisterPage() {
  // Handle form submission to create user (demo only)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here (e.g., API call to backend)
    alert("Registration successful! (Demo)");
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-lightGrey">
        <div className="container mx-auto px-6 max-w-md">
          <h1 className="text-3xl font-bold text-navy mb-8 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-gold text-navy">Register</Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
