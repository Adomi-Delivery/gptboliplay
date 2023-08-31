'use client'
import axios from "axios";
import {useEffect, useState} from "react";
import Link from 'next/link';


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



export default function getdata({ params }: { params: { id: string } }) {
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

    return(
        <div id="table_order">
            <table>
    <tr>
      <th>Nombre a imprimir</th>
      <td>{order?.name}</td>
    </tr>
    <tr>
      <th>Ciudad</th>
      <td>{order?.city}</td>
    </tr>
    <tr>
      <th>Facebook</th>
      <td>{order?.facebook}</td>
    </tr>
    <tr>
      <th>Instagram</th>
      <td>{order?.instagram}</td>
    </tr>
    <tr>
      <th>Documento</th>
      <td>{order?.cc}</td>
    </tr>
    <tr>
      <th>Dirección</th>
      <td>{order?.address}</td>
    </tr>
    <tr>
      <th>Cantidad de rotulos</th>
      <td>
        {order?.quantity !== undefined ? order.quantity * 100 : 'N/A'}
      </td>
    </tr>
    <tr>
      <th>Nombre del cliente</th>
      <td>{order?.client}</td>
    </tr>
    <tr>
      <th>Numero del cliente</th>
      <td>{order?.client_phone}</td>
    </tr>
    <tr>
        <button className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded pt-2">
            Delete
        </button>      
        <Link href={`/orders`} passHref>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Regresar</button>
        </Link>
    </tr>
            </table>
        </div>
    )
    
}