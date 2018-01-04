/**
 * Created by songzhongkun on 2017/5/23.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Form, Popconfirm} from 'antd';

class SettingForm extends React.Component {

  getStyles() {

    const styles = {

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

      saveSetting: {
        marginLeft: 16,
        fontWeight: 400,
        fontSize: 14,
        color: '#4990E2',
        letterSpacing: 0,
        cursor: 'pointer',
      },

      clear: {
        clear: 'both',
      },

    };

    return styles;
  }

  static propTypes = {
    edit: PropTypes.bool,
    form: PropTypes.object,
    formData: PropTypes.object,
    onSubmit: PropTypes.func,
    isPadding: PropTypes.bool,
    isUpdate: PropTypes.bool,
    title: PropTypes.string,
    onEditCancel: PropTypes.func,
    showBtn: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    showBtn: false,
    title: 'Default',
    edit: false,
    isPadding: true,
    isUpdate: true,
  };

  render() {
    const styles = this.getStyles();

    const title = this.props.title;
    const edit = this.props.edit;

    let operationElem;
    if (edit) {
      operationElem = <div>
        {
          this.props.isUpdate ?
            <span
              style={styles.serviceOperation}
              onClick={() => this.props.onSubmit()}>Save</span>
            : <Popconfirm
              title={'There are also projects that have not been saved and whether to give up?'}
              onConfirm={() => this.props.onSubmit()}
            >
              <span style={styles.serviceOperation}>Save</span>
            </Popconfirm>
        }
        <span
          style={styles.serviceOperation}
          onClick={() => this.props.onEditCancel(false)}>Cancel</span>

      </div>;
    } else {
      operationElem = <span
        style={styles.serviceOperation}
        onClick={() => this.props.onEditCancel(true)}>Edit</span>;
    }

    operationElem = <div style={{float: 'right'}}>{operationElem}</div>;

    return (
      <div>
        <div style={{padding: '11px 14px', background: '#F7F7F7'}}>
          <div style={{float: 'left'}}>
            <span
              style={styles.serviceTitle}>{title}{edit ? ' Setting' : ''}</span>
          </div>
          {this.props.showBtn ? operationElem : ''}
          <div style={styles.clear}></div>
        </div>
        <div style={_.merge({}, this.props.isPadding ? {padding: 20} : {})}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Form.create()(SettingForm);