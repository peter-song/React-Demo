/**
 * Created by songzhongkun on 2017/5/16.
 */
import React from 'react';

import BasicForm from'./basic-form';

export default class Other extends React.Component {

    static propTypes = {
        info: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {

        const info = this.props.info;

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