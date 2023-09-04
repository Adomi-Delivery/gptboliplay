// Prod
import FormOrder from './components/forms/FormOrder'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between bg-yellow-100">
      {/* this is one change */}
       <div className="w-[400px] max-w-full pt-3 pb-3">

        <img src="/images/logo.png" alt="Logo" width='auto' />
        <div className="pb-8">
          <p className="mt-4 mb-4 font-bold text-2xl">Sistema de Creación de pedidos Para rótulos</p>
          <p className="text-lg">1. Ingrese la información para contactó</p>
          <p className="text-lg">2. Ingrese la información a imprimir como remitente </p>
        </div>
        <FormOrder/>

         
      </div>

    </main>
  )
}
