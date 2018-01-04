/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Modal, Select} from 'antd';
const Option = Select.Option;

let manager = '';

class SelectFleetManager extends React.Component {

  getStyles() {

    const styles = {

      title: {
        fontWeight: 400,
        fontSize: 18,
        color: 'rgba(0,0,0,0.75)',
      },

      content: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: 20,
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      productPrompt: {
        color: '#f04134',
        fontWeight: 400,
        fontSize: 12,
        letterSpacing: 0,
      },

    };

    return styles;
  }

  static propTypes = {
    fleet: PropTypes.object,
    modal: PropTypes.string,
    openModal: PropTypes.func,
    saveManager: PropTypes.func,
    userList: PropTypes.array,
  };

  static defaultProps = {
    userList: [
      {
        _id: '5680a94077c818aa454e550b',
        username: 'testOwner@e-ports.com',
        name: {
          surname: 'Test Owner',
        },
      },
      {
        _id: '5680a89b77c818aa454e5505',
        username: 'testAgent@e-ports.com',
        name: {
          surname: 'Test Agent',
        },
      },
    ],
  };

  state = {
    validate: true,
  };

  handlerChange(_manager) {
    manager = _manager;
  }

  render() {

    const styles = this.getStyles();

    const {userList, fleet}  = this.props;

    const user = _.find(userList, item => item._id == fleet.manager);
    manager = user && user.username;

    return (
      <Modal
        title={'Add Ship'}
        style={styles.title}
        visible={true}
        okText={'save'}
        cancelText={'cancel'}
        onOk={this.handlerOK.bind(this)}
        onCancel={() => this.props.openModal(this.props.modal, false)}
      >
        <div style={styles.content}>
          <div>User:</div>
          <div style={{marginLeft: 10}}>
            <Select
              showSearch
              style={{width: 300}}
              optionFilterProp="children"
              defaultValue={manager}
              placeholder="click to change"
              onChange={this.handlerChange.bind(this)}
            >
              {
                userList.map(user => <Option key={user._id}>{`${user.username} - ${user.name.surname}`}</Option>)
              }
            </Select>
            {
              this.state.validate ? '' : <div style={styles.productPrompt}>{'manager is not null'}</div>
            }
          </div>
        </div>

      </Modal>
    );

  }

  handlerOK() {

    if (manager && manager != '') {

      if (this.props.saveManager) {
        const {modal} = this.props;
        const fleet = _.cloneDeep(this.props.fleet);
        fleet.manager = manager;
        this.props.saveManager(modal, fleet);
        manager = '';
        this.setState({validate: true});
      }

    } else {
      this.setState({validate: false});
    }
  }
}

export default SelectFleetManager;