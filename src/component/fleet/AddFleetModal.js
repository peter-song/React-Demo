/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Modal, Form, Input} from 'antd';
const FormItem = Form.Item;

class AddFleetModal extends React.Component {

    getStyles() {
        const styles = {

            title: {
                fontWeight: 400,
                fontSize: 18,
                color: 'rgba(0,0,0,0.75)',
            },
        };

        return styles;
    }

    static propTypes = {
        form: PropTypes.object,
        fleet: PropTypes.object,
        modal: PropTypes.string,
        openModal: PropTypes.func,
        saveFleet: PropTypes.func,
    };

    render() {
        const styles = this.getStyles();
        const {getFieldDecorator} = this.props.form;

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

        const {fleet, modal} = this.props;
        const title = _.isEmpty(fleet) ? 'Add Fleet' : 'Edit Fleet';
        return (
            <Modal
                title={title}
                style={styles.title}
                visible={true}
                okText={'Save'}
                cancelText={'Cancel'}
                onOk={this.handlerOK.bind(this)}
                onCancel={() => this.props.openModal(modal, false)}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="Fleet Name"
                        hasFeedback
                    >
                        {getFieldDecorator('fleetName', {
                            rules: [{
                                required: true,
                                message: 'Please input fleet name!',
                            }],
                            initialValue: fleet.name
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }

    handlerOK() {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (this.props.saveFleet) {
                    const {modal} = this.props;
                    const fleet = _.cloneDeep(this.props.fleet);
                    fleet.fleetName = values.fleetName;
                    this.props.saveFleet(modal, fleet);
                }
            } else {
                console.log('err', err)
            }
        });
    }
}

export default Form.create()(AddFleetModal);