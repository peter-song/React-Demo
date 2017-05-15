/**
 * Created by songzhongkun on 2017/5/12.
 */

import React from 'react';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;

import Top from '../../component/top/index';
import Common from '../../component/quotation2/Common';
import Detail from '../../component/quotation2/Detail2';

export default class Portal extends React.Component {

    static defaultProps = {
        quotationStatements: {
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
        }
    };

    getStyles() {
        let styles = {
            quotationContent: {
                background: '#fff',
                padding: 10,
            }
        };

        return styles;
    }

    render() {
        let styles = this.getStyles();
        let quotationStatements = this.props.quotationStatements;
        return (
            <Layout>
                <Top />
                <Content>
                    <Breadcrumb style={{margin: '12px 16px'}}>
                        <Breadcrumb.Item>Price Inquiry</Breadcrumb.Item>
                        <Breadcrumb.Item>Inquiry Result</Breadcrumb.Item>
                        <Breadcrumb.Item>Quotation statement</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={styles.quotationContent}>
                        <Common info={quotationStatements.common}/>
                        <Detail detail={quotationStatements.detail}/>
                    </div>
                </Content>
            </Layout>
        )
    }
}