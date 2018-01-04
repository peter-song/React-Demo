/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Icon} from 'antd';

class BasicCardItem extends React.Component {

  getStyles(content) {

    const styles = {

      verticalCenter: {
        display: 'flex',
        alignItems: 'center',
      },

      regularFont: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      blueFont: {
        fontWeight: 400,
        fontSize: 14,
        color: '#4990e2',
      },

      commonTable: {
        marginTop: content.props.marginTop,
        border: '1px solid #D9D9D9',
      },

      commonTableTitle: {
        fontWeight: 400,
        fontSize: 16,
        color: 'rgba(0,0,0,0.75)',
        padding: '11px 16px',
        background: '#F7F7F7',
      },

      commonTableContent: {
        padding: 20,
      },

      icon: {
        color: '#f5a623',
      },

    };

    return styles;
  }


  static propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    item: PropTypes.object,
    star: PropTypes.bool,
    show: PropTypes.bool,
    index: PropTypes.number,
    maxIndex: PropTypes.number,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    marginTop: PropTypes.number,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  static defaultProps = {
    title: 'title',
    item: {},
    star: false,
    show: false,
    width: '48%',
    index: 0,
    maxIndex: 1,
    leftWidth: 100,
    rightWidth: 100,
    marginTop: 24,
  };

  render() {

    const styles = this.getStyles(this);

    const {
      title,
      item,
      star,
      show,
      width,
      index,
      maxIndex,
      leftWidth,
      rightWidth,
    } = this.props;

    return (
      <div
        key={ title + '_' + (index + 1)}
        style={_.merge({}, styles.verticalCenter, {width}, index > maxIndex ? {marginTop: 8} : {})}
        onMouseOver={() => this.props.onMouseOver(true)}
        onMouseLeave={() => this.props.onMouseLeave(false)}
      >
        <div style={_.merge({}, styles.regularFont, styles.verticalCenter)}>
          <div style={{width: index % 2 == 0 || maxIndex == 0 ? leftWidth : rightWidth, textAlign: 'right'}}>
            {star ? <Icon type='star' style={styles.icon}/> : ''}
            <span style={_.merge({}, star ? {marginLeft: 8} : {})}>{item.key}:</span>
          </div>
          <div style={_.merge({}, styles.verticalCenter, {marginLeft: 16})}>
            {`${item.value} ${item.unit ? item.unit : ''}`}
          </div>
        </div>
        {
          show ?
            <div
              style={_.merge({}, styles.blueFont, {marginLeft: 20, cursor: 'pointer'})}
              onClick={() => console.log(item.key, item.value)}>Revise</div> : ''
        }
      </div>
    );

  }
}

export default BasicCardItem;