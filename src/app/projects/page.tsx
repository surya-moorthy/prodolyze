'use client'
import { Button } from "@/components/ui/button";
import { DropdownMenu,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react"

export default function page() {

    const session = useSession();

    return (
       <div className="min-w-screen px-72 py-16 ">
         <div className="flex justify-between border p-2 rounded-2xl">
              <h2 className="text-neutral-900 font-serif tracking-tighter text-3xl">
                Surya Moorthy's Projects
              </h2>   
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-gray-100 px-4 py-3 rounded-xl border-none">
                     Add Project
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                     <DropdownMenuGroup className="shadow-lg bg-gray-50 rounded-xl ">
                        <DropdownMenuItem className="text-md font-semibold border-none cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-xl">
                              {"+ new"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md font-semibold border-none cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-xl">
                              Add existing Project
                        </DropdownMenuItem>
                     </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>             
         </div>
       <ProjectBox/>
       </div>
    )
}

const ProjectBox = () => {
  return (
    <div className="relative rounded-xl border m-2 p-4 min-w-full overflow-visible z-0">
      <div className="flex justify-between items-center">
        <Button variant="link" className="text-xl font-semibold">
          Project title
        </Button>
        Progress line 
      </div>
    </div>
  )
}
