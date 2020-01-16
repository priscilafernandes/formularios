import React, { Component } from 'react';
import { Form } from 'antd';

class FormNewUser extends Component {
  state = {

  }
  
  render() {
    return (
      <>
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
      </div>

      <h2>Register</h2>
      <p>Don't have an account? <a href='#'>Create your account</a>, it takes less than a minute.</p>
      <Form.Item>        
        <input type='text' placeholder='NAME'></input>
        <input type='text' placeholder='EMAIL ID'></input>
        <input type='text' placeholder='PHONE'></input>
        <input type='password' placeholder='PASSWORD'></input>
        <input type='checkbox'></input><span>I accept <a href='#'>terms and conditions</a> and <a href='#'>privacy policy</a>.</span>
        <button type='submit'>Login</button>
      </Form.Item>

      <div>
        <h5>Login with social media</h5>
        <button type='button'>Facebook</button>
        <button type='button'>Twitter</button>
        <button type='button'>Google +</button>
      </div>
      </>
    );
  }
}

export default FormNewUser;