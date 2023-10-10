
import { ReactNode } from "react"


export default function IconsContainer({ children }: {children:React.ReactNode})
{

   return(
      <ul className="flex justify-start items-center flex-row gap-6">
         {
            children
         }
      </ul>        
   )
}