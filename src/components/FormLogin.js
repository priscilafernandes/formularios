import React, { Component } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../style/scss/FormLogin.scss';
import SocialMedia from './SocialMedia';

class FormLogin extends Component {  
  render() {
    return (
      <Row type='flex' justify='center' className='container'>
        <Col className='img-backg-login img-block-login'>
          <Row type='flex' justify='center'>
            
            <Col className='form-block-login'> 
              <h1 className='subtitle'>Login</h1>
              <p className='paragraph-text'>Don't have an account? <Link to='/'>Create your account</Link>, it takes less than a minute.</p>
              
              <Form layout='inline' className='form'>
                <Form.Item label='EMAIL' className='label'>
                  <Input type='email' className='form-item-input' />
                </Form.Item>

                <Form.Item label='PASSWORD' className='label'>
                  <Input type='password' className='form-item-input' />
                </Form.Item>

                <Row type='flex' justify='end'>
                  <Button type='primary' htmlType='submit' className='btn-login'>LOGIN</Button>
                </Row>
              </Form>

              <SocialMedia />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FormLogin;