/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';

import {renderRoutes} from 'react-router-config';

class MainFrame extends React.Component {

    getStyles() {
        const styles = {
            content: {
                padding: 20,
            }
        };

        return styles;
    }

    render() {

        const styles = this.getStyles();

        console.log('this.props.route.routes', this.props.route)
        return (
            <div style={styles.content}>
              {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

export default MainFrame;