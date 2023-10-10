export default function BoliplayForm() {
    return (
        
            <main className="flex  flex-col items-center justify-between bg-background-image">

                {/* logo */}
                <div className="container mt-4">
                    <div className="flex justify-center">
                        <div className="col-xs-12 text-center">
                            <a href="#"><img src="/images/logo.webp" width="250" height="50" alt="" /></a>
                        </div>
                    </div>
                </div>
                
                {/* formulario  */}
                <div className="container mx-auto mt-8">
                    <div className="flex justify-center items-center">
                        <div className="md:w-1/2 sm:w-full">
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/2 lg:w-1/3 xl:w-1/2">
                                    <a href="#"><img src="/images/pointshop.webp" className="mx-auto" width="560" height="120" alt="" /></a>
                                </div>
                            </div>
                            <form method="POST" className="mt-4 p-4 bg-blue-300 rounded-lg shadow-md" id="hdcashierform" action="">
                                <div className="md:flex md:flex-wrap">
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">NOMBRE</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" name="name" id="name" value="" />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">TELÉFONO CELULAR</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" required name="phone" id="phone" value="" />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">APELLIDOS</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" name="last_name" id="last_name" value="" />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="business" className="block text-sm font-medium text-gray-700">NEGOCIO</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" name="business" id="business" value="" />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">CORREO ELECTRÓNICO</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" name="email" id="email" value="" />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">CIUDAD</label>
                                        <input type="text" className="w-full p-2 mt-1 rounded-md border-gray-300 focus:ring focus:ring-indigo-200" name="city" id="city" value="" />
                                    </div>
                                    <div className="md:w-full w-full mt-4 text-center">
                                        <p className="text-sm font-medium text-gray-700">¿Eres nuevo en el mundo de las apuestas deportivas?</p>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox" hidden name="" id="" value="si" />
                                            <img className="w-10 h-5 ml-2" src="/images/si.webp" alt="Sí" />
                                        </label>
                                        <label className="inline-flex items-center ml-4">
                                            <input type="checkbox" className="form-checkbox" hidden name="" id="" value="no" />
                                            <img className="w-10 h-5 ml-2" src="/images/no.webp" alt="No" />
                                        </label>
                                    </div>
                                    <div className="w-full text-center mt-8">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" type="button" id="btnenv">ENVIAR</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="hidden md:block ml-8">
                            <a href="#"><img src="/images/menceldesk.webp" className="w-96 h-64" width="700" height="500" alt="" /></a>
                        </div>
                    </div>
                </div>

                {/* imagenes abajo */}
                <div className="container mx-auto mt-8">
                    <div className="flex flex-wrap justify-center items-center text-center">

                        <div className="md:w-1/4 lg:w-1/4 sm:w-full p-4">
                            <img className="w-3/4 h-auto mx-auto" src="/images/1a.webp" alt="" width="300" height="400" />
                        </div>

                        <div className="md:w-1/4 lg:w-1/4 sm:w-full p-4">
                            <img className="w-3/4 h-auto mx-auto" src="/images/2a.webp" alt="" width="300" height="400" />
                        </div>

                        <div className="md:w-1/4 lg:w-1/4 sm:w-full p-4">
                            <img className="w-3/4 h-auto mx-auto" src="/images/3a.webp" alt="" width="300" height="400" />
                        </div>

                    </div>
                </div>
            </main>
        
    )
}