import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PortalPage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <section className="py-20 bg-lightGrey">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-navy mb-4">Welcome to Your Customer Portal, {session.user?.name}</h1>
          <p className="text-navy">Here you can view your visa application status, documents, and more. (Demo content)</p>
          {/* Add portal features here */}
        </div>
      </section>
      <Footer />
    </>
  );
}
