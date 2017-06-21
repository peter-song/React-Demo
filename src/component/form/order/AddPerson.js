/**
 * Created by songzhongkun on 2017/6/21.
 */

import React from 'react';
import {Icon} from 'antd';
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
        columns: React.PropTypes.array,
        dataSource: React.PropTypes.array,
        savePerson: React.PropTypes.func,
    };

    static defaultProps = {
        edit: true,
        columns: [
            {
                flex: '1',
                name: 'Full Name',
            },
            {
                flex: '1',
                name: 'Rank',
            },
            {
                flex: '1',
                name: 'Symptom',
            },
        ],
        dataSource: [],
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

    renderShowElem(styles, common) {
        return (
            <div>
                <div style={_.merge({}, styles.tableHead)}>
                    <div style={_.merge({}, styles.title, styles.borderRight, {width: 130})}>Full Name</div>
                    <div style={_.merge({}, styles.title, styles.borderRight, {width: 100})}>Rank</div>
                    <div style={_.merge({}, styles.title, {flex: '1'})}>Symptom</div>
                </div>
                {
                    this.state.dataSource.map((item, i) => {
                        return (
                            <div key={`person${i + 1}`} style={_.merge({}, styles.tableBody, styles.line)}>
                                <div style={_.merge({}, styles.common, styles.borderRight, {width: 130})}>
                                    {item.fullName}
                                </div>
                                <div style={_.merge({}, styles.common, styles.borderRight, {width: 100})}>
                                    {item.rank}
                                </div>
                                <div style={_.merge({}, styles.common, {flex: '1'})}>
                                    {item.symptom}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderEditElem(styles, common) {
        const {dataSource, isEdits} = this.state;
        return (
            <div>
                <div style={_.merge({}, styles.tableHead)}>
                    <div style={_.merge({}, styles.title, {width: 130})}>Full Name</div>
                    <div style={_.merge({}, styles.title, {width: 100})}>Rank</div>
                    <div style={_.merge({}, styles.title, {flex: '1'})}>Symptom</div>
                    <div style={_.merge({}, styles.title, {width: 90, textAlign: 'right', paddingRight: 10})}>
                        <Icon type="save" style={_.merge({}, styles.icon)}
                              onClick={this.handlerSavePerson.bind(this)}
                        />
                    </div>
                </div>
                {
                    dataSource.map((item, i) => {
                        return (
                            <div key={`person${i + 1}`} style={_.merge({}, styles.tableBody, styles.line)}>
                                <div style={_.merge({}, styles.common, {width: 130})}>{item.fullName}</div>
                                <div style={_.merge({}, styles.common, {width: 100})}>{item.rank}</div>
                                <div style={_.merge({}, styles.common, {flex: '1'})}>{item.symptom}</div>
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
                                        isEdits[i] ? '' :
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
        const {edit, common} = this.props;

        return (
            <div style={_.merge({}, styles.table)}>
                {edit ? this.renderEditElem(styles, common) : this.renderShowElem(styles, common)}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = nextProps.dataSource;
        if (this.props.dataSource !== dataSource || !nextProps.edit) {
            this.setState({
                dataSource: dataSource
            })
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
        const person = {
            fullName: 'name',
            rank: 'rank',
            symptom: 'symptom'
        };
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