import React from 'react';

import BasicForm from'./basic-form';

export default class CrewSeeDoctor extends React.Component {

    static propTypes = {
        info: React.PropTypes.object
    };


    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;
        const components = [{
            name: 'InputNumber',
            props: {
                min: 1
            },
            options: {
                rules: [{
                    required: true,
                    message: 'Please input number of people!',
                }],
                initialValue: info.numberOfPeople,
            },
            hasFeedback: false,
            label: 'Number of people',
            key: 'health-certificate'
        }, {
            name: 'Input',
            props: {
                type: "textarea",
                rows: 6,
                placeholder: 'Please write your requirements'
            },
            options: {
                rules: [{
                    required: false,
                    message: 'no requiry',
                }],
                initialValue: info.requires,
            },
            label: 'Requires'
        }];

        return (
            <BasicForm
                components={components}
                {...this.props}
            />
        );
    }

};