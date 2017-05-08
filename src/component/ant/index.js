/**
 * Created by songzhongkun on 2017/5/8.
 */
import React from 'react';
import {DatePicker, Button} from 'antd';

import './ant.css';

export default class Header extends React.Component {

    render() {
        return (
            <div className="ant_content">
                <DatePicker/>&nbsp;&nbsp;<Button type="primary">Primary</Button>
            </div>
        )
    }
}