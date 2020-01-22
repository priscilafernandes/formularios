import React, { Component } from 'react';
import { Form, Input, Row, Col, Checkbox, Button } from 'antd';
import '../style/scss/FormNewUser.scss';

import SocialMedia from './SocialMedia';

class FormNewUser extends Component {  
  render() {
    return (
      <Row type='flex' justify='center'>
        <Col span={10} className='img-backg img-block-new'>
          <h1 className='title'>Hello<br/>World.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aenean euismod bibendum laoreet.</p>
        </Col>

        <Col span={10} className='form-block-new'>
          <h1 className='subtitle'>Register</h1>
          <p className='account-text'>Don't have an account? <a href='https://google.com'>Create your account</a>, it takes less than a minute.</p>
          
          <Form layout='horizontal' className='form'>
            <Form.Item label='NAME' className='label'>
              <Input className='form-item-input' />
            </Form.Item>

            <Form.Item label='EMAIL ID' className='label'>
              <Input type='email' className='form-item-input' />
            </Form.Item>

            <Form.Item label='PHONE' className='label'>
              <Input className='form-item-input' />
            </Form.Item>

            <Form.Item label='PASSWORD' className='label'>
              <Input type='password' className='form-item-input' />
            </Form.Item>
            
            <Form.Item>
              <Checkbox className='checkbox'>
                I accept <a href='https://google.com'>terms and conditions</a> and <a href='https://google.com'>privacy policy</a>.
              </Checkbox>
            </Form.Item>

            <Row type='flex' justify='end'>
              <Button type='primary' htmlType='submit' className='btn-login'>LOGIN</Button>
            </Row>
          </Form>
          
          <SocialMedia />
        </Col>
      </Row>
    );
  }
}

export default FormNewUser;