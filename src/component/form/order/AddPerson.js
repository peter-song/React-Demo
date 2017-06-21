/**
 * Created by songzhongkun on 2017/6/21.
 */

import React from 'react';
import {Input, Icon} from 'antd';
import _ from 'lodash';

class AddPerson extends React.Component {

    getStyles() {
        const styles = {

            table: {
                border: '1px solid #D9D9D9',
                borderRadius: 4,
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
            }
        };

        return styles;
    }

    static propTypes = {
        edit: React.PropTypes.bool,
        dataSource: React.PropTypes.array,
        columns: React.PropTypes.array,
        savePerson: React.PropTypes.func,
    };

    static defaultProps = {
        edit: true,
        dataSource: [],
        columns: [],
        savePerson: () => {
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isEdits: []
        }
    }

    renderShowElem(styles, columns) {
        return (
            <div>
                <div style={_.merge({}, styles.tableHead)}>
                    {
                        columns.map((item, i) => {
                            return (
                                <div key={`column${i + 1}`}
                                     style={_.merge({}, styles.title, item.noRightBorder ? {} : styles.borderRight, item.fill ? {flex: '1'} : {width: item.width})}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.state.dataSource.map((person, i) => {
                        return (
                            <div key={`person${i + 1}`} style={_.merge({}, styles.tableBody, styles.line)}>
                                {
                                    columns.map((column, j) => {
                                        const key = _.camelCase(column.title);
                                        return (
                                            <div key={`column${i + 1}_${j + 1}`}
                                                 style={_.merge({}, styles.common, column.noRightBorder ? {} : styles.borderRight, column.fill ? {flex: '1'} : {width: column.width})}>
                                                { person[key] }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
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
                                        const key = _.camelCase(column.title);
                                        return (
                                            <div key={`column${i + 1}_${j + 1}`}
                                                 style={_.merge({}, styles.common, column.fill ? {flex: '1'} : {width: column.width})}>
                                                {
                                                    isEdit ? <Input value={person[key]} placeholder="click to edit"
                                                                    onChange={this.handlerChangeValue.bind(this, i, key)}/>
                                                        : person[key]
                                                }
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
                                    <Icon type="delete" style={_.merge({}, styles.icon)}
                                          onClick={this.handlerDeletePerson.bind(this, i)}
                                    />
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
            <div style={_.merge({}, styles.table)}>
                {edit ? this.renderEditElem(styles, columns) : this.renderShowElem(styles, columns)}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = nextProps.dataSource;
        if (this.props.dataSource !== dataSource || !nextProps.edit) {
            const isEdits = dataSource.map(item => false);
            this.setState({dataSource, isEdits})
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
        });

        dataSource.push(person);
        isEdits.push(true);
        this.setState({dataSource});
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
    }

    /**
     * 编辑person
     * @param i 编辑索引
     */
    handlerEditPerson(i) {
        const {isEdits} = this.state;
        isEdits[i] = true;
        this.setState({isEdits});
    }

    /**
     * 编辑fullName
     * @param e
     */
    handlerChangeValue(i, key, e) {
        const {dataSource} = this.state;
        const person = dataSource[i];
        person[key] = e.target.value;
        dataSource[i] = person;
        this.setState({dataSource})
    }

    /**
     * 保存person
     */
    handlerSavePerson() {
        let {dataSource, isEdits} = this.state;
        console.log(dataSource);

        isEdits = isEdits.map(() => false);
        this.setState({isEdits});

        if (this.props.savePerson) {
            this.props.savePerson(dataSource);
        }
    }
}

export default AddPerson;