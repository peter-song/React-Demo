/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import _ from 'lodash';
import {Form} from 'antd';

import BasicForm from './../../basic-form';
import SettingForm from '../../SettingForm';

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

    renderEditElem(formData) {
        const components = [{
            name: 'Input',
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input your amount!',
                }],
                initialValue: formData.agency
            },
            hasFeedback: false,
            label: 'Agency',
        }, {
            name: 'Input',
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input your amount!',
                }],
                initialValue: formData.address
            },
            hasFeedback: false,
            label: 'Address',
        }, {
            name: 'Input',
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input your amount!',
                }],
                initialValue: formData.contactPerson
            },
            hasFeedback: false,
            label: 'Contact Person',
        }, {
            name: 'Input',
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input your amount!',
                }],
                initialValue: formData.tel
            },
            hasFeedback: false,
            label: 'Tel.',
        }, {
            name: 'Input',
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input your amount!',
                }],
                initialValue: formData.email
            },
            hasFeedback: false,
            label: 'Email',
        }, {
            name: 'Input',
            props: {
                type: "textarea",
                rows: 6,
                placeholder: 'Please write your requirements'
            },
            options: {
                rules: [{
                    // required: true,
                    message: 'Please input requires!',
                }],
                initialValue: formData.requires
            },
            label: 'Requires',
        }];

        const props = {
            edit: true,
            components
        };

        return (
            <BasicForm {...props} {...this.props} />
        )
    }

    renderShowElem(formData) {
        const styles = this.getStyles();
        return (
            <div>
                <div style={styles.table}>
                    <div style={_.merge({}, {display: 'flex'})}>
                        <div style={_.merge({}, styles.left, styles.tableKey)}>Agency</div>
                        <div style={_.merge({}, styles.left, styles.tableValue)}>{formData.agency}</div>
                        <div style={styles.clear}></div>
                    </div>
                    <div style={_.merge({}, styles.line, {display: 'flex'})}>
                        <div style={_.merge({}, styles.left, styles.tableKey)}>Address</div>
                        <div style={_.merge({}, styles.left, styles.tableValue)}>{formData.address}</div>
                        <div style={styles.clear}></div>
                    </div>
                    <div style={_.merge({}, styles.line, {display: 'flex'})}>
                        <div style={_.merge({}, styles.left, styles.tableKey)}>Contact Person</div>
                        <div style={_.merge({}, styles.left, styles.tableValue)}>{formData.contactPerson}</div>
                        <div style={styles.clear}></div>
                    </div>
                    <div style={_.merge({}, styles.line, {display: 'flex'})}>
                        <div style={_.merge({}, styles.left, styles.tableKey)}>Tel.</div>
                        <div style={_.merge({}, styles.left, styles.tableValue)}>{formData.tel}</div>
                        <div style={styles.clear}></div>
                    </div>
                    <div style={_.merge({}, styles.line, {display: 'flex'})}>
                        <div style={_.merge({}, styles.left, styles.tableKey)}>Email</div>
                        <div style={_.merge({}, styles.left, styles.tableValue)}>{formData.email}</div>
                        <div style={styles.clear}></div>
                    </div>
                </div>

                <div style={{marginTop: 26}}>
                    <div style={_.merge({}, styles.left, styles.require)}>Requires:</div>
                    <div style={_.merge({}, styles.left, styles.require, {
                        width: '85%',
                        marginLeft: 15
                    })}>{formData.requires}</div>
                    <div style={styles.clear}></div>
                </div>
            </div>
        )
    }

    render() {
        const styles = this.getStyles();

        const {edit, formData} = this.props;
        console.log('edit', this.props.edit)
        return (
            <SettingForm {...this.props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <div style={styles.title}>Charterer’s Agency Details</div>
                <div style={{marginTop: 16}}>
                    {edit ? this.renderEditElem(formData) : this.renderShowElem(formData)}
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
                if (this.props.onSubmit) {
                    this.props.onSubmit(values);
                }
            } else {
                console.log('err', err)
            }
        });
    }

}

export default Form.create()(PortCaptainOutlay);