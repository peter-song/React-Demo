/**
 * Created by songzhongkun on 2017/5/23.
 */

import React from 'react';
import _ from 'lodash';
import {Form} from 'antd';

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
        isPadding: React.PropTypes.bool
    };

    static defaultProps = {
        showBtn: false,
        title: 'Default',
        edit: false,
        isPadding: true
    };

    render() {
        const styles = this.getStyles();

        const title = this.props.title;
        const edit = this.props.edit;

        let operationElem;
        if (edit) {
            operationElem = <div>
                <span style={styles.serviceOperation}
                      onClick={() => this.props.onSubmit()}>Save</span>
                <span style={styles.serviceOperation}
                      onClick={() => this.props.onEditCancel(false)}>Cancel</span>

            </div>;
        } else {
            operationElem = <span style={styles.serviceOperation}
                                  onClick={() => this.props.onEditCancel(true)}>Edit</span>
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
        )
    }

}

export default Form.create()(SettingForm);