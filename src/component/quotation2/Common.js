/**
 * Created by songzhongkun on 2017/5/12.
 */

import React from 'react';

export default class QuotationDetail extends React.Component {

    getStyles() {

        let styles = {

            quotationCommon: {
                border: '1px solid #c9ccd9'
            },

            title: {
                width: '20%',
                background: '#E9E9E9',
                padding: '12px 0',
                float: 'left',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            content: {
                width: '20%',
                background: '#FFFFFF',
                padding: '12px 0',
                float: 'left',
                textAlign: 'center',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    render() {
        let styles = this.getStyles();

        let common = this.props.info;
        return (
            <div style={styles.quotationCommon}>
                <div className="title">
                    <span style={styles.title}>Vessel</span>
                    <span style={styles.title}>ETA/Sea Trail Date</span>
                    <span style={styles.title}>Port</span>
                    <span style={styles.title}>Service Type</span>
                    <span style={styles.title}>Rate</span>
                    <div className="clear"></div>
                </div>
                <div className="content2">
                    <span style={styles.content}>{common.vessel}</span>
                    <span style={styles.content}>{common.date}</span>
                    <span style={styles.content}>{common.port}</span>
                    <span style={styles.content}>{common.serviceType}</span>
                    <span style={styles.content}>{common.rate}</span>
                </div>
                <div style={styles.clear}></div>
            </div>
        )
    }

}