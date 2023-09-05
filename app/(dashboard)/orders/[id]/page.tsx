'use client'
import axios from "axios";
import {useEffect, useState} from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

//___________________________________________________________________________________________________________________ 
interface DataType {
    id: string | number;
    name: string;
    cc: number;
    address: string;
    quantity: number;
    status: number;
    createdAT: number;
    city: string;
    facebook: string;
    instagram: string;
    client: string;
    client_phone: string;
}

//___________________________________________________________________________________________________________________ 
const statusText: { [key: number]: string } = {
  0: 'Pendiente',
  1: 'En proceso',
  2: 'Impreso',
  3: 'Entregado',
};



export default function GetData({ params }: { params: { id: string } }) {
  const router = useRouter()

  //___________________________________________________________________________________________________________________ 
  const [order,setOrder] = useState <DataType|null >(null)
  //___________________________________________________________________________________________________________________ 
  const handleButtonClick = async (order: DataType | null) => {
      if (order !== null) {
        try {
          const id = order.id;
          const status = order.status + 1;
          
          // Actualiza el estado en el servidor
          await axios.put(`/api/orders/${id}`, { status, id });
          
          // Después de actualizar el estado, obtén los datos actualizados
          const response = await axios.get(`/api/orders/${id}`);
          const updatedOrder = response.data.result[0];

          // Actualiza el estado local con los nuevos datos
          setOrder(updatedOrder);
        } catch (error) {
          console.error('Error al actualizar:', error);
        }
      } else {
        console.error('El objeto de pedido es nulo.');
      }
  };
  //___________________________________________________________________________________________________________________ 
  const DeleteButton = async (order: DataType | null) => {
    if (order !== null) {
      try {
        const id = order.id;      
        await axios.delete(`/api/orders/${id}`, {data: order});
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    } else {
      console.error('El objeto de pedido es nulo.');
    }
  };  
    useEffect(() => {
      axios.get(`/api/orders/${params.id}`)
        .then(result => {
          const order = result.data.result[0]
          setOrder(order)
        })
        .catch(error => {
          throw error;
        });
    }, [params.id]);

    return (
      <div id="table_order" className="text-center pb-100" >
        <table>
          <thead>
            <tr>
              <th colSpan={2} style={{ fontWeight: 'bold', fontSize: '24px' }}>
                # de Orden: {order?.id}
              </th>      
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="font-bold text-xl">
                Nombre
              </th>
              <td className="text-lg">
                {order?.name}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Ciudad
              </th>
              <td className="text-lg">
                {order?.city}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Facebook
              </th>
              <td className="text-lg">
                {order?.facebook}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Instagram
              </th>
              <td className="text-lg">
                {order?.instagram}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Documento
              </th>
              <td className="text-lg">
                {order?.cc}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Dirección
              </th>
              <td className="text-lg">
                {order?.address}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Cantidad de rotulos
              </th>
              <td className="text-lg">
                {order?.quantity !== undefined ? order.quantity * 100 : 'N/A'}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Estado
              </th>
              <td className="text-lg">
              {order ? statusText[order.status] : 'N/A'}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Cliente
              </th>
              <td className="text-lg">
                {order?.client}
              </td>
            </tr>
            <tr>
              <th className="font-bold text-xl">
                Tel/Cel
              </th>
              <td className="text-lg">
                {order?.client_phone}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pt-5">
          <button onClick={() => {
            DeleteButton(order);
            router.push('/orders');
          }} className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded pt-2">
            Delete
          </button>
          <Link href={`/orders`} passHref>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Regresar</button>
          </Link>
          
            <button onClick={() => handleButtonClick(order)} className="mr-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Estado</button>
          
        </div>
      </div>
    );
    
    
}