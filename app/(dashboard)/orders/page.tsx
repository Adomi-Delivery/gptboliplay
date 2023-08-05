'use client';
import React, { useEffect, useState } from 'react';
import { Table, Button  } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import axios from 'axios';
import OrderPDFGenerator from '@/app/components/bpdf/OrderPDF';
import { PDFDownloadLink} from '@react-pdf/renderer';

export default function FormOrder() {

  // ___________________________________________________________________________________________________________________________
  const [orders, setOrders] = useState<DataType[]>([]);

  // Función para obtener los datos desde la API
  const fetchData = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);

  // ___________________________________________________________________________________________________________________

  // Datos y su tipo
  interface DataType {
    id: string | number;
    name: string;
    cc: number;
    address: string;
    quantity: number;
    status: number;
    city: string;
  }

  // ___________________________________________________________________________________________________________________

  // status number to text
  interface StatusMap {
    [key: number]: string;
  }

  const statusMap: StatusMap = {
    0: 'Pendiente',
    1: 'En proceso',
    2: 'Impreso',
    3: 'Entregado',
  };
  
  // ___________________________________________________________________________________________________________________

  // action button satus

  const handleButtonClick = async (record: DataType) => {
    try {
      const id = record.id;

      const status = record.status + 1;
      
      const response = await axios.put(`/api/orders/${id}`, {status, id});
      
      fetchData();

    } catch (error) {
      
      console.error('Error al actualizar:', error);
    }
  };

  // ___________________________________________________________________________________________________________________

  const DeleteButton = async (record: DataType) => {
    try {
      console.log (record)
      const id = record.id;
      
      
      const response = await axios.delete(`/api/orders/${id}`, {data: record});

      console.log(response)
      fetchData();

    } catch (error) {
      console.error(error)
    }
  };

  // Columns
  const columns: ColumnsType<DataType> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
    },
    {
      title: 'CC',
      dataIndex: 'cc',
      sorter: (a, b) => a.cc - b.cc,
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Ciudad',
      dataIndex: 'city',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      sorter: (a, b) => a.status - b.status,
      render: (status) => statusMap[status] || 'Desconocido',
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <>
          {record.status !== 3 ? (
            <>
              <Button onClick={() => handleButtonClick(record)} className="mr-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Estado</Button>
            </>
          ) : (
            <span className="mr-2 bg-green-800  text-white font-bold py-2 px-4 rounded">Finalizado</span>
          )}{' '} {/* Espacio entre los botones */}
          <Button onClick={() => DeleteButton(record)} className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</Button>
          
          
          <PDFDownloadLink
            document={<OrderPDFGenerator orderData={record} />} 
            fileName={`order_${record.id}.pdf`}
            className="mr-2 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            {({ blob, url, loading, error }) =>
              {
                return (
                  loading ? 'Loading document...' : 'PDF'
                )
              }
            }
          </PDFDownloadLink>


        </>
      ),
    }
  ];
  // ___________________________________________________________________________________________________________________

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      {/* Mostrar la tabla de órdenes */}
      <Table columns={columns} dataSource={orders} />
    </>
  );
}



