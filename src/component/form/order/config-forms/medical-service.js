/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import _ from 'lodash';
import {Form, Input, Button, Upload, Icon} from 'antd';

import SettingForm from '../../SettingForm';
import AddPerson from '../AddPerson';

class MedicalService extends React.Component {

    getStyles() {

        const styles = {

            title: {
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                padding: '20px 0 0 16px'
            },

            documents: {
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
            },

            common: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            nextPortContent: {
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
            },

            downloadContent: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },

            uploadContent: {
                display: 'flex',
            },

            requireContent: {
                padding: 24,
                display: 'flex',
            },

            line: {
                borderTop: '1px solid #D9D9D9'
            },

            left: {
                float: 'left'
            },

            right: {
                float: 'right'
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static propTypes = {
        edit: React.PropTypes.bool,
        form: React.PropTypes.object,
        formData: React.PropTypes.object,
        onSubmit: React.PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            requires: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'http://www.baidu.com/xxx.png',
            }]
        }
    }

    renderPersonElem() {
        const props = {
            edit: this.props.edit,
            savePerson: this.handlerSavePersons.bind(this)
        };

        return (
            <div style={{padding: 20}}>
                <AddPerson {...props}/>
            </div>
        )
    }

    renderFileElem(styles) {

        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange.bind(this),
        };

        return (
            <div style={_.merge({}, styles.line)}>
                <div style={_.merge({}, {padding: '16px 20px'})}>
                    <div style={_.merge({}, styles.downloadContent)}>
                        <div style={_.merge({}, styles.documents)}>Required Documents</div>
                        <Button disabled={!this.props.edit}><Icon type="download"/>Download All</Button>
                    </div>
                    <div style={_.merge({}, styles.common, {marginTop: 10})}>
                        Last 20 Ports of Call/Ship Particular
                    </div>
                    <div style={_.merge({}, styles.uploadContent, {marginTop: 10})}>
                        <Upload {...props} fileList={this.state.fileList}>
                            <Button><Icon type="upload"/>Upload</Button>
                        </Upload>
                        <div style={_.merge({}, {marginLeft: 10, marginTop: 10})}>
                            Allowed file：.rar .zip .doc .docx .pdf .jpg...
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        const styles = this.getStyles();
        const {edit} = this.props;
        const props = {
            isPadding: false
        };

        return (
            <SettingForm {...this.props} {...props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <div style={styles.title}>Personal Information</div>
                {this.renderPersonElem()}
                {this.renderFileElem(styles)}
                <div style={_.merge({}, styles.line, styles.requireContent)}>
                    <div style={_.merge({}, styles.common)}>Requires:</div>
                    <div style={_.merge({}, styles.common, {flex: '1', marginLeft: 15})}>
                        {
                            edit ? <Input type="textarea" rows={6} placeholder="Please write your requirements"
                                          value={this.state.requires} onChange={this.handlerChangeRequires.bind(this)}/>
                                : <span>{this.state.requires}</span>
                        }
                    </div>
                </div>
            </SettingForm>
        );
    }

    componentWillReceiveProps(nextProps) {
        const formData = nextProps.formData;
        if (this.props.formData !== formData || !nextProps.edit) {
            this.setState({
                requires: formData.requires,
                fileList: formData.files,
                persons: formData.persons
            })
        }
    }

    componentWillUnmount() {
        this.state = {
            requires: '',
            fileList: []
        }
    }

    /**
     * 输入requires
     * @param e
     */
    handlerChangeRequires(e) {
        this.setState({
            requires: e.target.value
        })
    }

    /**
     * 选择上传文件
     * @param info
     */
    handleChange(info) {
        console.log(info);
        let fileList = info.fileList;

        fileList = fileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            } else {
                file.url = `http://www.baidu.com/${file.name}`
            }
            return file;
        });

        fileList = fileList.filter((file) => {
            if (file.response) {
                return file.response.status === 'success';
            }
            return true;
        });

        this.setState({fileList});
    }

    /**
     * 保存
     */
    handleSubmit() {
        const {requires, fileList, persons} = this.state;
        const files = fileList.map(item => item.url);
        const formData = {
            requires,
            files,
            persons
        };

        if (this.props.onSubmit) {
            this.props.onSubmit(formData);
        }
    }

    /**
     * 保存人员回调
     * @param _persons
     */
    handlerSavePersons(persons) {
        this.setState({persons})
    }
}

export default Form.create()(MedicalService);