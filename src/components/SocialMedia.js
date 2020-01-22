import React, { Component } from 'react';
import { Icon, Row, Button } from 'antd';

class SocialMedia extends Component {
  render() {
    return (
      <Row>
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
      </Row>
    );
  }
}

export default SocialMedia;