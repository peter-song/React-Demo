/**
 * Created by songzhongkun on 2017/5/11.
 */

import React from 'react';

import {Button} from 'antd';

import './top.css';

export default class Top extends React.Component {

    static defaultProps = {
        title: 'Price Inquiry',
        hasButton: false
    };

    render() {

        let btnElem = this.props.hasButton ? <div className="topButton">
                <Button type="primary">+ Add Inquiry</Button>
            </div> : '';
        return (
            <div className="topContent">
                <div className="topTitle">
                    {this.props.title}
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
        )
    }
}