/**
 * Created by songzhongkun on 2017/6/21.
 */

import React from 'react';
import {Input, Icon, Popconfirm} from 'antd';
import _ from 'lodash';

class AddPerson extends React.Component {

    getStyles() {
        const styles = {

            titleInfoShow: {
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            titleInfoEdit: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            table: {
                border: '1px solid #D9D9D9',
                borderRadius: 4,
                marginTop: 16,
            },

            tableHead: {
                display: 'flex',
                background: '#F7F7F7',
            },

            tableBody: {
                display: 'flex'
            },

            addContent: {
                display: 'flex',
                padding: '12px 8px',
                alignItems: 'center',
                width: 150,
                cursor: 'pointer',
            },

            title: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
                padding: '12px 8px',
            },

            common: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                padding: '12px 8px',
                display: 'flex',
                alignItems: 'center',
            },

            line: {
                borderTop: '1px solid #D9D9D9'
            },

            borderRight: {
                borderRight: '1px solid #D9D9D9'
            },

            icon: {
                cursor: 'pointer'
            },

            addFont: {
                fontWeight: 400,
                fontSize: 12,
                color: '#4990E2',
                marginLeft: 12
            },

            validatePrompt: {
                color: '#f04134',
                fontWeight: 400,
                fontSize: 12,
            },
        };

        return styles;
    }

    static propTypes = {
        edit: React.PropTypes.bool,
        dataSource: React.PropTypes.array,
        columns: React.PropTypes.array,
        savePerson: React.PropTypes.func,
        saveUpdate: React.PropTypes.func,
    };

    static defaultProps = {
        edit: true,
        dataSource: [],
        columns: [],
        savePerson: () => {
            console.log('click save person')
        },
        saveUpdate: () => {
            console.log('click save update')
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isEdits: []
        }
    }

    componentDidMount() {
        this.initState();
    }

    initState(dataSource = this.props.dataSource) {
        this.setState({
            dataSource,
            isEdits: dataSource.map(item => false)
        })
    }

    renderShowElem(styles, columns) {
        const {dataSource} = this.state;
        return (
            <div>
                <div style={_.merge({}, styles.tableHead)}>
                    {
                        columns.map((item, i) => {
                            return (
                                <div key={`column${i + 1}`}
                                     style={_.merge({}, styles.title, i == columns.length - 1 ? {} : styles.borderRight, item.fill ? {flex: '1'} : {width: item.width})}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    dataSource.length ? dataSource.map((person, i) => {
                            return (
                                <div key={`person${i + 1}`} style={_.merge({}, styles.tableBody, styles.line)}>
                                    {
                                        columns.map((column, j) => {
                                            const key = _.camelCase(column.title);
                                            return (
                                                <div key={`column${i + 1}_${j + 1}`}
                                                     style={_.merge({}, styles.common, j == columns.length - 1? {} : styles.borderRight, column.fill ? {flex: '1'} : {width: column.width})}>
                                                    { person[key] }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }) :
                        <div style={_.merge({}, styles.common, styles.line, {justifyContent: 'center'})}>no data</div>
                }
            </div>
        )
    }

    renderEditElem(styles, columns) {
        const {dataSource, isEdits} = this.state;
        return (
            <div>
                <div style={_.merge({}, styles.tableHead)}>
                    {
                        columns.map((item, i) => {
                            return (
                                <div key={`column${i + 1}`}
                                     style={_.merge({}, styles.title, item.fill ? {flex: '1'} : {width: item.width})}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                    <div style={_.merge({}, styles.title, {width: 90, textAlign: 'right', paddingRight: 10})}>
                        <Icon type="save" style={_.merge({}, styles.icon)}
                              onClick={this.handlerSavePerson.bind(this)}
                        />
                    </div>
                </div>
                {
                    dataSource.map((person, i) => {
                        const isEdit = isEdits[i];
                        return (
                            <div key={`person${i + 1}`} style={_.merge({}, styles.tableBody, styles.line)}>
                                {
                                    columns.map((column, j) => {
                                        const name = _.camelCase(column.title);
                                        const validateName = `validate${name.charAt(0).toUpperCase()}${name.substring(1)}`
                                        return (
                                            <div key={`column${i + 1}_${j + 1}`}
                                                 style={_.merge({}, styles.common, column.fill ? {flex: '1'} : {width: column.width})}>
                                                <div
                                                    style={_.merge({}, column.fill ? {flex: '1'} : {width: column.width})}>
                                                    {
                                                        isEdit ? <Input value={person[name]} placeholder="click to edit"
                                                                        onChange={this.handlerChangeValue.bind(this, i, name)}/>
                                                            : person[name]
                                                    }
                                                    {
                                                        !isEdit || person[validateName] == undefined || person[validateName] ? '' :
                                                            <div
                                                                style={_.merge({}, styles.validatePrompt, {marginRight: 10})}>
                                                                {`cannot be empty`}
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div style={_.merge({}, styles.common, {
                                    width: 90,
                                    textAlign: 'right',
                                    justifyContent: 'flex-end',
                                    paddingRight: 10
                                })}>
                                    <Popconfirm placement="topLeft"
                                                title={`Are you sure delete this item?`}
                                                onConfirm={this.handlerDeletePerson.bind(this, i)}
                                                okText="Yes"
                                                cancelText="No"
                                    >
                                        <Icon type="delete" style={_.merge({}, styles.icon)}/>
                                    </Popconfirm>
                                    {
                                        isEdit ? '' :
                                            <Icon type="edit" style={_.merge({}, styles.icon, {marginLeft: 10})}
                                                  onClick={this.handlerEditPerson.bind(this, i)}/>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div style={_.merge({}, styles.line)}>
                    <div style={_.merge({}, styles.addContent)} onClick={this.handlerAddPerson.bind(this)}>
                        <Icon type="user-add" style={_.merge({}, styles.icon)}/>
                        <div style={styles.addFont}>Add Person</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const styles = this.getStyles();
        const {edit, columns} = this.props;

        return (
            <div>
                <div style={_.merge({}, edit ? styles.titleInfoEdit : styles.titleInfoShow)}>Personal Information</div>
                <div style={_.merge({}, styles.table)}>
                    {edit ? this.renderEditElem(styles, columns) : this.renderShowElem(styles, columns)}
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = _.cloneDeep(nextProps.dataSource);
        if ((this.props.dataSource !== dataSource && this.props.dataSource === this.state.dataSource) || !nextProps.edit) {
            this.initState(dataSource);
        }
    }

    componentWillUnmount() {
        this.resetState();
    }

    resetState() {
        this.setState({dataSource: [], isEdits: []})
    }

    /**
     * 添加person
     */
    handlerAddPerson() {
        const {dataSource, isEdits} = this.state;
        const {columns} = this.props;

        const person = {};
        columns.forEach(item => {
            const name = _.camelCase(item.title);
            person[name] = '';
            person[`validate${name.charAt(0).toUpperCase()}${name.substring(1)}`] = true;
        });

        dataSource.push(person);
        isEdits.push(true);
        this.setState({dataSource});
        this.props.saveUpdate(false);
    }

    /**
     * 删除person
     * @param i 删除索引
     */
    handlerDeletePerson(i) {
        const {dataSource, isEdits} = this.state;
        dataSource.splice(i, 1);
        isEdits.splice(i, 1);
        this.setState({dataSource, isEdits});
        this.props.saveUpdate(false);
    }

    /**
     * 编辑person
     * @param i 编辑索引
     */
    handlerEditPerson(i) {
        const {isEdits} = this.state;
        isEdits[i] = true;
        this.setState({isEdits});
        this.props.saveUpdate(false);
    }

    /**
     * 编辑fullName
     * @param e
     */
    handlerChangeValue(i, name, e) {
        const value = e.target.value;
        const {dataSource} = this.state;
        const person = dataSource[i];
        person[name] = value;
        if (value != '') {
            const validateName = `validate${name.charAt(0).toUpperCase()}${name.substring(1)}`
            person[validateName] = true;
        }
        dataSource[i] = person;
        this.setState({dataSource})
    }

    /**
     * 保存person
     */
    handlerSavePerson() {
        let {dataSource, isEdits} = this.state;
        const {columns} = this.props;

        let isValidate = true;
        dataSource.forEach(item => {
            columns.forEach(column => {
                const name = _.camelCase(column.title);
                const validateName = `validate${name.charAt(0).toUpperCase()}${name.substring(1)}`
                if (item[name]) {
                    item[validateName] = true;
                } else {
                    item[validateName] = false;
                    isValidate = false;
                }
            })
        });

        if (isValidate && this.props.savePerson) {
            isEdits = isEdits.map(() => false);
            const newDataSource = [];
            dataSource.forEach(item => {
                const newItem = {};
                columns.forEach(column => {
                    const name = _.camelCase(column.title);
                    newItem[name] = item[name];
                });
                newDataSource.push(newItem);
            });

            this.props.savePerson(newDataSource);
            this.props.saveUpdate(true);
        }
        this.setState({isEdits, dataSource});
    }
}

export default AddPerson;