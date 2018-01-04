/**
 * Created by songzhongkun on 2017/5/16.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Form} from 'antd';

import SettingForm from '../../SettingForm';
import BasicForm from './../../basic-form';

class PortCaptainOutlay extends React.Component {

  getStyles() {

    const styles = {

      title: {
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      table: {
        border: '1px solid #D9D9D9',
        borderRadius: 4,
      },

      tableKey: {
        background: '#F7F7F7',
        width: '20%',
        padding: '12px 10px',
        fontWeight: 500,
        fontSize: 14,
        color: 'rgba(0,0,0,0.75)',
        borderRight: '1px solid #D9D9D9',
      },

      tableValue: {
        width: '80%',
        padding: '12px 10px',
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      require: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      verticalCenter: {
        display: 'flex',
        alignItems: 'Center',
      },

      line: {
        borderTop: '1px solid #D9D9D9',
      },

      left: {
        float: 'left',
      },

      right: {
        float: 'right',
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
  };

  componentDidMount() {
    console.log('PortCaptainOutlay');
  }

  renderEditElem() {

    const config = this.getConfig();

    const layout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 3},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    const components = [
      {
        name: 'Input',
        options: {
          initialValue: config.agency,
        },
        hasFeedback: false,
        label: 'Agency',
        layout,
      },
      {
        name: 'Input',
        options: {
          initialValue: config.address,
        },
        hasFeedback: false,
        label: 'Address',
        layout,
      },
      {
        name: 'Input',
        options: {
          initialValue: config.contactPerson,
        },
        hasFeedback: false,
        label: 'Contact Person',
        layout,
      },
      {
        name: 'Input',
        options: {
          initialValue: config.tel,
        },
        hasFeedback: false,
        label: 'Tel.',
        layout,
      },
      {
        name: 'Input',
        options: {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }],
          initialValue: config.email,
        },
        hasFeedback: false,
        label: 'Email',
        layout,
      },
      {
        name: 'Input',
        props: {
          type: 'textarea',
          rows: 6,
          placeholder: 'Please write your requirements',
        },
        options: {
          initialValue: config.requires,
        },
        label: 'Requires',
        layout,
      }
    ];

    const props = {
      edit: true,
      components,
    };

    return (
      <BasicForm {...props} {...this.props} />
    );
  }

  renderShowElem() {
    const styles = this.getStyles();
    const config = this.getConfig();
    return (
      <div>
        <div style={styles.table}>
          <div style={_.merge({}, {display: 'flex'})}>
            <div style={_.merge({}, styles.tableKey)}>Agency</div>
            <div style={_.merge({}, styles.tableValue)}>{config.agency}</div>
          </div>
          <div style={_.merge({}, styles.line, {display: 'flex'})}>
            <div style={_.merge({}, styles.tableKey)}>Address</div>
            <div style={_.merge({}, styles.tableValue)}>{config.address}</div>
          </div>
          <div style={_.merge({}, styles.line, {display: 'flex'})}>
            <div style={_.merge({}, styles.tableKey)}>Contact Person</div>
            <div style={_.merge({}, styles.tableValue)}>{config.contactPerson}</div>
          </div>
          <div style={_.merge({}, styles.line, {display: 'flex'})}>
            <div style={_.merge({}, styles.tableKey)}>Tel.</div>
            <div style={_.merge({}, styles.tableValue)}>{config.tel}</div>
          </div>
          <div style={_.merge({}, styles.line, {display: 'flex'})}>
            <div style={_.merge({}, styles.tableKey)}>Email</div>
            <div style={_.merge({}, styles.tableValue)}>{config.email}</div>
          </div>
        </div>

        <div style={{display: 'flex', marginTop: 26}}>
          <div style={_.merge({}, styles.require)}>Requires:</div>
          <div style={_.merge({}, styles.require, {
            flex: '1',
            marginLeft: 15,
          })}>{config.requires}</div>
        </div>
      </div>
    );
  }

  getConfig(formData = this.props.formData) {
    const product = formData.products && formData.products.length ? formData.products[0] : undefined;
    return product ? product.config : {};
  }

  render() {
    const styles = this.getStyles();

    const {edit} = this.props;
    return (
      <SettingForm
        {...this.props}
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div style={styles.title}>Charterer’s Agency Details</div>
        <div style={{marginTop: 16}}>
          {edit ? this.renderEditElem() : this.renderShowElem()}
        </div>
      </SettingForm>
    );
  }

  /**
   * 保存
   */
  handleSubmit() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('values', values);
        if (this.props.onSubmit) {
          const formData = _.cloneDeep(this.props.formData);
          formData.products[0].config = values;
          this.props.onSubmit(formData);
        }
      } else {
        console.log('err', err);
      }
    });
  }

}

export default Form.create()(PortCaptainOutlay);