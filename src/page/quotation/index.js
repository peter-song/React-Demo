/**
 * Created by songzhongkun on 2017/5/12.
 */

import React from 'react';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;

import TotalPrice from '../../component/Offer/TotalPrice/TotalPrice';
import DetailTable from '../../component/Offer/DetailTable';
import EditTable from '../../component/Offer/EditTable';

export default class Portal extends React.Component {

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

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static defaultProps = {
        offerDetail: {
            common: {
                vessel: 'MV SSHSLDS DSLDKH',
                date: '28/May/2017',
                port: 'Shanghai',
                serviceType: 'Protecting Agency (Discharging)',
                rate: 'USD 1/6.9'
            },
            detail: {
                items: [
                    {
                        title: 'Port Agency',
                        RMB: '10000.00',
                        USD: '1900.00',
                        subDetail: [
                            {
                                title: 'Agency Fee',
                                remakes: 'NRT49000*0.8 *2 + 1.24*30000+1.04*30000+0.85 * 40000+0.52*20000=123456.00',
                                RMB: '3000.00',
                                USD: '700.00',
                            },
                            {
                                title: 'Communication Fee',
                                remakes: '',
                                RMB: '7000.00',
                                USD: '1200.00',
                            }
                        ]
                    },
                    {
                        title: 'Port Disbursement',
                        RMB: '700.00',
                        USD: '120.00',
                        subDetail: [
                            {
                                title: 'Towage for quarantine inspection at anchorage ',
                                remakes: 'NRT49000*0.8 *2 + 1.24*30000+1.04*30000+0.85 * 40000+0.52*20000=123456.00',
                                RMB: '500.00',
                                USD: '100.00',
                            },
                            {
                                title: 'Communication Fee',
                                remakes: '',
                                RMB: '200.00',
                                USD: '20.00',
                            }
                        ]
                    }
                ],
                total: {
                    RMB: '30700.00',
                    USD: '22030.00'
                }
            }
        },
        productInfo: {
            title: 'Cash to Master',
            offerType: 'USD',
            rate: '6.9',
            productItems: [
                {
                    id: 1,
                    name: 'Port Agency'
                },
                {
                    id: 2,
                    name: 'Spare Parts Delivery'
                },
                {
                    id: 3,
                    name: 'Crew Change'
                },
                {
                    id: 4,
                    name: 'Port Disbursement'
                }
            ]
        },

    };

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    renderServiceOperationElem(styles) {
        if (this.state.isEdit) {
            return <div>
                <span style={styles.serviceOperation}
                      onClick={this.handlerClickOperation.bind(this, 'cancel')}>Cancel</span>
                <span style={styles.serviceOperation}
                      onClick={this.handlerClickOperation.bind(this, 'save')}>Save</span>
            </div>;
        } else {
            return <span style={styles.serviceOperation}
                         onClick={this.handlerClickOperation.bind(this, 'edit')}>Edit</span>
        }
    }

    renderServiceSettingElem(styles) {
        return (
            <div style={styles.service}>
                <div style={styles.serviceLeft}>

                </div>
                <div style={styles.serviceRight}>
                    <div style={{padding: '11px 14px', background: '#F7F7F7'}}>
                        <div style={{float: 'left'}}>
                            <span style={styles.serviceTitle}>Cash to Master Setting</span>
                        </div>
                        <div style={{float: 'right'}}>
                            {this.renderServiceOperationElem(styles)}
                        </div>
                        <div style={styles.clear}></div>
                    </div>
                </div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles();
        let offerDetail = this.props.offerDetail;

        const totalPriceProps = {
            price: 'USD 22,030.00',
            company: 'Shanghai Seasky Shipping ltd.',
            rule: 'owner'
        };

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
                        <TotalPrice {...totalPriceProps}/>
                        <DetailTable offerDetail={offerDetail}/>
                        {this.renderServiceSettingElem(styles)}
                        <EditTable productInfo={this.props.productInfo}/>
                    </div>
                </Content>
            </Layout>
        )
    }

    handlerClickOperation(value) {
        let isEdit = this.state.isEdit;
        if (value == 'edit') {
            isEdit = true;
        } else if (value == 'cancel') {
            isEdit = false;
        } else if (value == 'save') {
            isEdit = false;
        }
        this.setState({isEdit})
    }
}