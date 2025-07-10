'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";

export const Appbar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-neutral-100 shadow-sm w-full">
      <div className="flex gap-9">
          {session.status === "unauthenticated" ? <></> : <SidebarTrigger/>}
          {/* Brand */}
          <Link href={"/"} className="text-lg font-bold hover:underline hover:underline-offset-2">
            Protolyze
          </Link>
      </div>

      {/* header Links */}
      <ul className="flex flex-wrap gap-3 md:gap-6 items-center">
        {session.status === "unauthenticated" ? (
          <>
            <li>
              <Button onClick={() => signIn()}>Login</Button>
            </li>
            <li>
              <Button>About</Button>
            </li>
            <li>
              <Button>Get Started</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button className="font-semibold">
                 {
                  session.data?.user?.name
                 }
              </Button>
            </li>
            <li>
              <Button onClick={() => signOut()}>Logout</Button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
