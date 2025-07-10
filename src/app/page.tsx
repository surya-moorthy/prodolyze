'use client'
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Appbar } from "@/components/Appbar";
import { AppSidebar } from "@/components/CustomSidebar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div className="w-screen">
     
         <HeroSection/>
         <Footer/>
    </div>
  );
}
