'use client'
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
   const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="w-screen">
     
         <HeroSection/>
         <Footer/>
    </div>
  );
}
