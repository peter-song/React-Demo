/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import {Form} from 'antd';

import BasicForm from './basic-form';
import SettingForm from './SettingForm';

class Other extends React.Component {

    static propTypes = {
        edit: React.PropTypes.bool,
        form: React.PropTypes.object,
        formData: React.PropTypes.object,
        onSubmit: React.PropTypes.func,
    };

    componentDidMount(){
        console.log('admini')
    }

    render() {
        const formData = this.props.formData;
        const components = [{
            name: 'Input',
            props: {
                type: "textarea",
                rows: 6,
                placeholder: 'Please write your requirements'
            },
            options: {
                rules: [{
                    required: true,
                    message: 'no requiry',
                }],
                initialValue: formData.requires,
            },
            label: 'Requires'
        }];

        return (
            <SettingForm {...this.props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <BasicForm
                    components={components}
                    {...this.props}
                />
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

export default Form.create()(Other);