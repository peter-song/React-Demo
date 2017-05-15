/**
 * Created by songzhongkun on 2017/5/15.
 */
import React from 'react';
import {Table, Badge, Icon} from 'antd';

import './statement.css';

export default class Statement extends React.Component {

    getStyles() {

        let styles = {
            content: {
                marginTop: 20
            }
        };

        return styles;
    }

    render() {

        const detail = this.props.detail;

        const styles = this.getStyles();

        const columns = [{
            title: 'V/No. Cost Item',
            dataIndex: 'title',
            key: 'title',
            width: '25%',
        }, {
            title: 'Remarks',
            dataIndex: 'remark',
            key: 'remark',
            width: '45%',
        }, {
            title: 'Amount（RMB）',
            dataIndex: 'RMB',
            key: 'RMB',
            width: '10%',
        }, {
            title: '=（USD）',
            dataIndex: 'USD',
            key: 'USD',
            width: '10%',
        }];

        const contents = [];
        detail.items.map((item, i) => {
            const subContents = [];
            item.subDetail.map((sub_item, j) => {
                const subContent = {
                    key: `content_${i}_${j}`,
                    title: sub_item.title,
                    remark: sub_item.remark,
                    RMB: sub_item.RMB,
                    USD: sub_item.USD
                };
                subContents.push(subContent);
            });

            const content = {
                key: `content_${i}`,
                title: item.title,
                RMB: item.RMB,
                USD: item.USD,
                children: subContents
            };
            contents.push(content);
        });

        contents.push({
            key: 'total',
            title: 'Total',
            RMB: detail.total.RMB,
            USD: detail.total.USD
        });

        const pagination = {
            total: 50,
            showSizeChanger: true,
            showQuickJumper: true,
            defaultCurrent: 1,
            onChange(current) {
                console.log(current)
            }
        };

        return (
            <div style={styles.content}>
                <Table columns={columns}
                       pagination={pagination}
                       dataSource={contents}
                />
            </div>
        )
    }
}