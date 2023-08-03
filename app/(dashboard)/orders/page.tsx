'use client';
import React, { useEffect, useState } from 'react';
import { Table, Button  } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import axios from 'axios';

export default function FormOrder() {

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
  CC: number;
  address: string;
  quantity: number;
  status: number;
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
    console.log(status)
    const response = await axios.put(`/api/orders/${id}`, {status, id});
    console.log(response);
    fetchData();
  } catch (error) {
    console.error('Error al actualizar:', error);
  }
};
// ___________________________________________________________________________________________________________________

// Columns
const columns: ColumnsType<DataType> = [
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'CC',
    dataIndex: 'cc',
    sorter: (a, b) => a.CC - b.CC,
  },
  {
    title: 'address',
    dataIndex: 'address',
    sorter: (a, b) => a.CC - b.CC,
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    sorter: (a, b) => a.status - b.status,
    render: (status) => statusMap[status] || 'Desconocido',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => (
      record.status !== 3 ? (
        <Button onClick={() => handleButtonClick(record)}>Estado</Button>
      ) : (
        <span>Estado finalizado</span>
      )
    ),
  },
];
// ___________________________________________________________________________________________________________________

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

return (
    <Table columns={columns} dataSource={orders} onChange={onChange} />
);
}