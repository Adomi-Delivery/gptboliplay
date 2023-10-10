'use client'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  
  const { Header, Sider, Content } = Layout;
  
    const [collapsed, setCollapsed] = useState(false);
    const {token: { colorBgContainer },} = theme.useToken();

    return (
      <Layout>
<<<<<<< HEAD
        
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Boliplay',
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'Hondubet',
              },
              {
                key: '3',
                icon: <UserOutlined />,
                label: 'Sivarbet',
              },
            ]}
          />
        </Sider>
=======
>>>>>>> 583ce682f6cd24540a0d8d874e33166ba56a22c6
          <Content
            style={{
              height: '100vh',
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
      </Layout>
    );
  }
