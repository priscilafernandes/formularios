import React, { Component } from 'react';
import { Icon, Row, Button } from 'antd';
import '../style/scss/SocialMedia.scss';

class SocialMedia extends Component {
  render() {
    return (
      <Row className='margin'>
        <p className='paragraph-text'>Login with social media:</p>

        <Row type='flex' justify='space-between' className='container-btn'>
          <Button type='button' className='btn-social facebook'>
            <Icon type='facebook' theme='filled' />
            <span id='btn-social-text'>Facebook</span>
          </Button>

          <Button type='button' className='btn-social twitter'>
            <Icon type='twitter-square' theme='filled' />
            <span id='btn-social-text'>Twitter</span>
          </Button>

          <Button type='button' className='btn-social google'>
            <Icon type='google-plus-square' theme='filled' />
            <span id='btn-social-text'>Google +</span>
          </Button>
        </Row>
      </Row>
    );
  }
}

export default SocialMedia;