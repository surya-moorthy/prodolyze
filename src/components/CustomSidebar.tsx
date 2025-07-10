import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Projects",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center py-4 px-4">
             <h3 className="text-xl font-extrabold text-neutral-950">
                  Protolyze
             </h3>
            <SidebarTrigger size={"lg"}/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="py-8 gap-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="hover:bg-neutral-300 border rounded-lg border-neutral-950 ">
                  <SidebarMenuButton asChild className="text-lg font-semibold">
                    <a href={item.url}>
                      <item.icon size={20}/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}