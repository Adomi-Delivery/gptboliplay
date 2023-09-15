'use client';
import React, { useState } from "react";

import axios from 'axios';
import { Button, Form, Input, message, InputNumber, Typography, Row, Col  } from "antd";
import { useRouter } from 'next/navigation'

export default function FormOrder() {
  const router = useRouter()

  // _____________________________________________________________________________________________________________________________
  
  
  
  
  
  // funciones al finalizar el formulario
  const onFinish = async (values: any) => {
  
    try {
      const response = await axios.post('/api/orders', values);
      if (response.status === 200) {
        console.log('Success:', values);
        message.success('¡Datos enviados correctamente!');
        form.resetFields();

        router.push('/redirect')

      } else {
        console.log('Failed:', response);
        message.error('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // _____________________________________________________________________________________________________________________________
  // cambio de estado para texto
  const [form] = Form.useForm();

  const [quantity, setQuantity] = useState<number | null>(1);

  const handleQuantityChange = (value: number | null) => {
    setQuantity(value);
  };
  const handleIncrement = () => {
    if (quantity !== null) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(2); // Si quantity es null, incrementar desde 1 sería 2
    }
  };

  const handleDecrement = () => {
    if (quantity !== null && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1); // Si quantity es null o es 1, decrementar sería 1
    }
  };
  
  // _____________________________________________________________________________________________________________________________
  return (
    <>
      <Form
        form={form}
        name="form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="custom-form"   
        layout="vertical"
        >
        
        <div className="pb-5">
          <h2 className="text-2xl font-bold">1.Contactó</h2>
          <p >Ingresé los datos para comunicarnos cuando los rótulos esten listos</p>
        </div>  

        <Form.Item
          label="Cliente"
          name="client"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
          labelCol={{ span: 6, style: { fontWeight: 'bold', color: 'blue' } }}

        >
          <Input placeholder="Nombre y Apellido"/>
        </Form.Item>
        
        <Form.Item
          label="Telefono"
          name="client_phone"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold', color: 'blue' } }}

        >
          <Input placeholder="Celular"/>
        </Form.Item>

        <div className="pb-5">
          <h2 className="text-2xl font-bold">2.Información a imprimir</h2>
          <p>Se imprimirá como remitente en el rotulo</p>
        </div>        
        
        <Form.Item
          label="Empresa / Remitente"
          name="name"
          rules={[{}]}
          labelCol={{ span: 20, style: { fontWeight: 'bold' } }}
        >
          <Input placeholder="Empresa / Remitente"/>
        </Form.Item>

        <Form.Item
          label="Documento"
          name="cc"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Cédula o NIT"/>
        </Form.Item>

        <Form.Item
          label="Telefeno"
          name="phone"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Telefono"/>
        </Form.Item>

        <Form.Item
          label="Dirección"
          name="address"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Dirección"/>
        </Form.Item>

        <Form.Item
          label="Instagram"
          name="instagram"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Instagram"/>
        </Form.Item>
        
        <Form.Item
          label="Facebook"
          name="facebook"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Facebook"/>
        </Form.Item>

        <Form.Item
          label="Ciudad"
          name="city"
          rules={[{}]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}

        >
          <Input placeholder="Ciudad"/>
        </Form.Item>
        
        <div className="pb-5">
          <h2 className="text-2xl font-bold">3. Cantidad de rótulos</h2>
          <p className="text-xs">Se imprimen x100 / 1=100 rotulos</p>
        </div>   
        
        {/* cantidad y botones */}
        <Form.Item
          name="quantity"
          rules={[
            { required: true, message: 'El campo no debe ir vacío' },
            { pattern: /^[0-9]+$/, message: 'Ingrese solo números' },
          ]}
          labelCol={{ span: 6, style: { fontWeight: 'bold'} }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initialValue={1}
        >
          <InputNumber value={quantity} onChange={handleQuantityChange} />
          
          <Button onClick={handleDecrement} className="m-2">
            -
          </Button>
          <Button onClick={handleIncrement} className="">
            +
          </Button>
        </Form.Item>
        
        
        <Typography.Text
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold", // Aplicar negrita
            fontSize: "24px",   // Aumentar el tamaño de fuente
          }}
        >
          Cantidad total: {quantity !== null ? quantity * 100 : ""}
        </Typography.Text>
        <Typography.Text
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Precio: {quantity !== null ? `$${(quantity * 6000).toLocaleString()}` : ""}
        </Typography.Text>

        <Form.Item className="flex justify-center pt-4">
          <Button htmlType="submit" className=" font-bold bg-red-400 text-white border-r-4 border-b-4 border-l-1 border-t-1 border-neutral-950 hover:bg-red-500!important">
            Enviar pedido
          </Button>
        </Form.Item>
        
        <div className="pt-3">
          <p className="text-sm pb-2">Nota: Los errores por mala digitación serán asumidos por el cliente</p>
          <p className="text-sm">Cualquier duda o comentario contáctenos al whatsapp 310 849 8152</p>

        </div>
      
      </Form>
      
    </>
  );
}


