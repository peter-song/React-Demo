/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {Tabs, Button, Input, Form, Icon} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

import Logo from '../../../static/img/logo_pdf.png';
import DetailTable from '../../component/Offer/DetailTable';

import '../common.scss';

class Bill extends React.Component {

    getStyles() {
        const styles = {

            common: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                lineHeight: '14px',
            },

            totalPrice: {
                fontWeight: 500,
                fontSize: 20,
                color: '#F5A623',
            },

            defaultPrompt: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.43)',
            },

            rejectedPrompt: {
                fontWeight: 400,
                fontSize: 12,
                color: '#f04134',
            },

            accountContent: {
                display: 'flex',
                padding: '0 16px',
                marginTop: 24,
            },

            accountItem: {
                flex: '1',
                padding: '0 15px',
            },

            accountKey: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                lineHeight: '14px',
            },

            accountValue: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                marginTop: 5,
                lineHeight: '17px',
            },

            orderNOKey: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                width: 90,
                padding: 10,
                background: '#E9E9E9',
            },

            orderNoValue: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                padding: 10,
            },

            box: {
                border: '1px solid #D9D9D9'
            },

            verticalCenter: {
                display: 'flex',
                alignItems: 'center',
            },

            icon: {
                cursor: 'pointer',
                height: 18,
                width: 18,
            },

            icon2: {
                cursor: 'pointer',
                // height: 20,
                // width: 20,
            },
        };

        return styles;
    }


    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            orderDetail: {
                "orderNumber": "EP9920170707125542402",
                "billingInstruction": "billingInstruction",
                "status": 0,
                "statusBeforeCancel": 0,
                "totalAmountEstimated": 24,
                "totalAmountConfirmed": 24,
                "totalAmountFinal": 0,
                "__v": 22,
                "dateCreate": "2017-07-07T04:55:42.474Z",
                "dateUpdate": "2017-07-07T04:55:42.474Z",
                "currentExchange": 6.67,
                "watched": false,
                "arrivalTime": "2017-07-09T04:47:40.000Z",
                "isInquiry": false,
                "_id": "595f144e341aa908b02c45c9",
                "type": {"flag": "01", "name": "Newbuilding", "code": "OTNB", "_id": "56652246d4c6815fc8ef7e95"},
                "consigner": {"name": "TestOwner Company", "_id": "5680a74377c818aa454e54f5"},
                "consignee": {"name": "TestAgent Company", "_id": "5680a70877c818aa454e54f3"},
                "ship": {
                    "imo": "1601127",
                    "name": "jinyonghao",
                    "verifyStatus": 1,
                    "_id": "58fef1c967a2297e2fb54b8c",
                    "__v": 0
                },
                "segment": {
                    "schedule": {
                        "user": "5680a92377c818aa454e5509",
                        "date": "2017-07-07T10:50:12.455Z",
                        "timePoints": {"arrival": {"time": "2017-07-13T10:40:31.000Z"}}
                    },
                    "status": 300,
                    "_id": "595f144ec32f68cdbb088111",
                    "__v": 10,
                    "arrivalPort": {"name": "BEIHAI", "code": "CNBHY", "_id": "57ba955718c0b10af89884e8"}
                },
                "arrivalPort": {"_id": "57ba955718c0b10af89884e8", "name": "BEIHAI", "__v": 26},
                "orderEntries": [{
                    "status": 700,
                    "costItems": [{
                        "description": "first",
                        "costType": "56651b9c5b4f53742b804e75",
                        "_id": "595f12c1341aa908b02c45bb",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "second",
                        "costType": "56651b9c5b4f53742b804e74",
                        "_id": "595f12c1341aa908b02c45ba",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "third",
                        "costType": "56651b9c5b4f53742b804e83",
                        "_id": "595f12c1341aa908b02c45b9",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "costItemsEstimated": [{
                        "description": "first",
                        "costType": "56651b9c5b4f53742b804e75",
                        "_id": "595f12c1341aa908b02c45bb",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "second",
                        "costType": "56651b9c5b4f53742b804e74",
                        "_id": "595f12c1341aa908b02c45ba",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "third",
                        "costType": "56651b9c5b4f53742b804e83",
                        "_id": "595f12c1341aa908b02c45b9",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "fixed": false,
                    "visible": true,
                    "amountInitial": 0,
                    "amountEstimated": 6,
                    "amountConfirmed": 6,
                    "amountFinal": 0,
                    "__v": 10,
                    "_id": "595f144e341aa908b02c45c5",
                    "product": {"name": "Cash To Master", "code": "PTCTM", "_id": "567a5f60c8d751d30fa5993d"},
                    "productConfig": {
                        "__v": 0,
                        "orderEntry": "595f1280341aa908b02c45a2",
                        "_id": "595f1280341aa908b02c45a3",
                        "order": {
                            "_id": "595f1280341aa908b02c45a1",
                            "dateUpdate": "2017-07-07T04:48:00.614Z",
                            "dateCreate": "2017-07-07T04:48:00.113Z",
                            "type": "56652246d4c6815fc8ef7e95",
                            "arrivalPort": "57ba955718c0b10af89884e8",
                            "arrivalTime": "2017-07-09T04:47:40.000Z",
                            "ship": "58fef1c967a2297e2fb54b8c",
                            "consigner": "5680a74377c818aa454e54f5",
                            "orderNumber": "EP0120170707124800097",
                            "__v": 12,
                            "inquiryOrder": ["595f1290341aa908b02c45af", "595f1290341aa908b02c45b4"],
                            "isInquiry": true,
                            "statusBeforeCancel": 0,
                            "currentExchange": 6.67,
                            "watched": true,
                            "totalAmountFinal": 0,
                            "totalAmountConfirmed": 0,
                            "totalAmountEstimated": 0,
                            "orderEntries": ["595f1280341aa908b02c45a2", "595f1280341aa908b02c45a5", "595f1280341aa908b02c45a9", "595f1280341aa908b02c45ac"],
                            "status": 1000
                        },
                        "products": [{
                            "select": true,
                            "_id": "595f1280341aa908b02c45a4",
                            "config": {
                                "remark": "",
                                "feedbackFiles": [],
                                "note": "",
                                "currency": "",
                                "noteOne": "",
                                "noteTwo": "",
                                "noteFive": "",
                                "noteTen": "",
                                "noteTwenty": "",
                                "noteFifty": "",
                                "noteOneHundred": "",
                                "amount": "",
                                "transferTime": "",
                                "signingFiles": [],
                                "certifications": []
                            },
                            "priceConfig": {
                                "CTDYCG|COUNT|value": 1,
                                "CTBCABL|NET_CTM|ref": "amount",
                                "CTCTMAMT|NET_CTM|ref": "amount"
                            },
                            "product": {
                                "code": "PTCTM",
                                "name": "Cash To Master",
                                "_id": "567a5f60c8d751d30fa5993d",
                                "costTypes": [{
                                    "index": 1,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "568b845efbfb6cfd867ac640",
                                    "costType": {
                                        "code": "CTCTMAMT",
                                        "name": "CTM Amount",
                                        "_id": "56651b9c5b4f53742b804e75"
                                    }
                                }, {
                                    "index": 2,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "567a5f60c8d751d30fa59940",
                                    "costType": {
                                        "code": "CTBCABL",
                                        "name": "Bank charge and bank lost",
                                        "_id": "56651b9c5b4f53742b804e74"
                                    }
                                }, {
                                    "index": 3,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "567a5f60c8d751d30fa5993f",
                                    "costType": {
                                        "code": "CTDYCG",
                                        "name": "Delivery charge",
                                        "_id": "56651b9c5b4f53742b804e83"
                                    }
                                }, {
                                    "index": 4,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "567a5f60c8d751d30fa5993e",
                                    "costType": {
                                        "code": "CTTNCG",
                                        "name": "Transportation charge",
                                        "_id": "56651b9c5b4f53742b804e79"
                                    }
                                }, {
                                    "index": 5,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568b252bfbfb6cfd867ac63f",
                                    "costType": {
                                        "code": "CTOTHERS",
                                        "name": "Others",
                                        "_id": "56651b9c5b4f53742b804e73"
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    "status": 700,
                    "costItems": [{
                        "description": "one",
                        "costType": "56651b9c5b4f53742b804e7a",
                        "_id": "595f12e7341aa908b02c45be",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "two",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f12e7341aa908b02c45bd",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "three",
                        "costType": "56651b9c5b4f53742b804e7b",
                        "_id": "595f12e7341aa908b02c45bc",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "costItemsEstimated": [{
                        "description": "one",
                        "costType": "56651b9c5b4f53742b804e7a",
                        "_id": "595f12e7341aa908b02c45be",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "two",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f12e7341aa908b02c45bd",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "three",
                        "costType": "56651b9c5b4f53742b804e7b",
                        "_id": "595f12e7341aa908b02c45bc",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "fixed": false,
                    "visible": true,
                    "amountInitial": 0,
                    "amountEstimated": 6,
                    "amountConfirmed": 6,
                    "amountFinal": 0,
                    "__v": 8,
                    "_id": "595f144e341aa908b02c45c6",
                    "product": {"name": "Crew Change", "code": "PTCC", "_id": "56848a75d4c6577042570ac9"},
                    "productConfig": {
                        "__v": 0,
                        "orderEntry": "595f1280341aa908b02c45a5",
                        "_id": "595f1280341aa908b02c45a6",
                        "order": {
                            "_id": "595f1280341aa908b02c45a1",
                            "dateUpdate": "2017-07-07T04:48:00.614Z",
                            "dateCreate": "2017-07-07T04:48:00.113Z",
                            "type": "56652246d4c6815fc8ef7e95",
                            "arrivalPort": "57ba955718c0b10af89884e8",
                            "arrivalTime": "2017-07-09T04:47:40.000Z",
                            "ship": "58fef1c967a2297e2fb54b8c",
                            "consigner": "5680a74377c818aa454e54f5",
                            "orderNumber": "EP0120170707124800097",
                            "__v": 12,
                            "inquiryOrder": ["595f1290341aa908b02c45af", "595f1290341aa908b02c45b4"],
                            "isInquiry": true,
                            "statusBeforeCancel": 0,
                            "currentExchange": 6.67,
                            "watched": true,
                            "totalAmountFinal": 0,
                            "totalAmountConfirmed": 0,
                            "totalAmountEstimated": 0,
                            "orderEntries": ["595f1280341aa908b02c45a2", "595f1280341aa908b02c45a5", "595f1280341aa908b02c45a9", "595f1280341aa908b02c45ac"],
                            "status": 1000
                        },
                        "products": [{
                            "select": false,
                            "_id": "595f1280341aa908b02c45a8",
                            "config": {
                                "remark": "",
                                "feedbackFiles": [],
                                "note": "",
                                "flightsInfos": [],
                                "invitationLettersFiles": [],
                                "seaManPaperFiles": [],
                                "visaFiles": [],
                                "passportsFiles": [],
                                "inviLetterDesc": {
                                    "entryDate": "",
                                    "visaApplyPlace": "",
                                    "longestStay": "",
                                    "entriesNumber": "",
                                    "visaExpiry": "",
                                    "oragnization": "",
                                    "type": "",
                                    "descriptoin": "",
                                    "persons": []
                                },
                                "isNeedInvitationLetter": false,
                                "issueTicket": {"destiation": "", "orginal": "", "sechdule": "", "persons": []},
                                "eTicketsFiles": [],
                                "isNeedIssueTicket": false,
                                "persons": []
                            },
                            "priceConfig": {"CTINLRCG|COUNT|value": 0, "CTHGCG|COUNT|ref": "persons"},
                            "product": {
                                "code": "PTCCONS",
                                "name": "On Signer",
                                "_id": "56849319d4c6577042570acb",
                                "costTypes": [{
                                    "index": 1,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "568493f096879046c7cf12de",
                                    "costType": {
                                        "code": "CTHGCG",
                                        "name": "Handling charge",
                                        "_id": "56651b9c5b4f53742b804e7a"
                                    }
                                }, {
                                    "index": 2,
                                    "defaultVisiable": true,
                                    "isEditable": true,
                                    "_id": "5684941c96879046c7cf12df",
                                    "costType": {
                                        "code": "CTTNCG",
                                        "name": "Transportation charge",
                                        "_id": "56651b9c5b4f53742b804e79"
                                    }
                                }, {
                                    "index": 3,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684943796879046c7cf12e0",
                                    "costType": {
                                        "code": "CTHLCG",
                                        "name": "Hotel charge",
                                        "_id": "56651b9c5b4f53742b804e7b"
                                    }
                                }, {
                                    "index": 4,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "5684943d96879046c7cf12e1",
                                    "costType": {
                                        "code": "CTINLRCG",
                                        "name": "Invitation letter charge",
                                        "_id": "56651b9c5b4f53742b804e81"
                                    }
                                }, {
                                    "index": 5,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684944796879046c7cf12e2",
                                    "costType": {
                                        "code": "CTMEALCG",
                                        "name": "Meal charge",
                                        "_id": "56651b9c5b4f53742b804e7e"
                                    }
                                }, {
                                    "index": 6,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684944d96879046c7cf12e3",
                                    "costType": {
                                        "code": "CTTTCG",
                                        "name": "Ticket charge",
                                        "_id": "56651b9c5b4f53742b804e7f"
                                    }
                                }, {
                                    "index": 7,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684945296879046c7cf12e4",
                                    "costType": {"code": "CTBS", "name": "Bonus", "_id": "56651b9c5b4f53742b804e7d"}
                                }, {
                                    "index": 8,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684945996879046c7cf12e5",
                                    "costType": {
                                        "code": "CTVAEXDCG",
                                        "name": "Visa extend charge",
                                        "_id": "567cee40cca11fb848c14b2c"
                                    }
                                }, {
                                    "index": 9,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684946c96879046c7cf12e6",
                                    "costType": {
                                        "code": "CTCRCG",
                                        "name": "Courier charge",
                                        "_id": "56651b9c5b4f53742b804e80"
                                    }
                                }, {
                                    "index": 10,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684947396879046c7cf12e7",
                                    "costType": {
                                        "code": "CTOTHERS",
                                        "name": "Others",
                                        "_id": "56651b9c5b4f53742b804e73"
                                    }
                                }]
                            }
                        }, {
                            "select": false,
                            "_id": "595f1280341aa908b02c45a7",
                            "config": {
                                "remark": "",
                                "feedbackFiles": [],
                                "note": "",
                                "idPhotos": [],
                                "seaManPaperFiles": [],
                                "visaFiles": [],
                                "passportsFiles": [],
                                "eTicketsFiles": [],
                                "persons": []
                            },
                            "priceConfig": {"CTHGCG|COUNT|ref": "persons"},
                            "product": {
                                "code": "PTCCOFFS",
                                "name": "Off Signer",
                                "_id": "56849624d4c6577042570acf",
                                "costTypes": [{
                                    "index": 1,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "5684956a96879046c7cf12e8",
                                    "costType": {
                                        "code": "CTHGCG",
                                        "name": "Handling charge",
                                        "_id": "56651b9c5b4f53742b804e7a"
                                    }
                                }, {
                                    "index": 2,
                                    "defaultVisiable": true,
                                    "isEditable": true,
                                    "_id": "5684959296879046c7cf12e9",
                                    "costType": {
                                        "code": "CTTNCG",
                                        "name": "Transportation charge",
                                        "_id": "56651b9c5b4f53742b804e79"
                                    }
                                }, {
                                    "index": 3,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5684959a96879046c7cf12ea",
                                    "costType": {
                                        "code": "CTUGVACG",
                                        "name": "Urgent visa charge",
                                        "_id": "567cee40cca11fb848c14b2d"
                                    }
                                }, {
                                    "index": 4,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568495a296879046c7cf12eb",
                                    "costType": {
                                        "code": "CTHLCG",
                                        "name": "Hotel charge",
                                        "_id": "56651b9c5b4f53742b804e7b"
                                    }
                                }, {
                                    "index": 5,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568495a996879046c7cf12ec",
                                    "costType": {
                                        "code": "CTMEALCG",
                                        "name": "Meal charge",
                                        "_id": "56651b9c5b4f53742b804e7e"
                                    }
                                }, {
                                    "index": 6,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568495b096879046c7cf12ed",
                                    "costType": {
                                        "code": "CTTTCG",
                                        "name": "Ticket charge",
                                        "_id": "56651b9c5b4f53742b804e7f"
                                    }
                                }, {
                                    "index": 7,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568495b696879046c7cf12ee",
                                    "costType": {"code": "CTBS", "name": "Bonus", "_id": "56651b9c5b4f53742b804e7d"}
                                }, {
                                    "index": 8,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "568495bc96879046c7cf12ef",
                                    "costType": {
                                        "code": "CTOTHERS",
                                        "name": "Others",
                                        "_id": "56651b9c5b4f53742b804e73"
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    "status": 700,
                    "costItems": [{
                        "description": "1",
                        "costType": "56651b9c5b4f53742b804e80",
                        "_id": "595f12ff341aa908b02c45c1",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "2",
                        "costType": "56947246d4c6b100045f73a0",
                        "_id": "595f12ff341aa908b02c45c0",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "3",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f12ff341aa908b02c45bf",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "costItemsEstimated": [{
                        "description": "1",
                        "costType": "56651b9c5b4f53742b804e80",
                        "_id": "595f12ff341aa908b02c45c1",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "2",
                        "costType": "56947246d4c6b100045f73a0",
                        "_id": "595f12ff341aa908b02c45c0",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "3",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f12ff341aa908b02c45bf",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "fixed": false,
                    "visible": true,
                    "amountInitial": 0,
                    "amountEstimated": 6,
                    "amountConfirmed": 6,
                    "amountFinal": 0,
                    "__v": 6,
                    "_id": "595f144e341aa908b02c45c7",
                    "product": {"name": "Off Land", "code": "PTOLFVSL", "_id": "5678aaca6c2fbe251343fc65"},
                    "productConfig": {
                        "__v": 0,
                        "orderEntry": "595f1280341aa908b02c45a9",
                        "_id": "595f1280341aa908b02c45aa",
                        "order": {
                            "_id": "595f1280341aa908b02c45a1",
                            "dateUpdate": "2017-07-07T04:48:00.614Z",
                            "dateCreate": "2017-07-07T04:48:00.113Z",
                            "type": "56652246d4c6815fc8ef7e95",
                            "arrivalPort": "57ba955718c0b10af89884e8",
                            "arrivalTime": "2017-07-09T04:47:40.000Z",
                            "ship": "58fef1c967a2297e2fb54b8c",
                            "consigner": "5680a74377c818aa454e54f5",
                            "orderNumber": "EP0120170707124800097",
                            "__v": 12,
                            "inquiryOrder": ["595f1290341aa908b02c45af", "595f1290341aa908b02c45b4"],
                            "isInquiry": true,
                            "statusBeforeCancel": 0,
                            "currentExchange": 6.67,
                            "watched": true,
                            "totalAmountFinal": 0,
                            "totalAmountConfirmed": 0,
                            "totalAmountEstimated": 0,
                            "orderEntries": ["595f1280341aa908b02c45a2", "595f1280341aa908b02c45a5", "595f1280341aa908b02c45a9", "595f1280341aa908b02c45ac"],
                            "status": 1000
                        },
                        "products": [{
                            "select": true,
                            "_id": "595f1280341aa908b02c45ab",
                            "config": {
                                "ordersCount": "",
                                "orders": [{
                                    "remark": "",
                                    "feedbackFiles": [],
                                    "note": "",
                                    "shipments": [],
                                    "orderId": ""
                                }]
                            },
                            "product": {
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
                        }]
                    }
                }, {
                    "status": 700,
                    "costItems": [{
                        "description": "一",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f1315341aa908b02c45c4",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "二",
                        "costType": "56651b9c5b4f53742b804e7a",
                        "_id": "595f1315341aa908b02c45c3",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "三",
                        "costType": "5695b4f9d4c61f7c51eaaebf",
                        "_id": "595f1315341aa908b02c45c2",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "costItemsEstimated": [{
                        "description": "一",
                        "costType": "56651b9c5b4f53742b804e79",
                        "_id": "595f1315341aa908b02c45c4",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 6.67,
                        "amount": 1,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "二",
                        "costType": "56651b9c5b4f53742b804e7a",
                        "_id": "595f1315341aa908b02c45c3",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 13.34,
                        "amount": 2,
                        "count": 0,
                        "unitPrice": 0
                    }, {
                        "description": "三",
                        "costType": "5695b4f9d4c61f7c51eaaebf",
                        "_id": "595f1315341aa908b02c45c2",
                        "isAdd": false,
                        "invoices": [],
                        "amountRMB": 20.01,
                        "amount": 3,
                        "count": 0,
                        "unitPrice": 0
                    }],
                    "fixed": false,
                    "visible": true,
                    "amountInitial": 0,
                    "amountEstimated": 6,
                    "amountConfirmed": 6,
                    "amountFinal": 0,
                    "__v": 5,
                    "_id": "595f144e341aa908b02c45c8",
                    "product": {"name": "Medical Service", "code": "PTCVD", "_id": "567a29c4c8d751d30fa59936"},
                    "productConfig": {
                        "__v": 0,
                        "orderEntry": "595f1280341aa908b02c45ac",
                        "_id": "595f1280341aa908b02c45ad",
                        "order": {
                            "_id": "595f1280341aa908b02c45a1",
                            "dateUpdate": "2017-07-07T04:48:00.614Z",
                            "dateCreate": "2017-07-07T04:48:00.113Z",
                            "type": "56652246d4c6815fc8ef7e95",
                            "arrivalPort": "57ba955718c0b10af89884e8",
                            "arrivalTime": "2017-07-09T04:47:40.000Z",
                            "ship": "58fef1c967a2297e2fb54b8c",
                            "consigner": "5680a74377c818aa454e54f5",
                            "orderNumber": "EP0120170707124800097",
                            "__v": 12,
                            "inquiryOrder": ["595f1290341aa908b02c45af", "595f1290341aa908b02c45b4"],
                            "isInquiry": true,
                            "statusBeforeCancel": 0,
                            "currentExchange": 6.67,
                            "watched": true,
                            "totalAmountFinal": 0,
                            "totalAmountConfirmed": 0,
                            "totalAmountEstimated": 0,
                            "orderEntries": ["595f1280341aa908b02c45a2", "595f1280341aa908b02c45a5", "595f1280341aa908b02c45a9", "595f1280341aa908b02c45ac"],
                            "status": 1000
                        },
                        "products": [{
                            "select": true,
                            "_id": "595f1280341aa908b02c45ae",
                            "config": {"feedbackFiles": [], "note": "", "visitFiles": [], "persons": []},
                            "priceConfig": {"CTMDICLCG|COUNT|ref": "persons", "CTHGCG|COUNT|ref": "persons"},
                            "product": {
                                "code": "PTCVD",
                                "name": "Medical Service",
                                "_id": "567a29c4c8d751d30fa59936",
                                "costTypes": [{
                                    "index": 1,
                                    "defaultVisiable": true,
                                    "isEditable": true,
                                    "_id": "567a29c4c8d751d30fa59939",
                                    "costType": {
                                        "code": "CTTNCG",
                                        "name": "Transportation charge",
                                        "_id": "56651b9c5b4f53742b804e79"
                                    }
                                }, {
                                    "index": 2,
                                    "defaultVisiable": true,
                                    "isEditable": false,
                                    "_id": "567a29c4c8d751d30fa59938",
                                    "costType": {
                                        "code": "CTHGCG",
                                        "name": "Handling charge",
                                        "_id": "56651b9c5b4f53742b804e7a"
                                    }
                                }, {
                                    "index": 3,
                                    "defaultVisiable": true,
                                    "isEditable": true,
                                    "_id": "567a29c4c8d751d30fa59937",
                                    "costType": {
                                        "code": "CTMDICLCG",
                                        "name": "Medical charge",
                                        "_id": "5695b4f9d4c61f7c51eaaebf"
                                    }
                                }, {
                                    "index": 4,
                                    "defaultVisiable": false,
                                    "isEditable": true,
                                    "_id": "5695ad09fc32b8afd0194daa",
                                    "costType": {
                                        "code": "CTOTHERS",
                                        "name": "Others",
                                        "_id": "56651b9c5b4f53742b804e73"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }
    }

    isAgent() {
        return true;
    }

    formatPrice(price) {
        let num = Number(price);
        if (_.isNaN(price)) {
            return null;
        }
        return num.toFixed(2);
    }

    getCompanyName(orderDetail) {
        const isAgent = this.isAgent();
        return isAgent ?
            orderDetail.consigner ? orderDetail.consigner.name : 'consigner'
            : orderDetail.consignee ? orderDetail.consignee.name : 'consignee';
    }

    renderActualCostHeadElem(orderDetail) {
        const styles = this.getStyles();
        const isAgent = this.isAgent();
        const status = orderDetail.status;

        const isCanSubmit = orderDetail.orderEntries && _.every(orderDetail.orderEntries, item => item.status == 700);

        let promptElem = [];
        let btnElem = [];
        if (isAgent) {
            if (status == 0) {
                promptElem.push(
                    <div style={styles.defaultPrompt}>{`Unsubmitted`}</div>
                );
                if (isCanSubmit) {
                    btnElem.push(
                        <Button type="primary" style={{marginLeft: 10}}
                                onClick={() => this.handlerOperation('submit')}
                        >
                            {`SubmitBill`}
                        </Button>
                    );
                }
            } else if (status == 710) {
                promptElem.push(
                    <div style={styles.defaultPrompt}>{`Submitted`}</div>
                );
                btnElem.push(
                    <Button style={{marginLeft: 10}} onClick={() => this.handlerOperation('reject')}>
                        {`RejectBill`}
                    </Button>
                );
                btnElem.push(
                    <Button type="primary" style={{marginLeft: 10}}
                            onClick={() => this.handlerOperation('accept')}
                    >
                        {`AcceptBill`}
                    </Button>
                );
            } else if (status == 720) {
                promptElem.push(
                    <div style={styles.rejectedPrompt}>Rejected</div>
                );
                if (isCanSubmit) {
                    btnElem.push(
                        <Button type="primary" style={{marginLeft: 10}}
                                onClick={() => this.handlerOperation('submit')}
                        >
                            {`SubmitBill`}
                        </Button>
                    );
                }
            } else if (status == 799) {
                promptElem.push(
                    <div style={styles.defaultPrompt}>{`Accepted`}</div>
                );
            }
        }
        const operationElem = [promptElem, btnElem];
        const otherParty = isAgent ? `Principal:` : `Agency:`;
        return (
            <div style={_.merge({}, styles.verticalCenter, {
                padding: '24px 31px 0 31px',
                justifyContent: 'space-between'
            })}>
                <div style={styles.verticalCenter}>
                    <img src={Logo}/>
                    <div style={_.merge({}, styles.common, {marginLeft: 32})}>{otherParty}</div>
                    <div style={_.merge({}, styles.common, {marginLeft: 10})}>{this.getCompanyName(orderDetail)}</div>
                </div>
                <div style={styles.verticalCenter}>
                    {operationElem}
                    <Icon type="export" style={_.merge({}, styles.icon2, {marginLeft: 26})}/>
                </div>
            </div>
        )
    }

    renderAccountInfoElem(orderDetail) {
        const styles = this.getStyles();
        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <div style={styles.accountContent}>
                    <div style={styles.accountItem}>
                        <div style={_.merge({}, styles.verticalCenter, {justifyContent: 'space-between'})}>
                            <div style={styles.accountKey}>Account For:</div>
                            {
                                this.isAgent() && !this.state.edit ?
                                    <Icon type="edit" style={_.merge({}, styles.icon, {marginLeft: 5})}
                                          onClick={() => this.handlerEditAccountFor(true)}
                                    /> : ''
                            }
                        </div>
                        <div style={styles.accountValue}>
                            {
                                this.state.edit ?
                                    <FormItem style={{marginBottom: 0}}
                                              hasFeedback
                                    >
                                        {getFieldDecorator('billingInstruction', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input your account',
                                            }],
                                            initialValue: orderDetail.billingInstruction
                                        })(
                                            <Input type="textarea" autosize={{minRows: 4, maxRows: 6}}
                                                   placeholder="input your account"/>
                                        )}
                                    </FormItem>
                                    : orderDetail.billingInstruction
                            }
                        </div>
                        {
                            this.state.edit ?
                                <FormItem style={{marginBottom: 0}}>
                                    <div style={{marginTop: 8, textAlign: 'right'}}>
                                        <Button type="primary" htmlType="submit">{`Save`}</Button>
                                        <Button onClick={() => this.handlerEditAccountFor(false)}
                                                style={{marginLeft: 16}}>{`Cancel`}
                                        </Button>
                                    </div>
                                </FormItem> : ''
                        }

                    </div>
                    <div style={styles.accountItem}>
                        <div style={styles.accountKey}>Account From：</div>
                        <div style={styles.accountValue}>
                            {`SBI MAZURKA SHIPPING COMPANY LTD C/O Scorpio Ship Management Sam 9 rue du Gabian MC98000 Monaco Monaco,MC MONACO`}
                        </div>
                    </div>
                    <div style={styles.accountItem}>
                        <div style={_.merge({}, styles.box)}>
                            <div style={_.merge({}, styles.verticalCenter)}>
                                <div style={_.merge({}, styles.orderNOKey)}>Order No.</div>
                                <div style={_.merge({}, styles.orderNoValue)}>{orderDetail.orderNumber}</div>
                            </div>
                            <div style={_.merge({}, styles.verticalCenter, {borderTop: '1px solid #D9D9D9'})}>
                                <div style={_.merge({}, styles.orderNOKey)}>Date</div>
                                <div
                                    style={_.merge({}, styles.orderNoValue)}>{orderDetail.status == 0 ? '' : moment(orderDetail.dateUpdate).format('DD/MMM/YYYY')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }

    renderActualCostElem(orderDetail) {
        return (
            <div>
                {this.renderActualCostHeadElem(orderDetail)}
                {this.renderAccountInfoElem(orderDetail)}
                {this.renderDetailTableElem(orderDetail, 'actual')}
            </div>
        )
    }

    renderQuotationHeadElem(orderDetail) {
        const styles = this.getStyles();
        const otherParty = this.isAgent() ? `Principal:` : `Agency:`;

        return (
            <div style={_.merge({}, styles.verticalCenter, {
                padding: '24px 31px 0 31px',
                justifyContent: 'space-between'
            })}>
                <div style={_.merge({}, styles.verticalCenter)}>
                    <div style={_.merge({}, styles.common)}>Quotation：</div>
                    <div
                        style={_.merge({}, styles.totalPrice)}>{`USD ${this.formatPrice(orderDetail.totalAmountEstimated)}`}</div>
                    <Icon type="export" style={_.merge({}, styles.icon2, {marginLeft: 26})}/>
                </div>
                <div style={_.merge({}, styles.verticalCenter)}>
                    <div style={_.merge({}, styles.common)}>{otherParty}</div>
                    <div style={_.merge({}, styles.common, {marginLeft: 5})}>{this.getCompanyName(orderDetail)}</div>
                </div>
            </div>
        )
    }

    renderQuotationElem(orderDetail) {
        return (
            <div>
                {this.renderQuotationHeadElem(orderDetail)}
                {this.renderDetailTableElem(orderDetail, 'estimate')}
            </div>
        )
    }

    getCostType(orderEntry, _id) {
        const costTypes = orderEntry.productConfig ? orderEntry.productConfig.products[0].product.costTypes : [];
        const costType = _.find(costTypes, item => item.costType._id == _id);
        return costType ? costType : {};
    }

    getDetail(orderDetail, type) {
        const orderEntries = orderDetail.orderEntries;
        const detail = {};
        if (orderEntries) {
            const items = [];
            orderEntries.map(orderEntry => {
                const subDetail = [];
                const costItems = type == 'estimate' ? orderEntry.costItemsEstimated : orderEntry.costItems;
                costItems.map(costItem => {
                    const costTypeItem = this.getCostType(orderEntry, costItem.costType);
                    subDetail.push({
                        title: costTypeItem.costType ? costTypeItem.costType.name : '',
                        remakes: costItem.description,
                        RMB: this.formatPrice(costItem.amountRMB),
                        USD: this.formatPrice(costItem.amount),
                        invoices: costItem.invoices ? costItem.invoices : []
                    });
                });
                const amount = type == 'estimate' ? orderEntry.amountEstimated : orderEntry.amountConfirmed;
                const item = {
                    title: orderEntry.product ? orderEntry.product.name : '',
                    RMB: this.formatPrice(amount * orderDetail.currentExchange),
                    USD: this.formatPrice(amount),
                    subDetail
                };
                items.push(item);
            });

            detail.items = items;
            const totalAmount = type == 'estimate' ? orderDetail.totalAmountEstimated : orderDetail.totalAmountConfirmed;
            detail.total = {
                RMB: this.formatPrice(totalAmount * orderDetail.currentExchange),
                USD: this.formatPrice(totalAmount)
            }
        }
        return detail;
    }

    renderDetailTableElem(orderDetail, type) {

        const props = {
            hasDownload: type == 'actual',
            common: {
                vessel: orderDetail.ship ? orderDetail.ship.name : '',
                date: orderDetail.arrivalTime ? moment(orderDetail.arrivalTime).format('DD/MMM/YYYY') : '',
                port: orderDetail.arrivalPort ? orderDetail.arrivalPort.name : '',
                serviceType: orderDetail.type ? orderDetail.type.name : 'Protecting Agency (Discharging)',
                rate: `USD 1/${orderDetail.currentExchange}`
            },
            detail: this.getDetail(orderDetail, type)
        };

        if (type == 'actual') {
            props.columns = [
                {
                    name: 'Vessel',
                    width: '20%'
                },
                {
                    name: 'ATA/Sea Trail Date',
                    width: '20%'
                },
                {
                    name: 'Sailed Date',
                    fill: true
                },
                {
                    name: 'Port',
                    width: '20%'
                },
                {
                    name: 'Rate',
                    width: '20%'
                }
            ];
            props.common = {
                vessel: orderDetail.ship ? orderDetail.ship.name : '',
                date: orderDetail.arrivalTime ? moment(orderDetail.arrivalTime).format('DD/MMM/YYYY') : '',
                date2: orderDetail.arrivalTime ? moment(orderDetail.arrivalTime).format('DD/MMM/YYYY') : '', //TODO 日期不对
                port: orderDetail.arrivalPort ? orderDetail.arrivalPort.name : '',
                rate: `USD 1/${orderDetail.currentExchange}`
            };
        }

        return (
            <div style={{padding: '0 16px 16px 16px'}}>
                <DetailTable {...props} />
            </div>
        )
    }

    /**
     * 获取orderDetail
     */
    getOrderDetail() {
        return this.state.orderDetail;
    }

    render() {
        const orderDetail = this.getOrderDetail();
        const totalAmountConfirmed = orderDetail.totalAmountConfirmed ? this.formatPrice(orderDetail.totalAmountConfirmed) : 0;
        const totalAmountEstimated = orderDetail.totalAmountEstimated ? this.formatPrice(orderDetail.totalAmountEstimated) : 0;

        const tabs = [];
        if (this.isAgent() || (orderDetail.status && orderDetail.status != 300)) {
            tabs.push(
                <TabPane tab={`CostAct：USD ${totalAmountConfirmed}`} key="tab1">
                    {this.renderActualCostElem(orderDetail)}
                </TabPane>
            )
        }
        tabs.push(
            <TabPane tab={`CostEst：USD ${totalAmountEstimated}`} key="tab2">
                {this.renderQuotationElem(orderDetail)}
            </TabPane>
        );
        return (
            <div id="bill_detail_tab">
                <Tabs type="card">
                    {tabs}
                </Tabs>
            </div>
        )
    }

    /**
     * 编辑Account For
     * @param edit 是否编辑
     */
    handlerEditAccountFor(edit) {
        this.setState({edit});
    }

    /**
     * 保存Account For
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const orderDetail = this.getOrderDetail();
                orderDetail.billingInstruction = values.billingInstruction;
                this.setState({orderDetail, edit: false});
            } else {
                console.log('err', err)
            }
        });
    }

    handlerOperation(type) {
        const orderDetail = this.getOrderDetail();
        let status = orderDetail.status;
        if (type == 'submit') {
            status = 710;
        } else if (type == 'reject') {
            status = 720;
        } else if (type == 'accept') {
            status = 799;
        }
        orderDetail.status = status;
        this.setState({orderDetail});
    }

}

export default Form.create()(Bill);