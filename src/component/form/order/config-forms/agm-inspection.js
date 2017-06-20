/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import _ from 'lodash';
import {Form, Input, Button, Upload, Icon} from 'antd';

const FormItem = Form.Item;

import SettingForm from '../../SettingForm';

class AGMInspection extends React.Component {

    getStyles() {

        const styles = {

            documents: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
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
                borderTop: '1px solid #D9D9D9'
            },

            left: {
                float: 'left'
            },

            right: {
                float: 'right'
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
            nextPort: '',
            requires: ''
        }
    }

    render() {

        const styles = this.getStyles();
        const {edit} = this.props;
        const props = {
            isPadding: false
        };

        return (
            <SettingForm {...this.props} {...props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <div style={_.merge({}, {padding: 20})}>
                    <div style={_.merge({}, styles.left, styles.require)}>Next Port:</div>
                    <div style={_.merge({}, styles.left, styles.require, {marginLeft: 15})}>
                        {
                            edit ? <Input value={this.state.nextPort} onChange={this.handlerChangeNextPort.bind(this)}/>
                                : <span>{this.state.nextPort}</span>
                        }
                    </div>
                    <div style={styles.clear}></div>
                </div>
                <div style={_.merge({}, styles.line, {padding: 20})}>
                    <div style={styles.verticalCenter}>
                        <div style={_.merge({}, styles.left, styles.documents)}>Required Documents</div>
                        <div style={_.merge({}, styles.left, {width: '75%', marginLeft: 15})}>
                            <div style={styles.right}>
                                <Button><Icon type="upload" />Upload</Button>
                            </div>
                            <div style={styles.clear}></div>
                        </div>
                        <div style={styles.clear}></div>
                    </div>
                </div>
                <div style={_.merge({}, styles.line, {padding: 20})}>
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
                nextPort: formData.nextPort,
                requires: formData.requires
            })
        }
    }

    handlerChangeNextPort(e) {
        this.setState({
            nextPort: e.target.value
        })
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
        formData.nextPort = this.state.nextPort;

        if (this.props.onSubmit) {
            this.props.onSubmit(formData);
        }
    }
}

export default Form.create()(AGMInspection);