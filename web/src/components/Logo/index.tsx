
import { Saira_Stencil_One } from "next/font/google"

const sairaStencil = Saira_Stencil_One(
   {
      weight: '400',
      subsets: ['latin']
   }
)

export default function logo()
{

   return <h1 className={`${sairaStencil.className} text-4xl text-pink-400`}>Crochet Cuteness</h1>
}