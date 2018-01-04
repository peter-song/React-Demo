/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';

class Login extends React.Component {

  getStyles() {

    const styles = {
      content: {
        padding: 20,
      },
    };

    return styles;
  }

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.content}>
        <h1>Login</h1>
      </div>
    );

  }
}

export default Login;