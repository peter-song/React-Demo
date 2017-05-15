/**
 * Created by songzhongkun on 2017/5/12.
 */

import React from 'react';
import {Layout, Table, Breadcrumb, Tabs} from 'antd';
const {Header, Content, Footer} = Layout;

const TabPane = Tabs.TabPane;

import Top from '../../component/top/index';
import Common from '../../component/quotation/Common';
import Statement from '../../component/quotation/Statement2';

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
                                remark: 'NRT49000*0.8 *2 + 1.24*30000+1.04*30000+0.85 * 40000+0.52*20000=123456.00',
                                RMB: '3000.00',
                                USD: '700.00',
                            },
                            {
                                title: 'Communication Fee',
                                remark: '',
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
                                remark: 'NRT49000*0.8 *2 + 1.24*30000+1.04*30000+0.85 * 40000+0.52*20000=123456.00',
                                RMB: '500.00',
                                USD: '100.00',
                            },
                            {
                                title: 'Communication Fee',
                                remark: '',
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
            quotation: {
                background: '#fff',
                padding: 10,
            },

            quotationCommon: {
                marginTop: 10
            },

            quotationContent: {
                marginTop: 20
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
                    <div style={styles.quotation}>
                        <Tabs onChange={this.callback} type="card">
                            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                        </Tabs>
                        <Common data={[quotationStatements.common]}/>
                        <Statement detail={quotationStatements.detail}/>
                    </div>
                </Content>
            </Layout>
        )
    }

    callback(key) {
        console.log(key)
    }
}