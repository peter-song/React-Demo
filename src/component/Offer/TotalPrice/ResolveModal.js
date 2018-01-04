/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Modal, Button} from 'antd';

class ResolveModal extends React.Component {

  static defaultProps = {
    title: 'Make an Appointment Successfully',
    content: 'Order approved! You have appointed',
  };

  render() {

    return (
      <Modal
        title={this.props.title} visible={this.props.resolveModalIsOpen}
        onOk={this.handleOk} onCancel={() => this.props.handlerOpenResolveModal(false)}
        footer={[
          <Button
            key="submit" type="primary"
            onClick={() => this.props.handlerOpenResolveModal(false)}>
            View Order
          </Button>,
        ]}
      >
        <p>{this.props.content}</p>
      </Modal>
    );

  }
}

ResolveModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  resolveModalIsOpen: PropTypes.bool.isRequired,
  handlerOpenResolveModal: PropTypes.func.isRequired,
};

export default ResolveModal;