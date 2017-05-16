/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content} = Layout;

import Card from '../../component/ProductCard/index';

export default class Portal extends React.Component {

    static defaultProps = {
        products: [
            {
                id: 1,
                name: 'Spare Part Delivery'
            },
            {
                id: 2,
                name: 'Crew Change'
            },
            {
                id: 3,
                name: 'Owner/Master Request'
            },
            {
                id: 4,
                name: 'PD Cover'
            },
            {
                id: 5,
                name: 'Inspection'
            },
            {
                id: 6,
                name: 'Outward/Inward Formality'
            },
            {
                id: 7,
                name: 'CTM'
            },
            {
                id: 8,
                name: 'Spare Part Delivery'
            },
            {
                id: 9,
                name: 'Crew Change'
            },
            {
                id: 10,
                name: 'Owner/Master Request'
            }
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        let title = 'Inquiry Statement';
        return (
            <Layout>
                <Header style={{background: '#fff'}}>
                    <h1 onClick={() => this.clickTest()}>{title}</h1>
                </Header>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Price Inquiry</Breadcrumb.Item>
                        <Breadcrumb.Item>Inquiry Detail</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card products={this.props.products}/>
                </Content>
            </Layout>
        )
    }

    clickTest(){
        console.log(this.state.isOpen)
    }
}