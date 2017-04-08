import React from 'react';

export default class Greeter extends React.Component {

    render() {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
