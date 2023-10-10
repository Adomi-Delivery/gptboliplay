'use client'
import BoliplayForm from './components/forms/boliplayform'
import ModalOne from './components/modal/modalone'
import BotOpenAi from './components/openai/BotAi'
import {useEffect, useState} from "react";




export default function Home() {
  
  const [openModal, setopenModal] = useState<boolean>(true)
  
  const toggle = () =>{
    setopenModal(!openModal)
  }

  return (
    <main>
      <div>
  
        <BoliplayForm/>
        <BotOpenAi/>
      </div>

    </main>

  
  )
}
