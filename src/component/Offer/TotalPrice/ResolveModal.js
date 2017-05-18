/**
 * Created by songzhongkun on 2017/5/18.
 */
import React from 'react';
import {Modal, Button} from 'antd';

export default class ResolveModal extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        content: React.PropTypes.string,
        resolveModalIsOpen: React.PropTypes.bool,
        handlerOpenResolveModal: React.PropTypes.func
    };

    static defaultProps = {
        title: 'Make an Appointment Successfully',
        content: 'Order approved! You have appointed'
    };

    render() {

        return (
            <Modal title={this.props.title} visible={this.props.resolveModalIsOpen}
                   onOk={this.handleOk} onCancel={() => this.props.handlerOpenResolveModal(false)}
                   footer={[
                       <Button key="submit" type="primary"
                               onClick={() => this.props.handlerOpenResolveModal(false)}>
                           View Order
                       </Button>
                   ]}
            >
                <p>{this.props.content}</p>
            </Modal>
        )
    }
}