import React, { Component } from 'react';
import { Form, Input, Row, Col, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../style/scss/FormRegister.scss';
import SocialMedia from './SocialMedia';

class FormRegister extends Component {  
  render() {
    return (
      <Row type='flex' justify='center' className='container'>
        <Col span={10} className='img-backg img-block-register'>
          <h1 className='title'>Hello<br/>World.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aenean euismod bibendum laoreet.</p>
        </Col>

        <Col span={10} className='form-block-register'>
          <h1 className='subtitle'>Register</h1>
          <p className='paragraph-text'>Already have an account? <Link to='/login'>Click here</Link>.</p>
          
          <Form layout='inline' className='form'>
            <Form.Item label='NAME' className='label'>
              <Input type='text' className='form-item-input' />
            </Form.Item>

            <Form.Item label='EMAIL ID' className='label'>
              <Input type='email' className='form-item-input' />
            </Form.Item>

            <Form.Item label='PHONE' className='label'>
              <Input type='text' className='form-item-input' />
            </Form.Item>

            <Form.Item label='PASSWORD' className='label'>
              <Input type='password' className='form-item-input' />
            </Form.Item>
            
            <Form.Item>
              <Checkbox className='checkbox'>
                I accept <Link to='/'>terms and conditions</Link> and <Link to='/'>privacy policy</Link>.
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

export default FormRegister;