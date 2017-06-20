/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import {Form, Input} from 'antd';

const FormItem = Form.Item;

import SettingForm from '../../SettingForm';

class MedicalService extends React.Component {

    static propTypes = {
        edit: React.PropTypes.bool,
        form: React.PropTypes.object,
        formData: React.PropTypes.object,
        onSubmit: React.PropTypes.func,
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {edit, formData} = this.props;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };

        return (
            <SettingForm {...this.props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <FormItem
                    {...formItemLayout}
                    label="Requires"
                    hasFeedback
                >
                    {edit ? getFieldDecorator('requires', {
                            rules: [{
                                required: true, message: 'no requiry',
                            }],
                            initialValue: formData ? formData.requires : ''
                        })(
                            <Input type="textarea" rows={6}
                                   placeholder="Please write your requirements"/>
                        ) : <div>{formData ? formData.requires : ''}</div>}
                </FormItem>
            </SettingForm>
        );
    }

    //保存
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

export default Form.create()(MedicalService);