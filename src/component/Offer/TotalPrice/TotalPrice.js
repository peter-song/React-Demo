/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import _ from 'lodash';
import {Button} from 'antd';

import ResolveModal from './ResolveModal';
import RejectModal from './RejectModal';

class TotalPrice extends React.Component {

    getStyles() {
        const styles = {
            content: {
                marginTop: 16,
            },

            title: {
                fontWeight: 400,
                fontSize: 16,
                color: 'rgba(0,0,0,0.75)',
                letterSpacing: 0,
            },

            price: {
                fontWeight: 400,
                fontSize: 20,
                color: '#F5A623',
                letterSpacing: 0,
                marginLeft: 4,
            },

            from: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                letterSpacing: 0
            },

            company: {
                fontWeight: 400,
                fontSize: 14,
                color: '#4990E2',
                letterSpacing: 0,
                marginLeft: 6,
            },

            contentLeft: {
                float: 'left'
            },

            contentRight: {
                float: 'right'
            },

            icon: {
                cursor: 'pointer',
                height: 24,
                width: 24,
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    constructor(props) {
        super(props);
        this.state = {
            resolveModalIsOpen: false,
            rejectModalIsOpen: false,
        }
    }

    static propTypes = {
        price: React.PropTypes.string,
        company: React.PropTypes.string
    };

    static defaultProps = {
        price: 'USD 22,030.00',
        company: 'Shanghai Seasky Shipping ltd.'
    };

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.content}>
                <div style={styles.contentLeft}>
                    <span style={styles.title}>Quotation: </span>
                    <span style={styles.price}>{this.props.price}</span>
                </div>
                <div style={styles.contentRight}>
                    <span style={styles.from}>Form: </span>
                    <span style={styles.company}>{this.props.company}</span>
                    <Button type="primary" style={{marginLeft: 17}}
                            onClick={this.handlerOpenResolveModal.bind(this, true)}
                    >
                        Appointment
                    </Button>
                    <Button style={{marginLeft: 10}}
                            onClick={this.handlerOpenRejectModal.bind(this, true)}
                    >Reject Quotation</Button>
                </div>
                <div style={styles.clear}></div>
                <ResolveModal resolveModalIsOpen={this.state.resolveModalIsOpen}
                              handlerOpenResolveModal={this.handlerOpenResolveModal.bind(this)}
                />
                <RejectModal rejectModalIsOpen={this.state.rejectModalIsOpen}
                             handlerOpenRejectModal={this.handlerOpenRejectModal.bind(this)}
                             handlerRejectOk={this.handlerRejectOk.bind(this)}
                />
            </div>
        )
    }

    handlerExportQuotation(){
        console.log('download pdf');
    }

    handlerOpenResolveModal(isOpen) {
        this.setState({
            resolveModalIsOpen: isOpen
        })
    }

    handlerOpenRejectModal(isOpen) {
        this.setState({
            rejectModalIsOpen: isOpen
        })
    }

    handlerRejectOk(reason) {
        this.handlerOpenRejectModal(false);
        console.log(reason)
    }
}

export default TotalPrice;