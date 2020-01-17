import React, { Component } from 'react';
import { Layout, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import '../style/FormNewUser.css';

class FormNewUser extends Component {
  state = {

  }
  
  render() {
    return (
      <div className='container'>
        <Row type='flex' justify='center'>
          <Col span={9} className='img-backg img-block'>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </Col>

          <Col span={9} className='form-block'>
            <h1>Register</h1>
            <p>Don't have an account? <a href='#'>Create your account</a>, it takes less than a minute.</p>
            
            <Form>
              <Form.Item label='NAME'><Input /></Form.Item>
              <Form.Item label='EMAIL ID'><Input type='email' /></Form.Item>
              <Form.Item label='PHONE'><Input /></Form.Item>
              <Form.Item label='PASSWORD'><Input type='password' /></Form.Item>
              <Form.Item>
                <Checkbox>I accept <a href='#'>terms and conditions</a> and <a href='#'>privacy policy</a>.</Checkbox>
              </Form.Item>
              <Form.Item><Button type='primary' htmlType='submit'>Login</Button></Form.Item>
            </Form>

            <div>
              <p>Login with social media</p>
              <Button type='button'><Icon type="facebook" theme="filled" />Facebook</Button>
              <Button type='button'><Icon type="twitter-square" theme="filled" />Twitter</Button>
              <Button type='button'><Icon type="google-plus-square" theme="filled" />Google +</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormNewUser;