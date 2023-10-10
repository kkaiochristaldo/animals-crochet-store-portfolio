
import NavbarContainer from "@/components/NavBarContainer"
import Logo from "@/components/Logo"
import InputSearch from "@/components/InputSearch"
import IconsContainer from "@/components/IconsContainer"
import UserProfile from "@/components/UserProfile"

export default function Home() {
  return (
      <>
         <NavbarContainer>
            <nav className="w-full px-52 py-2 border-b-2 flex flex-row justify-between items-center">
               <Logo />
               <div className="flex flex-row justify-between items-center gap-6">
                  <InputSearch />
                  <IconsContainer>
                     <li>Cesta</li>
                     <li>Corações</li>
                     <li>Notificações</li>
                     <UserProfile />
                  </IconsContainer>
               </div>
            </nav>
         </NavbarContainer>
      </> 
   )
}
