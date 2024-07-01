import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();

  function onFinish(values) {
    dispatch(userLogin(values));
    console.log(values);
  }

  return (
    <div className="login">
      <Row gutter={16}>
        <Col lg={16}>
          <img src="" alt="" />
          <h1>class</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-2 mb-4">Login</button>
            <hr />
            <Link to="/register">Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
