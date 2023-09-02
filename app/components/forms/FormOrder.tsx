'use client';
import React, { useState } from "react";

import axios from 'axios';
import { Button, Form, Input, message, InputNumber, Typography, Row, Col  } from "antd";

export default function FormOrder() {

  // _____________________________________________________________________________________________________________________________
  
  
  
  
  
  // funciones al finalizar el formulario
  const onFinish = async (values: any) => {
  
    try {
      const response = await axios.post('/api/orders', values);
      if (response.status === 200) {
        console.log('Success:', values);
        message.success('¡Datos enviados correctamente!');
        form.resetFields();
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
          label="Nombre Cliente"
          name="client"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input placeholder="Nombre y Apellido"/>
        </Form.Item>
        
        <Form.Item
          label="Telefono Cliente"
          name="client_phone"
          rules={[{ pattern: /^[0-9]+$/, message: "Ingrese solo números" },
                  {  min: 10, message: "Debe tener al menos 10 caracteres" },
                  {  required: true, message: "El campo no debe ir vacio" }
                ]}
        >
          <Input placeholder="Celular"/>
        </Form.Item>

        <div className="pb-5">
          <h2 className="text-2xl font-bold">2.Información a imprimir</h2>
          <p>Se imprimirá como remitente en el rotulo</p>
        </div>        
        
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{}]}
        >
          <Input placeholder="Nombre y Apellido"/>
        </Form.Item>

        <Form.Item
          label="Documento"
          name="cc"
          rules={[{}]}
        >
          <Input placeholder="Cédula o NIT"/>
        </Form.Item>

        <Form.Item
          label="Dirección"
          name="address"
          rules={[{}]}
        >
          <Input placeholder="Dirección"/>
        </Form.Item>

        <Form.Item
          label="Instagram"
          name="instagram"
          rules={[{}]}
        >
          <Input placeholder="Instagram"/>
        </Form.Item>
        
        <Form.Item
          label="Facebook"
          name="facebook"
          rules={[{}]}
        >
          <Input placeholder="Facebook"/>
        </Form.Item>

        <Form.Item
          label="Ciudad"
          name="city"
          rules={[{}]}
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
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initialValue={1}
        >
        <InputNumber value={quantity} onChange={handleQuantityChange} />
        
        <Button onClick={handleDecrement}>
          -
        </Button>
        <Button onClick={handleIncrement}>
          +
        </Button>
      </Form.Item>
        
        
        <Typography.Text style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
         Cantidad total: {quantity !== null ? quantity * 100 : ""}
        </Typography.Text>

        <Form.Item className="flex justify-center pt-4">
          <Button htmlType="submit" className=" font-bold bg-red-400 text-white border-r-4 border-b-4 border-l-1 border-t-1 border-neutral-950 hover:bg-red-500!important">
            Enviar pedido
          </Button>
        </Form.Item>
        
        <div className="pt-3">
          <p className="text-sm pb-2">Nota: Los errores por mala digitación serán asumidos por el cliente</p>
          <p className="text-sm">Cualquier duda o comentario contáctenos al whatsapp 300 123 456</p>
        
        </div>
      
      </Form>
      
    </>
  );
}


