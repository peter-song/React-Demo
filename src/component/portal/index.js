/**
 * Created by songzhongkun on 2017/5/12.
 */

import React from 'react';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;

import Top from '../common/top/index';

export default class Portal extends React.Component {

    render() {
        return (
            <Layout>
                <Top />
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}