import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "../components/Spinner";

AOS.init();

function Register() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <div>
      <Row gutter={16}>
        {loading && <Spinner />}
        <Col lg={16}>
          <img
            data-aos="slide-left"
            data-aos-duration="1500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzxFjMtabEUcV1dOM-0GVh2w4cZoO1rQ3Jw&s"
            alt=""
          />
          <h1>class</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
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
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Register</button>

            <br />
            <Link to="/login">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
