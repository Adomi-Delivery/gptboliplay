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

  const [quantity, setQuantity] = useState<number | null>(null);

  const handleQuantityChange = (value: number | null) => {
    setQuantity(value);
  };
  const handleFormValuesChange = (changedValues: any) => {
    const { quantity } = changedValues;
    if (quantity !== undefined) {
      form.setFieldsValue({
        multipliedQuantity: quantity * 100,
      });
    }
  };
  // _____________________________________________________________________________________________________________________________
  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input name="name"/>
        </Form.Item>

        <Form.Item
          label="CC"
          name="cc"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Dirección"
          name="address"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Ciudad"
          name="city"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
        label="Cantidad"
        name="quantity"
        rules={[
          { required: true, message: "El campo no debe ir vacío" },
          { type: 'number' },
        ]}
        style={{ display: "inline-block" }} // Estilo para ponerlo en línea
      >
        <InputNumber onChange={handleQuantityChange} />
      </Form.Item>

      <Typography.Text style={{ display: "inline-block"}}>
        = {quantity !== null ? quantity * 100 : ""}
      </Typography.Text>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">
            Enviar pedido
          </Button>
        </Form.Item>

      </Form>
    </>
  );
}
