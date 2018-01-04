/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Modal, Select, Icon} from 'antd';
const Option = Select.Option;

class DeleteFleetModal extends React.Component {

  getStyles() {

    const styles = {

      regularFont: {
        fontWeight: 400,
        fontSize: 12,
        color: 'rgba(0,0,0,0.65)',
      },

      title: {
        fontWeight: 400,
        fontSize: 18,
        color: 'rgba(0,0,0,0.75)',
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      productPrompt: {
        color: '#f04134',
        fontWeight: 400,
        fontSize: 12,
        marginLeft: 40,
      },

      tagContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 0',
      },

      tag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '45%',
        background: '#F7F7F7',
        border: '1px solid #D9D9D9',
        borderRadius: 4,
        padding: 5,
        marginTop: 10,
      },

    };

    return styles;
  }

  static propTypes = {
    fleet: PropTypes.object,
    modal: PropTypes.string,
    openModal: PropTypes.func,
    saveShips: PropTypes.func,
    shipList: PropTypes.array,
  };

  static defaultProps = {

    shipList: [
      {
        _id: '59717deddebe89ca0803c278',
        _imo: '1601122',
        name: 'xiaoxin',
      },
      {
        _id: '59705364969b04f652fc843c',
        _imo: '1233456',
        name: 'qweqwe',
      },
      {
        _id: '59705315969b04f652fc843b',
        _imo: '4323456',
        name: '123123',
      },
      {
        _id: '596efbac969b04f652fc843a',
        _imo: '1161112',
        name: 'testtest',
      },
      {
        _id: '57c3c5393fa4f708006f8f6c',
        _imo: '1111112',
        name: 'test0829',
      },
      {
        _id: '582c03ade03d5cf170c3e281',
        _imo: '1111123',
        name: 'xddd5',
      }, {
        _id: '595cb903b92ec335b60c8266',
        _imo: '1025212',
        name: 'star',
      },
      {
        _id: '597079c20ff8fe79f59f1a41',
        _imo: '1038103',
        name: name,
      },
      {
        _id: '58410f1c0e90a787ba578ec4',
        _imo: '1100092',
        name: '222222',
      },
      {
        _id: '5837913c866dbac10f46b6f2',
        _imo: '1010101',
        name: 'vx1010',
      },
      {
        _id: '57c4e4bc3fa4f708006f8fda',
        _imo: '1111111',
        name: '11111',
      },
      {
        _id: '593a2c26da63d0c01dc7406f',
        _imo: '1100090',
        name: 'testname',
      },
      {
        _id: '5841208f8cc3d5a8d580e876',
        _imo: '1100102',
        name: '11111',
      },
      {
        _id: '595345762b76c6614ea7faa3',
        _imo: '3123435',
        name: 'test',
      }, {
        _id: '58fef1c967a2297e2fb54b8c',
        _imo: '1601127',
        name: 'jinyonghao',
      }, {
        _id: '5941f7adee72f342afa54b1d',
        _imo: '1025216',
        name: 'develop',
      }, {
        _id: '58525c7fcd096e6e269a3251',
        _imo: '1121212',
        name: 'fakeship1121',
      },
      {
        _id: '584124e9219f9299dd9a82fc',
        _imo: '1100112',
        name: '11111',
      }, {
        _id: '5941037c0124a71e80caa402',
        _imo: '1010102',
        name: 'www',
      },
    ],

  };

  state = {
    validate: true,
    changedShips: [],
  };

  renderChangedTagElem(styles, ship, i) {

    return (
      <div key={`tag_${ship}`} style={_.merge({}, styles.tag, i % 2 == 0 ? {} : {marginLeft: 10})}>
        <div style={styles.regularFont}>1001535-MOON LADY SHIP</div>
        <Icon
          type="close"
          style={{cursor: 'pointer'}}
          onClick={this.handlerDelete.bind(this, i)}
        />
      </div>
    );

  }

  render() {

    const styles = this.getStyles();

    const {shipList}  = this.props;

    const {changedShips} = this.state;

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
        <div style={{padding: 20}}>
          <div style={styles.content}>
            <div>IMO:</div>
            <div style={{marginLeft: 10}}>
              <Select
                style={{width: 300}}
                placeholder="click to change"
                onChange={this.handlerChange.bind(this)}
              >
                {shipList.map(ship => <Option key={ship._id}>{`${ship.name} - ${ship.imo}`}</Option>)}
              </Select>
            </div>
          </div>
          {
            this.state.validate ? '' : <div style={styles.productPrompt}>{'ship is not null'}</div>
          }
          <div style={styles.tagContent}>
            {changedShips.map((ship, i) => this.renderChangedTagElem(styles, ship, i))}
          </div>
        </div>

      </Modal>
    );

  }

  handlerChange(_ship) {

    const {changedShips} = this.state;

    const index = _.findIndex(changedShips, ship => ship == _ship);

    if (index == -1) {
      changedShips.push(_ship);
      this.setState({changedShips});
    }
  }

  handlerDelete(i) {

    const {changedShips} = this.state;

    changedShips.splice(i, 1);

    this.setState({changedShips});
  }

  handlerOK() {

    const {changedShips} = this.state;

    if (changedShips.length) {

      if (this.props.saveShips) {
        const {modal} = this.props;
        const fleet = _.cloneDeep(this.props.fleet);
        fleet.ships = changedShips;
        this.props.saveShips(modal, fleet);
        this.setState({validate: true});
      }

    } else {
      this.setState({validate: false});
    }
  }

}

export default DeleteFleetModal;