
import { ReactNode } from "react"


export default function NavBarContainer({ children }: {children:React.ReactNode})
{

   return(
      <nav className="w-full h-auto bg-slate-50 py-2">
         {
            children
         }
      </nav>        
   )
}