/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {renderRoutes} from 'react-router-config';

class MainFrame extends React.Component {

  getStyles() {

    const styles = {
      content: {
        padding: 20,
      },
    };

    return styles;
  }

  static propTypes = {
    route: PropTypes.object,
  };

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.content}>
        {renderRoutes(this.props.route.routes)}
      </div>
    );

  }
}

export default MainFrame;