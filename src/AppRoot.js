/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import {renderRoutes} from 'react-router-config';

import LeftMenu from './LeftMenu';

class AppRoot extends React.Component {

  getStyles(content) {

    const styles = {

      leftNav: {
        height: '100%',
        position: 'fixed',
        zIndex: '1',
      },

      rightContent: {
        marginLeft: content.state.collapsed ? 64 : 200
      },
    };

    return styles;
  }

  state = {
    collapsed: false,
    mode: 'inline',
  };

  onCollapse = collapsed => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };

  render() {
    const styles = this.getStyles(this);

    const {collapsed, mode} = this.state;

    const props = {
      collapsed,
      mode,
      onCollapse: this.onCollapse.bind(this),
    };

    return (
      <div>
        <div style={styles.leftNav}>
          <LeftMenu {...props}/>
        </div>
        <div style={styles.rightContent}>
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}

export default AppRoot;