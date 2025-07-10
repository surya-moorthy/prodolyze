"use client"

import { Appbar } from "@/components/Appbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SessionProvider } from "next-auth/react"
import React from "react"

export function Providers({children} : {
    children : React.ReactNode
}) {
    return <SessionProvider>
           <SidebarProvider>
              <main>
                  
                   {children}
              </main>
            </SidebarProvider>
       </SessionProvider>
    
}