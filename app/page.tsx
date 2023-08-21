import FormOrder from './components/forms/FormOrder'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40 pb-80 bg-yellow-100">
 
       <div className="w-[300px] h-[800px]">

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
