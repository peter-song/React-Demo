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

            common: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            nextPortContent: {
                padding: 20,
                display: 'flex',
                alignItems: 'center',
            },

            downloadContent: {
                padding: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },

            requireContent:{
                padding: 20,
                display: 'flex',
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
                <div style={_.merge({}, styles.nextPortContent)}>
                    <div style={_.merge({}, styles.common)}>Next Port:</div>
                    <div style={_.merge({}, styles.common, {marginLeft: 15})}>
                        {
                            edit ? <Input value={this.state.nextPort} onChange={this.handlerChangeNextPort.bind(this)}/>
                                : <span>{this.state.nextPort}</span>
                        }
                    </div>
                </div>
                <div style={_.merge({}, styles.line, styles.downloadContent)}>
                    <div style={_.merge({}, styles.documents)}>Required Documents</div>
                    <Button><Icon type="upload"/>Upload</Button>
                </div>
                <div style={_.merge({}, styles.line, styles.requireContent)}>
                    <div style={_.merge({}, styles.common)}>Requires:</div>
                    <div style={_.merge({}, styles.common, {flex: '1', marginLeft: 15})}>
                        {
                            edit ? <Input type="textarea" rows={6} placeholder="Please write your requirements"
                                          value={this.state.requires} onChange={this.handlerChangeRequires.bind(this)}/>
                                : <span>{this.state.requires}</span>
                        }
                    </div>
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