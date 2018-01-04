/**
 * Created by songzhongkun on 2017/5/16.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Form, Input} from 'antd';

import SettingForm from '../../SettingForm';

class PSCInspection extends React.Component {

  getStyles() {

    const styles = {

      require: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      left: {
        float: 'left',
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

  state = {
    requires: '',
  };

  componentDidMount() {
    this.initState();
  }

  initState(formData = this.props.formData) {
    const config = this.getConfig(formData);
    this.setState({
      requires: config.remark,
    });
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
        <div style={{display: 'flex'}}>
          <div style={_.merge({}, styles.left, styles.require)}>Requires:</div>
          <div style={_.merge({}, styles.left, styles.require, {flex: '1', marginLeft: 15})}>
            {
              edit ?
                <Input
                  type="textarea" rows={6} placeholder="Please write your requirements"
                  value={this.state.requires} onChange={this.handlerChangeRequires.bind(this)}/>
                : <span>{this.state.requires}</span>
            }
          </div>
        </div>
      </SettingForm>
    );
  }

  componentWillReceiveProps(nextProps) {
    const formData = _.cloneDeep(nextProps.formData);
    if (this.props.formData !== formData || !nextProps.edit) {
      this.initState(formData);
    }
  }

  /**
   * 输入requires
   * @param e
   */
  handlerChangeRequires(e) {
    this.setState({
      requires: e.target.value,
    });
  }

  /**
   * 保存
   */
  handleSubmit() {
    const config = {
      remark: this.state.requires,
    };
    console.log('values', config);
    if (this.props.onSubmit) {
      const formData = _.cloneDeep(this.props.formData);
      formData.products[0].config = config;
      this.props.onSubmit(formData);
    }
  }
}

export default Form.create()(PSCInspection);