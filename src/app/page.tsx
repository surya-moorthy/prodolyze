
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Appbar } from "@/components/Appbar";
import { AppSidebar } from "@/components/CustomSidebar";

export default function Home() {
  
  return (
    <div className="w-screen">
         <Appbar/>
         <AppSidebar/>
         <HeroSection/>
         <Footer/>
    </div>
  );
}
