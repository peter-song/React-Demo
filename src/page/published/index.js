/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;

import Top from '../../component/top/index';
import Card from '../../component/card/index';

export default class Portal extends React.Component {

    render() {
        let title = 'Inquiry Statement';
        return (
            <Layout>
                <Top title={title}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Price Inquiry</Breadcrumb.Item>
                        <Breadcrumb.Item>Inquiry Detail</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card />
                </Content>
            </Layout>
        )
    }
}