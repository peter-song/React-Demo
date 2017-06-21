/**
 * Created by songzhongkun on 2017/6/21.
 */
import React from 'react';
import _ from 'lodash';
import {Button, Upload, Icon} from 'antd';

export default class UploadDownloadFile extends React.Component {

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

            downloadContent: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },

            uploadContent: {
                display: 'flex',
            },

        };

        return styles;
    }

    static propTypes = {
        edit: React.PropTypes.bool,
        action: React.PropTypes.string,
        prompt: React.PropTypes.string,
        downloadFile: React.PropTypes.func,
        uploadFile: React.PropTypes.func,
    };

    static defaultProps = {
        prompt: 'Default',
        downloadFile: () => {
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'http://www.baidu.com/xxx.png',
            }]
        }
    }

    render() {

        const styles = this.getStyles();
        const props = {
            action: this.props.action,
            onChange: this.handleChangeFile.bind(this),
        };

        return (
            <div style={_.merge({}, {padding: '16px 20px'})}>
                <div style={_.merge({}, styles.downloadContent)}>
                    <div style={_.merge({}, styles.documents)}>Required Documents</div>
                    <Button disabled={this.props.edit} onClick={() => this.props.downloadFile()}>
                        <Icon type="download"/>Download All
                    </Button>
                </div>
                <div style={_.merge({}, styles.common, {marginTop: 10})}>
                    {this.props.prompt}
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
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.edit);
    }

    /**
     * 选择上传文件
     * @param info
     */
    handleChangeFile(info) {
        let fileList = info.fileList;
        console.log('fileList', fileList.length);

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

        // const files = this.state.fileList.map(item => item.name);
        /*if (this.props.uploadFile) {
            this.props.uploadFile(files);
        }*/
    }
}