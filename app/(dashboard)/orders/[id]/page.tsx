'use client'
import axios from "axios";
import {useEffect, useState} from "react";
import Link from 'next/link';

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
const handleButtonClick = async (order: DataType | null) => {
  if (order !== null) {
    try {
      const id = order.id;
      const status = order.status + 1;
      const response = await axios.put(`/api/orders/${id}`, { status, id });
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  } else {
    console.error('El objeto de pedido es nulo.');
  }
};
//___________________________________________________________________________________________________________________ 
const statusText = {
  0: 'Pendiente',
  1: 'En proceso',
  2: 'Impreso',
  3: 'Entregado',
};



export default function GetData({ params }: { params: { id: string } }) {
  //___________________________________________________________________________________________________________________ 
    const [order,setOrder] = useState <DataType|null >(null)
    
    useEffect (()=>{
       
      axios.get(`/api/orders/${params.id}`)
     .then(result => {
         const order = result.data.result[0]
         setOrder(order)
        })
     .catch(error => {
        throw error;    
      });
    }, [params.id])

    return (
      <div id="table_order">
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
                {order?.status}
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
        <div className="pt-10">
          <button className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded pt-2">
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