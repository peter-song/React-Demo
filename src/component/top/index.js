/**
 * Created by songzhongkun on 2017/5/11.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'antd';

import './top.css';

class Top extends React.Component {

  static propTypes = {
    hasButton: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Price Inquiry',
    hasButton: false,
  };

  render() {

    const {hasButton, title} = this.props;

    let btnElem = hasButton ?
      <div className="topButton">
        <Button type="primary">+ Add Inquiry</Button>
      </div> : '';

    return (
      <div className="topContent">

        <div className="topTitle">
          {title}
        </div>

        {btnElem}

        <div className="topLogin">
          Sign out
        </div>

        <div className="topUserInfo">
          <span className="text">song.zhongkun@e-ports.com</span>
        </div>

        <div className="topHome">
          <span className="text">Home Page</span>
        </div>

      </div>
    );

  }
}

export default Top;