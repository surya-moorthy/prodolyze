import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { Appbar } from "../components/Appbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <div>
         <Appbar />
         <HeroSection/>
         <Footer/>
    </div>
  );
}
