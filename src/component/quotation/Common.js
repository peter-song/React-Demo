/**
 * Created by songzhongkun on 2017/5/15.
 */
import React from 'react';
import {Table} from 'antd';

export default class Common extends React.Component {

    getStyles() {

        let styles = {
            content: {
                marginTop: 20
            }
        };

        return styles;
    }

    render() {
        const styles = this.getStyles();

        const columns = [
            {
                key: 'vessel',
                title: 'Vessel',
                dataIndex: 'vessel',
                width: 20,
            },
            {
                key: 'date',
                title: 'ETA/Sea Trail Date',
                dataIndex: 'date',
                width: 20,
            },
            {
                key: 'port',
                title: 'Port',
                dataIndex: 'port',
                width: 20,
            },
            {
                key: 'type',
                title: 'Service Type',
                dataIndex: 'serviceType',
                width: 20,
            },
            {
                key: 'rate',
                title: 'Rate',
                dataIndex: 'rate',
                width: 20,
            }
        ];

        return (
            <div style={styles.content}>
                <Table bordered
                       columns={columns}
                       dataSource={this.props.data}
                       pagination={false}/>
            </div>
        )
    }
}