/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Modal, Input} from 'antd';

class RejectModal extends React.Component {

  getStyles() {

    const styles = {

      productPrompt: {
        color: '#f04134',
        fontWeight: 400,
        fontSize: 12,
        letterSpacing: 0,
        marginTop: 2,
      },

    };

    return styles;
  }

  static defaultProps = {
    title: 'Reject Quotation',
  };

  state = {
    reason: '',
    isShowPrompt: true,
  };

  render() {

    const styles = this.getStyles();

    return (
      <Modal
        title={this.props.title} visible={this.props.rejectModalIsOpen}
        onOk={this.handleOk.bind(this)} onCancel={this.handlerOpenRejectModal.bind(this)}
      >
        <Input
          type="textarea"
          value={this.state.reason}
          autosize={{minRows: 6, maxRows: 6}}
          placeholder="please enter reject reason"
          onChange={this.handlerChangeReason.bind(this)}
        />
        {this.state.isShowPrompt ? '' : <div style={_.merge({}, styles.productPrompt)}>理由不能为空</div>}
      </Modal>
    );

  }

  componentWillUnmount() {
    this.resetState();
  }

  handlerChangeReason(e) {
    const reason = e.target.value;
    this.setState({
      reason: reason,
      isShowPrompt: reason.length,
    });
  }

  handlerOpenRejectModal() {
    this.props.handlerOpenRejectModal(false);
    this.resetState();
  }

  handleOk() {
    let reason = this.state.reason;
    let isShowPrompt;
    if (reason && this.props.handlerRejectOk) {
      this.props.handlerRejectOk(reason);
      reason = '';
      isShowPrompt = true;
    } else {
      isShowPrompt = false;
    }
    this.resetState(reason, isShowPrompt);
  }

  resetState(reason = '', isShowPrompt = true) {
    this.setState({
      reason, isShowPrompt,
    });
  }

}

RejectModal.propTypes = {
  title: PropTypes.string.isRequired,
  rejectModalIsOpen: PropTypes.bool.isRequired,
  handlerOpenRejectModal: PropTypes.func.isRequired,
  handlerRejectOk: PropTypes.func.isRequired,
};

export default RejectModal;