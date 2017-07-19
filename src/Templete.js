/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Welcome extends React.Component {

    getStyles() {
        const styles = {};

        return styles;
    }


    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const styles = this.getStyles();
        return (
            <div>
                <h1>Welcome to ...</h1>
            </div>
        )
    }
}

export default Welcome;