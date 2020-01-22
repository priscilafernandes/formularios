import React, { Component } from 'react';
import { Row, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../style/scss/_global.scss';

class FormLogin extends Component {  
  render() {
    return (
      <Row className='container-vh'>
        <Row type='flex' justify='center'>
          <h1 className='title'>404</h1>
        </Row>

        <Row type='flex' justify='center'>
          <Link to='/' className='link-btn'><Icon type="arrow-left" /> Return</Link>
        </Row>
      </Row>
    );
  }
}

export default FormLogin;