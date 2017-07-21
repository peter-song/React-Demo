/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Icon} from 'antd';

class Welcome extends React.Component {

    getStyles() {
        const styles = {

            regularFont: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            boldFont: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
            },

            yellowFont: {
                fontWeight: 500,
                fontSize: 14,
                color: '#f5a623',
            },

            noticeContent: {
                display: 'flex',
                padding: '16px 8px',
            },

            noticeLeft: {
                width: 250,
                borderRight: '1px solid #E9E9E9',
            },

            noticeRight: {
                flex: '1',
                marginLeft: 10
            },

            shipItem: {
                display: 'flex',
                marginRight: 10,
                padding: '13px 8px',
                fontWeight: 400,
                fontSize: 14,
                borderBottom: '1px solid #E9E9E9',
                cursor: 'pointer',
                alignItems: 'center',
            },

            dot: {
                background: '#E44D3C',
                borderRadius: 100,
                marginLeft: 10,
                width: 12,
                height: 12,
            },

            orderItem: {
                border: '1px solid #E9E9E9',
            },

            orderTitle: {
                padding: '8px 15px',
                background: '#f7f7f7',
            },

            orderContent: {
                display: 'flex',
                padding: '12px 15px',
                justifyContent: 'space-between',
                borderTop: '1px solid #E9E9E9',
                cursor: 'pointer',
            },

            verticalCenter: {
                display: 'flex',
                alignItems: 'center',
            },

        };

        return styles;
    }

    static propTypes = {
        dataSource: PropTypes.array
    };

    static defaultProps = {
        dataSource: [
            {
                _id: '1111',
                name: 'ANGELO DELLA GATTA UNO',
                watched: false,
                orders: [
                    {
                        port: 'Shanghai Waigaoqiao',
                        principal: 'Scorpio Shipping Agency Management',
                        ETA: '24/AUG/2017',
                        orderNo: 'EP092017032308851422',
                        msgs: [
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                        ]
                    },
                    {
                        port: 'Shanghai Waigaoqiao',
                        principal: 'Scorpio Shipping Agency Management',
                        ETA: '24/AUG/2017',
                        orderNo: 'EP092017032308851422',
                        msgs: [
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                        ]
                    },
                    {
                        port: 'Shanghai Waigaoqiao',
                        principal: 'Scorpio Shipping Agency Management',
                        ETA: '24/AUG/2017',
                        orderNo: 'EP092017032308851422',
                        msgs: [
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: false
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                        ]
                    }
                ]
            },

            {
                _id: '2222',
                name: 'ANGELO DELLA GATTA UNO',
                watched: true,
                orders: [
                    {
                        port: 'Shanghai Waigaoqiao',
                        principal: 'Scorpio Shipping Agency Management',
                        ETA: '24/AUG/2017',
                        orderNo: 'EP092017032308851422',
                        msgs: [
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestOwner has appointed you as the agency',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            },
                            {
                                content: 'TestAgency submited Bill submitted the quotationsubmitted the quotationsubmitted the quotationsubmitted the quotationsubmitted the quotation the quotationsubmitted the quotation',
                                date: '30/JUN/2017 08:20',
                                watched: true
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpens: [],
            ship: undefined,
        }
    }

    getDataSource() {
        return _.cloneDeep(this.props.dataSource);
    }

    getShip(dataSource = this.props.dataSource) {
        let ship = this.state.ship;
        if (!ship && dataSource.length) {
            ship = _.cloneDeep(dataSource[0]);
        }
        return ship;
    }

    renderShipsElem(styles) {
        const dataSource = this.getDataSource();
        const ship = this.getShip();
        return (
            <div>
                {
                    dataSource.map((item, i) => {
                        const props = {
                            key: 'ship' + (i + 1),
                            style: _.merge({}, styles.shipItem, item._id == ship._id ? {color: '#4990e2'} : {color: 'rgba(0,0,0,0.65)'}),
                            onClick: this.handlerChangeShip.bind(this, i)
                        };
                        return (
                            <div {...props}>
                                {item.name}
                                {!item.watched ? <div style={styles.dot}></div> : ''}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderOrdersElem(styles) {
        const {isOpens} = this.state;
        const ship = this.getShip();
        const orders = ship.orders;

        return (
            <div>
                {
                    orders.map((item, i) => {
                        const isOpen = isOpens[i] == undefined || isOpens[i];
                        const props = {
                            key: 'order' + (i + 1),
                            style: _.merge({}, styles.orderItem, i > 0 ? {marginTop: 8} : {})
                        };
                        return (
                            <div {...props}>
                                <div style={styles.orderTitle}>
                                    <div style={_.merge({}, styles.verticalCenter, styles.regularFont)}>
                                        <div style={_.merge({}, {width: 200})}>
                                            Port: {item.port}
                                        </div>
                                        <div style={_.merge({}, {flex: '1'})}>
                                            Principal: {item.principal}
                                        </div>
                                        {!ship.watched ? <div style={styles.dot}></div> : ''}
                                    </div>
                                    <div style={_.merge({}, styles.verticalCenter, {marginTop: 10})}>
                                        <div style={_.merge({}, styles.boldFont, {width: 200})}>
                                            ETA: {item.ETA}
                                        </div>
                                        <div style={_.merge({}, styles.regularFont, {flex: '1'})}>
                                            Order No: {item.orderNo}
                                        </div>
                                        <div>
                                            <Icon
                                                type={isOpen ? 'up-square-o' : 'down-square-o'}
                                                style={{cursor: 'pointer'}}
                                                onClick={this.handlerToggle.bind(this, i, !isOpen)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    isOpen ? item.msgs.map((msg, j) => {
                                            const style = msg.watched ? styles.regularFont : styles.boldFont;
                                            const props2 = {
                                                key: 'msg' + (i + 1) + '-' + (j + 1),
                                                style: _.merge({}, styles.orderContent, style),
                                                onClick: this.handlerMsg.bind(this, ship._id)
                                            };

                                            return (
                                                <div {...props2}>
                                                    <div>{msg.content}</div>
                                                    <div>
                                                        <div style={{textAlign: 'right', width: 150}}>{msg.date}</div>
                                                    </div>
                                                </div>
                                            )
                                        }) : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.noticeContent}>
                <div style={styles.noticeLeft}>
                    {this.renderShipsElem(styles)}
                </div>
                <div style={styles.noticeRight}>
                    {this.renderOrdersElem(styles)}
                </div>
            </div>
        )
    }

    handlerChangeShip(i) {
        const dataSource = this.getDataSource();
        this.setState({ship: dataSource[i], isOpens: []})
    }

    handlerToggle(i, isOpen) {
        let isOpens = this.state.isOpens;
        const ship = this.getShip();
        if (!isOpens.length) {
            isOpens = new Array(ship.orders.length);
            isOpens = _.fill(isOpens, true);
        }
        isOpens[i] = isOpen;
        this.setState({isOpens})
    }


    handlerMsg(_id) {
        console.log('_id', _id)
    }
}

export default Welcome;