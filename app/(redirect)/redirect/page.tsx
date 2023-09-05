'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";


export default function EndPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000); 
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <body className="bg-yellow-100">
      
      <div className="flex  flex-col items-center justify-between">
        <img src="/images/logo.png" alt="Logo" width='auto' />
          
        <div className="text-center">
          <p className="mt-4 mb-4 font-bold text-2xl text-red-500">PEDIDO CREADO CON EXITO!</p>
        </div>
        
        
        <div className="absolute bottom-20 text-center text-black">
          Pagina se redireccionara en 10 segundos a rotulos.etirrollos.com
        </div>

      </div>
    </body>
  )
}