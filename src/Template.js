/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Template extends React.Component {

  getStyles() {

    const styles = {
      content: {
        padding: 20,
      }
    };

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
      <div style={styles.content}>
        <h1>Welcome to ...</h1>
      </div>
    )
  }
}

export default Template;