/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
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
                float: 'left'
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static propTypes = {
        edit: React.PropTypes.bool,
        form: React.PropTypes.object,
        formData: React.PropTypes.object,
        onSubmit: React.PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            requires: ''
        }
    }

    render() {

        const styles = this.getStyles();
        const {edit} = this.props;

        return (
            <SettingForm {...this.props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <div>
                    <div style={_.merge({}, styles.left, styles.require)}>Requires:</div>
                    <div style={_.merge({}, styles.left, styles.require, {width: '85%', marginLeft: 15})}>
                        {
                            edit ? <Input type="textarea" rows={6} placeholder="Please write your requirements"
                                          value={this.state.requires} onChange={this.handlerChangeRequires.bind(this)}/>
                                : <span>{this.state.requires}</span>
                        }
                    </div>
                    <div style={styles.clear}></div>
                </div>
            </SettingForm>
        );
    }

    componentWillReceiveProps(nextProps) {
        const formData = nextProps.formData;
        if (this.props.formData !== formData || !nextProps.edit) {
            this.setState({
                requires: formData.requires
            })
        }
    }

    /**
     * 输入requires
     * @param e
     */
    handlerChangeRequires(e) {
        this.setState({
            requires: e.target.value
        })
    }

    /**
     * 保存
     */
    handleSubmit() {
        const {formData} = this.props;
        formData.requires = this.state.requires;

        if (this.props.onSubmit) {
            this.props.onSubmit(formData);
        }
    }
}

export default Form.create()(PSCInspection);