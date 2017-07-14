/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';
import _ from 'lodash';
import {Form, Input, Button, Upload, Icon, Select} from 'antd';
const Option = Select.Option;

import SettingForm from '../../SettingForm';

class AGMInspection extends React.Component {

    getStyles() {

        const styles = {

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
        ports: React.PropTypes.array,
        onSubmit: React.PropTypes.func,
    };

    static defaultProps = {
        ports: [
            {
                _id: '11111',
                name: 'SHANGHAI'
            },
            {
                _id: '22222',
                name: 'QINGDAO'
            },
            {
                _id: '33333',
                name: 'BEIHAI'
            },
            {
                _id: '44444',
                name: 'ZHOUSHAN'
            }
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            nextPort: '',
            requires: '',
            fileList: []
        }
    }

    componentDidMount() {
        this.initState();
    }

    initState(formData = this.props.formData) {
        const config = this.getConfig(formData);
        this.setState({
            requires: config.remark,
            fileList: config.visitFiles,
            nextPort: config.nextPort
        })
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

    handlerChangePort(nextPort) {
        this.setState({nextPort})
    }

    renderPortElem(ports) {

        return (
            <Select
                showSearch
                defaultValue={this.state.nextPort}
                style={{width: 200}}
                placeholder="Select a port"
                optionFilterProp="children"
                onChange={this.handlerChangePort.bind(this)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {
                    ports.map(item => <Option value={item._id} key={item._id}>{item.name}</Option>)
                }
            </Select>
        )
    }

    getConfig(formData = this.props.formData) {
        const product = formData.products && formData.products.length ? formData.products[0] : undefined;
        return product ? product.config : {};
    }

    render() {

        const styles = this.getStyles();
        const {edit, ports} = this.props;
        const props = {
            isPadding: false
        };
        const nextPortObj = _.find(ports, item => item._id == this.state.nextPort);

        return (
            <SettingForm {...this.props} {...props}
                         onSubmit={this.handleSubmit.bind(this)}
            >
                <div style={_.merge({}, styles.nextPortContent)}>
                    <div style={_.merge({}, styles.common)}>Next Port:</div>
                    <div style={_.merge({}, styles.common, {marginLeft: 15})}>
                        {
                            edit ? this.renderPortElem(ports) : <span>{nextPortObj ? nextPortObj.name : ''}</span>
                        }
                    </div>
                </div>
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
        const formData = _.cloneDeep(nextProps.formData);
        if (this.props.formData !== formData || !nextProps.edit) {
            this.initState(formData);
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
        const {requires, nextPort, fileList} = this.state;
        const config = {
            remark: requires,
            visitFiles: fileList,
            nextPort
        };
        console.log('values', config);
        if (this.props.onSubmit) {
            const formData = _.cloneDeep(this.props.formData);
            formData.products[0].config = config;
            this.props.onSubmit(formData);
        }
    }
}

export default Form.create()(AGMInspection);