/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {

  getStyles() {
    const styles = {
      leftNav: {
        height: '100%',
        position: 'fixed',
        zIndex: '1',
      },
    };

    return styles;
  }

  render() {

    const {
      mode,
      collapsed,
      onCollapse,
    } = this.props;

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{height: '100%'}}
      >
        <Menu
          theme="dark" mode={mode} defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
          >
            <Menu.Item key="basic"><Link to="/basic">Basic</Link></Menu.Item>
            <Menu.Item key="detail"><Link to="/detail">Detail</Link></Menu.Item>
            <Menu.Item key="bill"><Link to="/bill">Bill</Link></Menu.Item>
            <Menu.Item key="notice"><Link to="/notice">Notice</Link></Menu.Item>
            <Menu.Item key="fleet"><Link to="/fleet">Fleet</Link></Menu.Item>
            <Menu.Item key="ship"><Link to="/ship">Ship</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );

  }
}

LeftMenu.propTypes = {
  mode: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default LeftMenu;