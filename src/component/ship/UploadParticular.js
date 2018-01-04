/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'antd';

class UploadParticular extends React.Component {

  getStyles() {

    const styles = {

      regularFont: {
        fontWeight: 400,
        fontSize: 14,
        color: '#F5A623',
      },

      regularFont2: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #D9D9D9',
        padding: '8px 14px',
      },

    };

    return styles;
  }

  static propTypes = {
    hasUpload: PropTypes.bool,
  };

  static defaultProps = {
    hasUpload: false,
  };

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.content}>
        <div style={{flex: '1'}}>
          {
            this.props.hasUpload ?
              <span style={styles.regularFont2}>
                {'Your document uploaded successfully, we will complete ship registry as soon as possible. Thank you for your cooperation.'}
              </span> :
              <span style={styles.regularFont}>
                {'Please upload ship particular，we could help you to fill out registry form to make the ship data completed.'}
              </span>
          }
        </div>
        <div style={{width: 180, textAlign: 'right'}}>
          <Button type='primary'><Icon type="upload"/>Upload Ship Particular</Button>
        </div>
      </div>
    );

  }
}

export default UploadParticular;