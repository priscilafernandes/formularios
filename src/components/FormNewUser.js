import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

class FormNewUser extends Component {
  state = {

  }
  
  render() {
    return (
      <div>
        <Row>
          <Col span={12} xs={2} sm={4} md={6} lg={8} xl={10}>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </Col>

          <Col span={12} xs={2} sm={4} md={6} lg={8} xl={10}>
            <h1>Register</h1>
            <p>Don't have an account? <a href='https://www.google.com/'>Create your account</a>, it takes less than a minute.</p>
            
            <Form>
            <Form.Item label='NAME'><Input /></Form.Item>

              <input type='text' placeholder='NAME'></input>
              <input type='text' placeholder='EMAIL ID'></input>
              <input type='text' placeholder='PHONE'></input>
              <input type='password' placeholder='PASSWORD'></input>
              <input type='checkbox'></input><span>I accept <a href='https://www.google.com/'>terms and conditions</a> and <a href='https://www.google.com/'>privacy policy</a>.</span>
              <Button type='submit'>Login</Button>
            </Form>

            <div>
              <h5>Login with social media</h5>
              <button type='button'>Facebook</button>
              <button type='button'>Twitter</button>
              <button type='button'>Google +</button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormNewUser;