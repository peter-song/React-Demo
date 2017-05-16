import React, {Component, PropTypes} from 'react';
import {componentMap} from '../../../../src/constants';
import {Form, Button} from 'antd';
// import invariant from 'fbjs/lib/invariant';
import _ from 'lodash';

// import './basic-form.css';

const FormItem = Form.Item;

class BasicForm extends Component {

    static propTypes = {
        form: PropTypes.object,
        components: PropTypes.array,
        edit: PropTypes.bool,
        onSubmit: PropTypes.func,
    };

    static defaultProps = {
        edit: true,
        components: []
    };

    constructor(props) {
        super(props);
    }

    getDefaultLabel(component) {
        let label = '';
        for (let i = 0; i < component.children.length; i++) {
            let child = component.children[i];
            if (child.value === component.options.initialValue) {
                label = child.label;
                break;
            }
        }
        return label;
    }

    renderComponent(component) {
        const {getFieldDecorator} = this.props.form;
        let child = null;
        let formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        let element = componentMap[component.name];
        // invariant(!!element, `Check if ${component.name} exist in implemented components`);
        if (component.layout) _.merge(formItemLayout, component.layout);
        if (component.children) {
            child = this.props.edit ? (
                    <element.Group key={`${component.label}-${component.name}-group`}>
                        {_.map(component.children, child => {
                            return React.createElement(element, {
                                value: child.value,
                                key: `${component.label}-${component.name}-group-${child.label}`
                            }, child.label);
                        })}
                    </element.Group>
                ) : <div>{ this.getDefaultLabel(component) }</div>;
        } else {
            console.log('props', component.props);
            child = !this.props.edit && !component.isCheckbox ?
                <div>{component.options.initialValue || ''}</div> :
                React.createElement(element, component.props, component.isCheckbox ? component.label : null);
        }
        return (
            <FormItem
                key={`${component.label}-${component.name}-${component.key}`}
                {...formItemLayout}
                label={component.isCheckbox ? null : component.label}
                hasFeedback={component.hasFeedback || true}
            >
                {this.props.edit ? getFieldDecorator(component.field || _.camelCase(component.label), component.options)(child) : child}
            </FormItem>
        );
    }

    render() {
        const tailFormItemLayout = {
            wrapperCol: {span: 14, offset: 6},
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                {_.map(this.props.components, component => this.renderComponent(component))}
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Register</Button>
                </FormItem>
            </Form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log('Received values of form: ', values);
            if (!err && this.props.onSubmit) {
                this.props.onSubmit(values)
            } else {
                console.log('err', err);
            }
        });
    }
}

export default Form.create()(BasicForm);
