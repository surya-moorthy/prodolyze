'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const Appbar = () => {
    const session = useSession();
    const router = useRouter();
    return (
        <div>
              <button onClick={()=>{
                router.push("/api/auth/signin")
              }}>
                Login
              </button>
              <button onClick={()=>{
                signOut()
              }}>
                signout
              </button>
              {JSON.stringify(session)}
        </div>
    )
}