
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [connected, setConnected] = useState(null);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  const handleClick = () => {
    fetch('http://localhost:3030')
        .then(response => response.json())
        .then(data => setConnected(data.answer));
  }

  return (
       <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
     <h1>Register</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
      <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="password2"
        rules={[
          {
            required: true,
            message: 'Please repeat your password',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password again"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleClick}>
          Register
        </Button> Or <Link to="/">Log in</Link>
      </Form.Item>
         <small>{connected}</small>
    </Form>

  );
};

export default Register;
