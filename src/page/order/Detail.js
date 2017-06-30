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

    static propTypes = {
        orderEntries: React.PropTypes.array
    };

    static defaultProps = {
        orderEntries: [
            {
                product: {
                    code: 'PTOL',
                    name: 'Port Caption Outlay',
                },
                productConfig: {
                    products: [
                        {
                            config: {
                                agency: 'Shanghai Seasky Shipping Agency Co.,Ltd.',
                                address: 'Rm 101, Port Building, No.1 Fenghe Rd.,Pudong New Area, Shanghai 200120 PRC',
                                contactPerson: 'Jin Chen',
                                tel: '+86-21-88888888',
                                email: 'shanghai@seasky.com',
                                requires: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                            }
                        }
                    ]
                }
            },
            {
                product: {
                    code: 'PTAGMINPECN',
                    name: 'AGM Inspection',
                },
                productConfig: {
                    products: [
                        {
                            config: {
                                visitFiles: [
                                    {
                                        uid: -1,
                                        name: 'xxx.png',
                                        status: 'done',
                                        url: 'http://www.baidu.com/xxx.png',
                                    }
                                ],
                                nextPort: 'shanghai',
                                remark: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                            }
                        }
                    ]
                }
            },
            {
                product: {
                    code: 'PTPSCIA',
                    name: 'PSC Inspection',
                },
                productConfig: {
                    products: [
                        {
                            config: {
                                remark: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                            }
                        }
                    ]
                }
            },
            {
                product: {
                    code: 'PTCVD',
                    name: 'Medical Service',
                },
                productConfig: {
                    products: [
                        {
                            config: {
                                persons: [{
                                    fullName: 'James Bond',
                                    rank: 'United Kingdom',
                                    symptom: 'Arrival Flight No.'
                                }],
                                visitFiles: [
                                    {
                                        uid: -1,
                                        name: 'xxx.png',
                                        status: 'done',
                                        url: 'http://www.baidu.com/xxx.png',
                                    }
                                ],
                                remark: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                            }
                        }
                    ]
                }
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            product: undefined,
            orderEntry: undefined
        }
    }

    renderServiceSettingElem(styles) {

        const orderEntry = this.getOrderEntry();
        const props = {
            edit: this.state.edit,
            showBtn: true,
            title: orderEntry.product.name,
            formData: orderEntry.productConfig,
            onSubmit: this.handleSubmit.bind(this),
            onEditCancel: this.handlerEditCancel.bind(this),
        };
        const ProductForm = ConfigForm[orderEntry.product.code];

        return (
            <div style={styles.service}>
                <div style={styles.serviceLeft}>
                    <div style={{padding: 20}}>
                        {
                            this.props.orderEntries.map((item, i) => {
                                return (
                                    <div key={`product${i + 1}`} style={styles.serviceName}
                                         onClick={this.handlerServerItem.bind(this, item.product.code)}>{item.product.name}</div>
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

    getOrderEntry() {
        let orderEntry = this.state.orderEntry;
        if (!orderEntry) {
            const {orderEntries} = this.props;
            orderEntry = _.cloneDeep(orderEntries[0]);
        }
        return orderEntry;
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
    handlerServerItem(code) {
        const {orderEntries} = this.props;
        const orderEntry = _.find(orderEntries, item => item.product.code == code);
        this.setState({orderEntry: _.cloneDeep(orderEntry), edit: false})
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
        let product = this.getOrderEntry();
        product.productConfig = values;

        this.setState({edit: false, product});
    }
}