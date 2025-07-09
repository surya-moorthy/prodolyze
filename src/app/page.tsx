import { signIn } from "next-auth/react";
import Image from "next/image";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
    <div>
         <Appbar />
    </div>
  );
}
