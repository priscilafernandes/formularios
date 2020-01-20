import React, { Component } from 'react';
import { Layout, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import '../style/FormNewUser.css';

class FormNewUser extends Component {
  state = {

  }
  
  render() {
    return (
      <Row className='container'>
        <Row type='flex' justify='center'>
          <Col span={10} className='img-backg img-block'>
            <h1 className='title'>Hello<br/>World.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aenean euismod bibendum laoreet.</p>
          </Col>

          <Col span={10} className='form-block'>
            <h1 className='subtitle'>Register</h1>
            <p>Don't have an account? <a href='#'>Create your account</a>, it takes less than a minute.</p>
            
            <Form>
              <Form.Item label='NAME'><Input /></Form.Item>
              <Form.Item label='EMAIL ID'><Input type='email' /></Form.Item>
              <Form.Item label='PHONE'><Input /></Form.Item>
              <Form.Item label='PASSWORD'><Input type='password' /></Form.Item>
              <Form.Item>
                <Checkbox className='checkbox'>I accept <a href='#'>terms and conditions</a> and <a href='#'>privacy policy</a>.</Checkbox>
              </Form.Item>
              <Form.Item>
                <Row type='flex' justify='end'>
                  <Button type='primary' htmlType='submit' className='btn-login'>LOGIN</Button>
                </Row>
              </Form.Item>
            </Form>

            <p>Login with social media</p>
            <Row type='flex' justify='space-between'>
              <Button type='button' className='btn-social facebook'>
                <Icon type='facebook' theme='filled' />Facebook
              </Button>
              <Button type='button' className='btn-social twitter'>
                <Icon type='twitter-square' theme='filled' />Twitter
              </Button>
              <Button type='button' className='btn-social google'>
                <Icon type='google-plus-square' theme='filled' />Google +
              </Button>
            </Row>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default FormNewUser;