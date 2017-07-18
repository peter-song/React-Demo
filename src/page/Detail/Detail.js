/**
 * Created by songzhongkun on 2017/6/20.
 */

import React from 'react';
import _ from 'lodash';
import {Layout, Icon, Popconfirm, Tabs} from 'antd';
const TabPane = Tabs.TabPane;
const {Header, Content, Footer} = Layout;

import ConfigForm from '../../component/form/order/config-forms';
import SettingForm from '../../component/form/SettingForm';
import EditTable from '../../component/Offer/EditTable';

import '../detail.scss';

class Detail extends React.Component {

    getStyles() {

        let styles = {

            quotationContent: {
                background: '#fff',
                padding: 20,
            },

            progressContent: {
                border: '1px solid #D9D9D9',
                minHeight: 50,
                padding: 10,
            },

            cardContent: {
                display: 'flex',
                background: '#FFFFFF',
                border: '1px solid #D9D9D9',
                minHeight: 150,
                padding: '20px 10px',
                position: 'relative',
                overflow: 'hidden',
            },

            cardItem: {
                flex: '1',
                border: '1px solid #D9D9D9',
                margin: '0 10px',
                padding: 5,
            },

            cardLeftContent: {
                display: 'flex',
                alignItems: 'baseline',
            },

            cardShipName: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
            },

            cardIMO: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0,0,0,0.43)',
            },

            service: {
                marginTop: 16,
                display: 'flex',
            },

            serviceLeft: {
                width: 200,
                cursor: 'pointer',
            },

            serviceRight: {
                flex: '1',
                minHeight: 300,
                marginLeft: 14,
            },

            addServiceContent: {
                padding: 10,
                border: '1px dashed #4990E2',
                borderRadius: 2,
                textAlign: 'center',
            },

            addService: {
                fontWeight: 400,
                fontSize: 14,
                color: '#4990e2',
                marginLeft: 14,
            },

            selectService: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
                background: '#f7f7f7',
                textAlign: 'center',
                padding: 12,
            },

            contentBorder: {
                minHeight: 300,
                border: '1px solid #E9E9E9',
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
                padding: 13,
                borderBottom: '1px solid #E9E9E9',
            },

            new: {
                background: 'red',
                position: 'absolute',
                alignItems: 'flex-end',
                display: 'flex',
                justifyContent: 'center',
                transform: 'rotate(45deg)',
                right: -25,
                top: -25,
                width: 50,
                height: 50,
                color: '#fff',
            }

        };

        return styles;
    }

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            orderEntry: undefined,
            orderEntries: [
                {
                    product: {
                        code: 'PTOL',
                        name: 'Port Caption Outlay',
                    },
                    costItemsEstimated: [],
                    costItems: [],
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
                                },
                                product: {
                                    "code": "PTOLFVSL",
                                    "name": "Off Land",
                                    "_id": "5678aaca6c2fbe251343fc65",
                                    "costTypes": [{
                                        "index": 1,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTCRCG",
                                            "name": "Courier charge",
                                            "_id": "56651b9c5b4f53742b804e80"
                                        }
                                    }, {
                                        "index": 2,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5696fc57bc8002f657868961",
                                        "costType": {
                                            "code": "CTHGCGNO",
                                            "name": "Handling charge",
                                            "_id": "56947246d4c6b100045f73a0"
                                        }
                                    }, {
                                        "index": 3,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTTNCG",
                                            "name": "Transportation charge",
                                            "_id": "56651b9c5b4f53742b804e79"
                                        }
                                    }, {
                                        "index": 4,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc68",
                                        "costType": {
                                            "code": "CTCMCECG",
                                            "name": "Custom clearance charge",
                                            "_id": "56651b9c5b4f53742b804e82"
                                        }
                                    }, {
                                        "index": 5,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc67",
                                        "costType": {
                                            "code": "CTAFHTCG",
                                            "name": "Airfreight charge",
                                            "_id": "56651b9d5b4f53742b804e8c"
                                        }
                                    }, {
                                        "index": 6,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc66",
                                        "costType": {
                                            "code": "CTSFHTCG",
                                            "name": "Seafreight charge",
                                            "_id": "56651b9d5b4f53742b804e8d"
                                        }
                                    }, {
                                        "index": 7,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "569606f4fc32b8afd0194daf",
                                        "costType": {
                                            "code": "CTOTHERS",
                                            "name": "Others",
                                            "_id": "56651b9c5b4f53742b804e73"
                                        }
                                    }]
                                }
                            }
                        ]
                    },
                    selected: true,
                },
                {
                    product: {
                        code: 'PTAGMINPECN',
                        name: 'AGM Inspection',
                    },
                    costItemsEstimated: [],
                    costItems: [],
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
                                    nextPort: '11111',
                                    remark: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                                },
                                product: {
                                    "code": "PTOLFVSL",
                                    "name": "Off Land",
                                    "_id": "5678aaca6c2fbe251343fc65",
                                    "costTypes": [{
                                        "index": 1,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTCRCG",
                                            "name": "Courier charge",
                                            "_id": "56651b9c5b4f53742b804e80"
                                        }
                                    }, {
                                        "index": 2,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5696fc57bc8002f657868961",
                                        "costType": {
                                            "code": "CTHGCGNO",
                                            "name": "Handling charge",
                                            "_id": "56947246d4c6b100045f73a0"
                                        }
                                    }, {
                                        "index": 3,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTTNCG",
                                            "name": "Transportation charge",
                                            "_id": "56651b9c5b4f53742b804e79"
                                        }
                                    }, {
                                        "index": 4,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc68",
                                        "costType": {
                                            "code": "CTCMCECG",
                                            "name": "Custom clearance charge",
                                            "_id": "56651b9c5b4f53742b804e82"
                                        }
                                    }, {
                                        "index": 5,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc67",
                                        "costType": {
                                            "code": "CTAFHTCG",
                                            "name": "Airfreight charge",
                                            "_id": "56651b9d5b4f53742b804e8c"
                                        }
                                    }, {
                                        "index": 6,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc66",
                                        "costType": {
                                            "code": "CTSFHTCG",
                                            "name": "Seafreight charge",
                                            "_id": "56651b9d5b4f53742b804e8d"
                                        }
                                    }, {
                                        "index": 7,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "569606f4fc32b8afd0194daf",
                                        "costType": {
                                            "code": "CTOTHERS",
                                            "name": "Others",
                                            "_id": "56651b9c5b4f53742b804e73"
                                        }
                                    }]
                                }
                            }
                        ]
                    },
                    selected: true
                },
                {
                    product: {
                        code: 'PTPSCIA',
                        name: 'PSC Inspection',
                    },
                    costItemsEstimated: [],
                    costItems: [],
                    productConfig: {
                        products: [
                            {
                                config: {
                                    remark: `I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content I am content `
                                },
                                product: {
                                    "code": "PTOLFVSL",
                                    "name": "Off Land",
                                    "_id": "5678aaca6c2fbe251343fc65",
                                    "costTypes": [{
                                        "index": 1,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTCRCG",
                                            "name": "Courier charge",
                                            "_id": "56651b9c5b4f53742b804e80"
                                        }
                                    }, {
                                        "index": 2,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5696fc57bc8002f657868961",
                                        "costType": {
                                            "code": "CTHGCGNO",
                                            "name": "Handling charge",
                                            "_id": "56947246d4c6b100045f73a0"
                                        }
                                    }, {
                                        "index": 3,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTTNCG",
                                            "name": "Transportation charge",
                                            "_id": "56651b9c5b4f53742b804e79"
                                        }
                                    }, {
                                        "index": 4,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc68",
                                        "costType": {
                                            "code": "CTCMCECG",
                                            "name": "Custom clearance charge",
                                            "_id": "56651b9c5b4f53742b804e82"
                                        }
                                    }, {
                                        "index": 5,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc67",
                                        "costType": {
                                            "code": "CTAFHTCG",
                                            "name": "Airfreight charge",
                                            "_id": "56651b9d5b4f53742b804e8c"
                                        }
                                    }, {
                                        "index": 6,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc66",
                                        "costType": {
                                            "code": "CTSFHTCG",
                                            "name": "Seafreight charge",
                                            "_id": "56651b9d5b4f53742b804e8d"
                                        }
                                    }, {
                                        "index": 7,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "569606f4fc32b8afd0194daf",
                                        "costType": {
                                            "code": "CTOTHERS",
                                            "name": "Others",
                                            "_id": "56651b9c5b4f53742b804e73"
                                        }
                                    }]
                                }
                            }
                        ]
                    },
                    selected: false
                },
                {
                    product: {
                        code: 'PTCVD',
                        name: 'Medical Service',
                    },
                    costItemsEstimated: [],
                    costItems: [],
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
                                },
                                product: {
                                    "code": "PTOLFVSL",
                                    "name": "Off Land",
                                    "_id": "5678aaca6c2fbe251343fc65",
                                    "costTypes": [{
                                        "index": 1,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTCRCG",
                                            "name": "Courier charge",
                                            "_id": "56651b9c5b4f53742b804e80"
                                        }
                                    }, {
                                        "index": 2,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5696fc57bc8002f657868961",
                                        "costType": {
                                            "code": "CTHGCGNO",
                                            "name": "Handling charge",
                                            "_id": "56947246d4c6b100045f73a0"
                                        }
                                    }, {
                                        "index": 3,
                                        "defaultVisiable": true,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc6b",
                                        "costType": {
                                            "code": "CTTNCG",
                                            "name": "Transportation charge",
                                            "_id": "56651b9c5b4f53742b804e79"
                                        }
                                    }, {
                                        "index": 4,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc68",
                                        "costType": {
                                            "code": "CTCMCECG",
                                            "name": "Custom clearance charge",
                                            "_id": "56651b9c5b4f53742b804e82"
                                        }
                                    }, {
                                        "index": 5,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc67",
                                        "costType": {
                                            "code": "CTAFHTCG",
                                            "name": "Airfreight charge",
                                            "_id": "56651b9d5b4f53742b804e8c"
                                        }
                                    }, {
                                        "index": 6,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "5678aaca6c2fbe251343fc66",
                                        "costType": {
                                            "code": "CTSFHTCG",
                                            "name": "Seafreight charge",
                                            "_id": "56651b9d5b4f53742b804e8d"
                                        }
                                    }, {
                                        "index": 7,
                                        "defaultVisiable": false,
                                        "isEditable": true,
                                        "_id": "569606f4fc32b8afd0194daf",
                                        "costType": {
                                            "code": "CTOTHERS",
                                            "name": "Others",
                                            "_id": "56651b9c5b4f53742b804e73"
                                        }
                                    }]
                                }
                            }
                        ]
                    },
                    selected: false
                }
            ],
        }
    }

    renderCardElem(styles) {
        return (
            <div style={styles.cardContent}>
                <div style={styles.cardItem}>
                    <div style={styles.cardLeftContent}>
                        <Icon type="android" style={{marginLeft: 5}}/>
                        <div style={{marginLeft: 15}}>
                            <div style={styles.cardShipName}>ANGELO DELLA GATTA UNO</div>
                            <div style={styles.cardIMO}>IMO: 9310630</div>
                        </div>
                    </div>
                </div>
                <div style={styles.cardItem}>middle</div>
                <div style={styles.cardItem}>right</div>
                <div style={styles.new}>New</div>
            </div>
        )
    }

    renderServiceItems(styles) {
        const {orderEntries} = this.state;

        const orderEntry = this.getOrderEntry();

        const selectedServices = [];
        const canceledServices = [];

        _.forEach(orderEntries, (item, i) => {
            const isSelected = orderEntry.product.code == item.product.code;
            if (item.selected) {
                const serviceItem = (
                    <div key={`product${i + 1}`}
                         style={_.merge({}, styles.serviceName, isSelected ? {color: '#4990e2'} : {})}
                         onClick={this.handlerServerItem.bind(this, item.product.code)}>
                        {item.product.name}
                        {
                            isSelected ?
                                <Popconfirm placement="topLeft" title={'Are you sure cancel this item?'}
                                            onConfirm={() => this.handlerCancelServiceItem(i)} okText="Yes"
                                            cancelText="No">
                                    <Icon type="minus-circle-o"
                                          style={{color: '#4990e2', marginLeft: 10}}/>
                                </Popconfirm> : ''
                        }
                    </div>
                );
                selectedServices.push(serviceItem);
            } else {
                const serviceItem = (
                    <div key={`product${i + 1}`}
                         style={_.merge({}, styles.serviceName, isSelected ? {color: '#4990e2'} : {})}
                         onClick={this.handlerServerItem.bind(this, item.product.code)}>
                        {item.product.name}
                        {
                            isSelected ?
                                <Popconfirm placement="topLeft" title={'Are you sure restore this item?'}
                                            onConfirm={() => this.handlerRestoreServiceItem(i)} okText="Yes"
                                            cancelText="No">
                                    <Icon type="rollback"
                                          style={{color: '#4990e2', marginLeft: 10}}/>
                                </Popconfirm> : ''
                        }
                    </div>
                );
                canceledServices.push(serviceItem);
            }
        });

        return (
            <div style={styles.serviceLeft}>
                <div style={styles.addServiceContent}>
                    <Icon type="plus" style={{color: '#4990E2'}}/>
                    <span style={styles.addService}>Add Service</span>
                </div>
                <div style={{marginTop: 16}}>
                    <div style={styles.selectService}>
                        {`Selected Service (${selectedServices.length})`}
                    </div>
                    {selectedServices}
                    <div style={styles.selectService}>
                        {`Cancelled Service (${canceledServices.length})`}
                    </div>
                    {canceledServices}
                </div>
            </div>
        )
    }

    renderSettingElem(styles) {
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
            <div style={styles.contentBorder}>
                {ProductForm ? <ProductForm {...props} /> :
                    <h1 style={{padding: 10}}>There is no matching form!</h1>}
            </div>
        )
    }

    renderActualCostElem(styles) {
        const props = {
            title: 'Actual Cost',
            isPadding: false,
        };

        let orderEntry = this.getOrderEntry();
        const props2 = {
            isInquiryOrder: false,
            isMarginTop: false,
            isBorder: false,
            isBorderTop: true,
            isBorderBottom: true,
            hasUpload: true,
            titleBgColor: '#fff',
            quotationType: 'actual',
            params: this.props.params,
            // currentExchange: orderDetail.currentExchange ? orderDetail.currentExchange : 0,
            updateCostItems: this.handlerUpdateActualCost.bind(this),
            // isCanEdit: orderDetail.status !== ORDER_STATUS.CLOSED,
            orderEntry
        };

        return (
            <div style={styles.contentBorder}>
                <SettingForm {...props}>
                    <EditTable {...props2}/>
                </SettingForm>
            </div>
        )
    }

    renderServiceSettingElem(styles) {
        return (
            <div style={styles.service}>
                {this.renderServiceItems(styles)}
                <div id="order_detail_tab" style={styles.serviceRight}>
                    <div style={styles.progressContent}>progress</div>
                    <Tabs type="card" style={{marginBottom: 0, marginTop: 10}}>
                        <TabPane tab={`Setting`} key="tab1">{this.renderSettingElem(styles)}</TabPane>
                        <TabPane tab={`Actual Cost`} key="tab2">{this.renderActualCostElem(styles)}</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }

    getOrderEntry() {
        let orderEntry = this.state.orderEntry;
        if (!orderEntry) {
            const {orderEntries} = this.state;
            orderEntry = _.cloneDeep(orderEntries[0]);
        }
        return orderEntry;
    }

    render() {
        let styles = this.getStyles();

        return (
            <div style={styles.quotationContent}>
                {this.renderCardElem(styles)}
                {this.renderServiceSettingElem(styles)}
            </div>
        )
    }

    /**
     * 选择服务项
     * @param code
     */
    handlerServerItem(code) {
        const {orderEntries} = this.state;
        const orderEntry = _.find(orderEntries, item => item.product.code == code);
        this.setState({orderEntry: _.cloneDeep(orderEntry), edit: false})
    }

    /**
     * 取消服务项
     * @param index
     */
    handlerCancelServiceItem(index) {
        const {orderEntries} = this.state;
        orderEntries[index].selected = false;
        this.setState({orderEntries})
    }

    /**
     * 恢复服务项
     * @param index
     */
    handlerRestoreServiceItem(index) {
        const {orderEntries} = this.state;
        orderEntries[index].selected = true;
        this.setState({orderEntries})
    }

    /**
     * 点击编辑和取消
     * @param edit
     */
    handlerEditCancel(edit) {
        this.setState({edit})
    }

    /**
     * 保存设置
     * @param values
     */
    handleSubmit(values) {
        let orderEntry = this.getOrderEntry();
        orderEntry.productConfig = values;
        this.updateOrderEntries(orderEntry);
    }

    /**
     * 更新实际报价
     * @param params
     */
    handlerUpdateActualCost(params) {
        let orderEntry = this.getOrderEntry();
        orderEntry.costItems = params.costItems;
        this.updateOrderEntries(orderEntry);
    }

    /**
     * 更新orderEntries
     * @param orderEntry
     */
    updateOrderEntries(orderEntry) {
        const {orderEntries} = this.state;
        const index = _.findIndex(orderEntries, item => item.product.code == orderEntry.product.code);
        orderEntries[index] = orderEntry;
        this.setState({edit: false, orderEntry, orderEntries});
    }

}

export default Detail;