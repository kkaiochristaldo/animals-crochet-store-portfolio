
import Logo from "@/components/Logo"


export default function NavBar()
{

   return(
      <>
         <main className="w-full h-auto bg-slate-50 py-2">
            <nav className="h-auto flex justify-between items-center mx-40">
               <Logo />
               <form>
                  <input type="search" />
                  <button>Buscar</button>
               </form>
               <div>
                  <p>John Doe</p>
                  
               </div>
            </nav>
            <nav></nav>
         </main>        
      </>
   )
}