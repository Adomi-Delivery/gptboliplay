'use client';
import React from "react";
import axios from 'axios';
import { Button, Form, Input, message } from "antd";

export default function FormOrder() {


  const onFinish = async (values: any) => {
  
    try {
      const response = await axios.post('/api/orders', values);
      if (response.status === 200) {
        console.log('Success:', values);
        message.success('¡Datos enviados correctamente!');
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

  return (
    <>
      <Form
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
          label="Name"
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
          label="Cantidad (x100)"
          name="quantity"
          rules={[{ required: true, message: "El campo no debe ir vacio" }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </>
  );
}
