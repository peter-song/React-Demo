/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Input, Button, Modal} from 'antd';
const confirm = Modal.confirm;

import AddFleetModal from '../../component/fleet/AddFleetModal';
import AddShipsModal from '../../component/fleet/AddShipsModal';
import SelectFleetManager from '../../component/fleet/SelectFleetManager';
const modal = {
    addFleet: 'addModalIsOpen',
    addShips: 'addShipsModalIsOpen',
    selectManager: 'selectManagerModalIsOpen'
};

class Fleet extends React.Component {

    getStyles() {
        const styles = {

            regularFont: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            boldFont: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
            },

            linkFont: {
                fontWeight: 400,
                fontSize: 14,
                color: '#4990e2',
                cursor: 'pointer',
            },

            content: {
                padding: 17,
            },

            searchContent: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },

            searchInput: {
                width: 220
            },

            tableContent: {
                border: '1px solid #e9e9e9',
                marginTop: 17,
            },

            tableRow: {
                display: 'flex',
                // alignItems: 'stretch',
            },

            tableColumn: {
                display: 'flex',
                alignItems: 'center',
                padding: 10,
            },

            tableItem: {
                display: 'flex',
                alignItems: 'stretch',
                borderTop: '1px solid #e9e9e9',
            },

            borderTop: {
                borderTop: '1px solid #e9e9e9',
            },

            borderRight: {
                borderRight: '1px solid #e9e9e9',
            },

        };

        return styles;
    }


    static propTypes = {
        columns: PropTypes.array,
        dataSource: PropTypes.array,
    };

    static defaultProps = {
        columns: [
            {
                title: 'Fleet Name',
                dataIndex: 'name',
                width: 250,
            },
            {
                title: 'Number of Ships',
                dataIndex: 'numberOfShips',
                width: 130,
            },
            {
                title: 'Fleet Manager',
                dataIndex: 'fleetManager',
                fill: true
            },
            {
                title: 'Setting',
                width: 285,
            },
        ],
        fleetList: [
            {
                _id: '1',
                name: 'My Fleet 1',
                numberOfShips: '1',
                fleetManager: 'Peter Song',
                ships: ['59717deddebe89ca0803c278', '59705364969b04f652fc843c'],
                manager: '5680a94077c818aa454e550b'
            },
            {
                _id: '2',
                name: 'My Fleet 2',
                numberOfShips: '2',
                fleetManager: 'Muhammad Summy ASHOK Muhamma Abudl',
                ships: ['59705315969b04f652fc843b', '596efbac969b04f652fc843a'],
                manager: '5680a89b77c818aa454e5505'
            },
            {
                _id: '3',
                name: 'My Fleet 3',
                numberOfShips: '3',
                fleetManager: 'Peter Song',
            },
            {
                _id: '4',
                name: 'My Fleet 4',
                numberOfShips: '4',
                fleetManager: 'Muhammad Summy ASHOK Muhamma Abudl',
            },
            {
                _id: '5',
                name: 'My Fleet 5',
                numberOfShips: '5',
                fleetManager: 'Peter Song',
            },
            {
                _id: '6',
                name: 'My Fleet 6',
                numberOfShips: '6',
                fleetManager: 'Muhammad Summy ASHOK Muhamma Abudl',
            },
            {
                _id: '7',
                name: 'My Fleet 7',
                numberOfShips: '7',
                fleetManager: 'Peter Song',
            },
            {
                _id: '8',
                name: 'My Fleet 8',
                numberOfShips: '8',
                fleetManager: 'Muhammad Summy ASHOK Muhamma Abudl',
            },
            {
                _id: '9',
                name: 'My Fleet 9',
                numberOfShips: '9',
                fleetManager: 'Peter Song',
            },
            {
                _id: '10',
                name: 'My Fleet 10',
                numberOfShips: '10',
                fleetManager: 'Muhammad Summy ASHOK Muhamma Abudl',
            },
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            addModalIsOpen: false,
            addShipsModalIsOpen: false,
            selectManagerModalIsOpen: false,
            fleet: {}
        }
    }

    renderSearchElem(styles) {
        return (
            <div style={styles.searchContent}>
                <div style={_.merge({}, styles.regularFont)}>Fleet Name:</div>
                <Input style={_.merge({}, styles.searchInput, {marginLeft: 10})}/>
                <div style={_.merge({}, styles.regularFont, {marginLeft: 10})}>Fleet Manager:</div>
                <Input style={_.merge({}, styles.searchInput, {marginLeft: 10})}/>
                <Button style={{marginLeft: 10}}>Search</Button>
                <Button style={{marginLeft: 5}}>Reset</Button>
            </div>
        )
    }

    renderTableElem(styles) {

        const {columns, fleetList} = this.props;

        return (
            <div style={styles.tableContent}>
                <div style={_.merge({}, styles.tableRow, styles.boldFont, {background: '#F7F7F7'})}>
                    {
                        columns.map((column, i) => {
                            return (
                                <div key={'title' + (i + 1)}
                                     style={_.merge({}, styles.tableColumn, column.fill ? {flex: '1'} : {width: column.width}, i != columns.length - 1 ? styles.borderRight : {})}>
                                    {column.title}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    fleetList.map((dataItem, i) => {
                        return (
                            <div key={'dataItem' + (i + 1)}
                                 style={_.merge({}, styles.tableRow, styles.regularFont, styles.borderTop)}>
                                <div style={_.merge({}, styles.tableColumn, {width: 250}, styles.borderRight)}>
                                    {dataItem.name}
                                </div>
                                <div style={_.merge({}, styles.tableColumn, {
                                    width: 130,
                                    justifyContent: 'flex-end'
                                }, styles.borderRight)}>
                                    {dataItem.numberOfShips}
                                </div>
                                <div style={_.merge({}, styles.tableColumn, {flex: '1'}, styles.borderRight)}>
                                    {dataItem.fleetManager}
                                </div>
                                <div style={_.merge({}, styles.tableColumn, {
                                    width: 285,
                                    justifyContent: 'space-between'
                                })}>
                                    <div style={styles.linkFont}
                                         onClick={this.showConfirm.bind(this, i)}>
                                        Delete
                                    </div>
                                    <div style={styles.linkFont}
                                         onClick={this.handlerOpenModal.bind(this, modal.addFleet, true, i)}>
                                        Edit
                                    </div>
                                    <div style={styles.linkFont}
                                         onClick={this.handlerOpenModal.bind(this, modal.addShips, true, i)}>
                                        Add Ships
                                    </div>
                                    <div style={styles.linkFont}
                                         onClick={this.handlerOpenModal.bind(this, modal.selectManager, true, i)}>
                                        Select Manager
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    this.state.addModalIsOpen ?
                        <AddFleetModal
                            fleet={this.state.fleet}
                            modal={modal.addFleet}
                            openModal={this.handlerOpenModal.bind(this)}
                            saveFleet={this.handlerSaveFleet.bind(this)}
                        /> : ''
                }
                {
                    this.state.addShipsModalIsOpen ?
                        <AddShipsModal
                            fleet={this.state.fleet}
                            modal={modal.addShips}
                            openModal={this.handlerOpenModal.bind(this)}
                            saveShips={this.handlerSaveShips.bind(this)}
                        /> : ''
                }
                {
                    this.state.selectManagerModalIsOpen ?
                        <SelectFleetManager
                            fleet={this.state.fleet}
                            modal={modal.selectManager}
                            openModal={this.handlerOpenModal.bind(this)}
                            saveManager={this.handlerSaveManager.bind(this)}
                        /> : ''
                }

            </div>
        )
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.content}>
                {this.renderSearchElem(styles)}
                {this.renderTableElem(styles)}
            </div>
        )
    }

    handlerOpenModal(type, isOpen = false, i = -1) {
        let fleet = {};
        if (isOpen) {
            const fleetList = this.props.fleetList;
            fleet = fleetList && fleetList.length ? fleetList[i] : {};
        }
        this.setState({fleet, [type]: isOpen})
    }

    handlerSaveFleet(type, values) {
        console.log('values', values);

        this.handlerOpenModal(type)
    }

    handlerSaveShips(type, values) {
        console.log('values', values);

        this.handlerOpenModal(type)
    }

    handlerSaveManager(type, values) {
        console.log('values', values);

        this.handlerOpenModal(type)
    }

    handlerDeleteFleet(_id) {
        console.log('_id', _id);

        this.showWarning();
    }

    showConfirm(info) {
        const self = this;
        confirm({
            title: 'Delete Fleet',
            content: 'Are you sure you want to delete it?',
            okText: 'Yes',
            cancelText: 'NO',
            onOk() {
                self.handlerDeleteFleet(info);
            }
        });
    }

    showWarning() {
        Modal.warning({
            title: 'Cannot Delete',
            content: 'If you want to delete this fleet , please delete all of ships in this fleet frist.',
            okText: 'OK',
        });
    }

}

export default Fleet