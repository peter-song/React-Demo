/**
 * Created by songzhongkun on 2017/6/20.
 */

import React from 'react';
import _ from 'lodash';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;

import ConfigForm from '../../component/form/order/config-forms';
const defaultIndex = 3;

export default class Detail extends React.Component {

    getStyles() {

        let styles = {
            quotationContent: {
                background: '#fff',
                padding: 10,
            },

            service: {
                marginTop: 16
            },

            serviceLeft: {
                float: 'left',
                width: '20%',
            },

            serviceRight: {
                float: 'right',
                minHeight: 300,
                border: '1px solid #E9E9E9',
                width: '80%',
            },

            serviceTitle: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
                letterSpacing: 0,
            },

            serviceOperation: {
                marginLeft: 16,
                fontWeight: 400,
                fontSize: 14,
                color: '#4990E2',
                letterSpacing: 0,
                cursor: 'pointer',
            },

            serviceName: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                marginTop: 10,
                cursor: 'pointer',
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static defaultProps = {
        products: [
            {
                _id: '56651fc1d4c6815fc8ef7e86',
                code: 'PTOL',
                name: 'Port Caption Outlay',
                data: {
                    agency: 'Shanghai Seasky Shipping Agency Co.,Ltd.',
                    address: 'Rm 101, Port Building, No.1 Fenghe Rd.,Pudong New Area, Shanghai 200120 PRC',
                    contactPerson: 'Jin Chen',
                    tel: '+86-21-88888888',
                    email: 'shanghai@seasky.com',
                    requires: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                }
            },
            {
                _id: '566549f75c57786239cb3241',
                code: 'PTAGMINPECN',
                name: 'AGM Inspection',
                data: {
                    requires: '',
                    nextPort: ''
                }
            },
            {
                _id: '56976c43d4c6a79a4e016f3d',
                code: 'PTPSCIA',
                name: 'PSC Inspection',
                data: {
                    requires: ''
                }
            },
            {
                _id: '567a29c4c8d751d30fa59936',
                code: 'PTCVD',
                name: 'Medical Service',
                data: {
                    requires: '',
                    files: [{
                        uid: -1,
                        name: 'xxx.png',
                        status: 'done',
                        url: 'http://www.baidu.com/xxx.png',
                    }],
                    persons: []
                }
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            product: undefined
        }
    }

    renderServiceSettingElem(styles) {

        const products = this.props.products;
        let product = this.state.product;
        if (!product && products && products.length) {
            product = _.cloneDeep(products[defaultIndex]);
        }

        const ProductForm = ConfigForm[product.code];

        const props = {
            edit: this.state.edit,
            showBtn: true,
            title: product.name,
            formData: product.data,
            onSubmit: this.handleSubmit.bind(this),
            onEditCancel: this.handlerEditCancel.bind(this),
            products
        };

        return (
            <div style={styles.service}>
                <div style={styles.serviceLeft}>
                    <div style={{padding: 20}}>
                        {
                            this.props.products.map((item, i) => {
                                return (
                                    <div key={`product${i + 1}`} style={styles.serviceName}
                                         onClick={this.handlerServerItem.bind(this, item)}>{item.name}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={styles.serviceRight}>
                    {ProductForm ? <ProductForm {...props} /> :
                        <h1 style={{padding: 10}}>There is no matching form!</h1>}

                </div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles();

        return (
            <Layout>
                <Header style={{background: '#fff'}}>
                    title
                </Header>
                <Content>
                    <Breadcrumb style={{margin: '12px 16px'}}>
                        <Breadcrumb.Item>Price Inquiry</Breadcrumb.Item>
                        <Breadcrumb.Item>Inquiry Result</Breadcrumb.Item>
                        <Breadcrumb.Item>Quotation statement</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={styles.quotationContent}>
                        {this.renderServiceSettingElem(styles)}
                    </div>
                </Content>
            </Layout>
        )
    }

    /**
     * 选择服务项
     * @param product
     */
    handlerServerItem(product) {
        this.setState({product: _.cloneDeep(product), edit: false})
    }

    /**
     * 点击编辑和取消
     * @param edit
     */
    handlerEditCancel(edit) {
        this.setState({edit})
    }

    /**
     * 保存
     * @param values
     */
    handleSubmit(values) {
        const products = this.props.products;
        let product = this.state.product;
        if (!product && products && products.length) {
            product = _.cloneDeep(products[defaultIndex]);
        }
        product.data = values;
        product.date = new Date();

        this.setState({edit: false, product});
    }
}