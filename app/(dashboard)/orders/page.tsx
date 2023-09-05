'use client';
import React, { useEffect, useState } from 'react';
import { Table, Button, Pagination  } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import axios from 'axios';
import OrderPDFGenerator from '@/app/components/bpdf/OrderPDF';
import { PDFDownloadLink} from '@react-pdf/renderer';
import Link from 'next/link';
import dayjs from 'dayjs';



export default function FormOrder() {

  // ___________________________________________________________________________________________________________________________
  const [orders, setOrders] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para controlar la página actual
  const itemsPerPage = 5;

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
  }, [currentPage]); 
  // ___________________________________________________________________________________________________________________

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Datos y su tipo
  interface DataType {
    id: number;
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
    orderData: DataType | null;
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
      title: 'Número de Orden',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Nombre del Cliente',
      dataIndex: 'client',
    },
    {
      title: 'Fecha de ingreso',
      dataIndex: 'createdAT',
      sorter: (a, b) => dayjs(a.createdAT).unix() - dayjs(b.createdAT).unix(),
      render: (createdAT) => dayjs(createdAT).format('YYYY-MM-DD'),
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      render: (quantity) => <span>{quantity * 100}</span>,
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      sorter: (a, b) => a.status - b.status,
      render: (status) => statusMap[status] || 'Desconocido',
    },
    {
      title: 'Acciones',
      render: (_, record) => (
        <>
          {record.status !== 3 ? (
            <>
              <Button onClick={() => handleButtonClick(record)} className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Estado</Button>
            </>
          ) : (
            <span className="mr-1 bg-green-800  text-white font-bold py-2 px-4 rounded">Finalizado</span>
          )}
          
          <Button onClick={() => DeleteButton(record)} className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Borrar</Button>
          
          
          <PDFDownloadLink
            document={<OrderPDFGenerator orderData={record} />} 
            fileName={`order_${record.id}.pdf`}
            className="mr-1 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            {({ blob, url, loading, error }) =>
              {
                return (
                  loading ? 'Loading document...' : 'PDF'
                )
              }
            }
          </PDFDownloadLink>

          <Link href={`/orders/${record.id}`} passHref>
            <button className="mr-1 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Ver Detalles</button>
          </Link>

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
    <Table columns={columns} dataSource={orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)} onChange={onChange} pagination={false} />

    <Pagination
      current={currentPage}
      onChange={handlePageChange}
      total={orders.length}
      pageSize={itemsPerPage} // Configura el tamaño de página
      style={{ marginTop: '16px', textAlign: 'center' }}
    />
  </>

  );
}



