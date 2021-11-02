import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LangButton } from "./index";

export const LoginScreens = () => {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login({ username: values.username, password: values.password });
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LangButton htmlType="submit" type="primary">
          登陆
        </LangButton>
      </Form.Item>
    </Form>
  );
};
