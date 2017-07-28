/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Icon} from 'antd';

import UploadParticular from '../../component/ship/UploadParticular';

class Ship extends React.Component {

    getStyles() {
        const styles = {

            verticalCenter: {
                display: 'flex',
                alignItems: 'center',
            },

            regularFont: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
            },

            boldFont: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.75)',
            },

            blueFont: {
                fontWeight: 400,
                fontSize: 14,
                color: '#4990e2',
            },

            content: {
                padding: 20,
            },

            commonTable: {
                marginTop: 24,
                border: '1px solid #D9D9D9',
            },

            commonTableTitle: {
                fontWeight: 400,
                fontSize: 16,
                color: 'rgba(0,0,0,0.75)',
                padding: '11px 16px',
                background: '#F7F7F7',
            },

            commonTableContent: {
                padding: 20,
            },

            icon: {
                color: '#f5a623'
            }
        };

        return styles;
    }


    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            shipBasicData: _.fill(new Array(7), false),
            shipCompanyInformation: _.fill(new Array(6), false),
            shipContactDetail: _.fill(new Array(5), false),
            shipBuilderInformation: _.fill(new Array(6), false),
            shipMainData: _.fill(new Array(5), false),
            shipDisplacementData: _.fill(new Array(3), false),
            shipEngineData: _.fill(new Array(4), false),
            shipPropellerData: _.fill(new Array(1), false),
            shipSpeedData: _.fill(new Array(2), false),
        }
    }

    renderUploadElem() {
        const props = {
            hasUpload: true
        };

        return (
            <UploadParticular {...props}/>
        )
    }

    renderItemElem(title, item, star = false, width = '48%', index, maxIndex = 1, leftWidth = 100, rightWidth = 100) {
        const styles = this.getStyles();
        title = _.camelCase(title);
        const isShows = this.state[title] ? this.state[title] : [];
        return (
            <div key={ title + '_' + (index + 1)}
                 style={_.merge({}, styles.verticalCenter, {width}, index > maxIndex ? {marginTop: 8} : {})}
                 onMouseOver={this.handlerMouse.bind(this, title, index, true)}
                 onMouseLeave={this.handlerMouse.bind(this, title, index, false)}
            >
                <div style={_.merge({}, styles.regularFont, styles.verticalCenter)}>
                    <div style={{width: index % 2 == 0 || maxIndex == 0 ? leftWidth : rightWidth, textAlign: 'right'}}>
                        {star ? <Icon type='star' style={styles.icon}/> : ''}
                        <span style={_.merge({}, star ? {marginLeft: 8} : {})}>{item.key}:</span>
                    </div>
                    <div style={_.merge({}, styles.verticalCenter, {marginLeft: 16})}>
                        {`${item.value} ${item.unit ? item.unit : ''}`}
                    </div>
                </div>
                {
                    isShows[index] ?
                        <div style={_.merge({}, styles.blueFont, {marginLeft: 20, cursor: 'pointer'})}
                             onClick={item => console.log(item)}
                        >Revise</div> : ''
                }
            </div>
        )
    }

    renderTableElem(title, data, star, width, maxIndex, leftWidth, rightWidth) {
        const styles = this.getStyles();
        return (
            <div style={styles.commonTable}>
                <div style={styles.commonTableTitle}>{title}</div>
                <div style={_.merge({}, styles.commonTableContent, styles.verticalCenter, {flexWrap: 'wrap'})}>
                    {data.map((item, index) => this.renderItemElem(title, item, star, width, index, maxIndex, leftWidth, rightWidth))}
                </div>
            </div>
        )
    }

    renderShipDetailedDetailElem(title, data) {
        const styles = this.getStyles();
        return (
            <div style={styles.commonTable}>
                <div style={styles.commonTableTitle}>{title}</div>
                <div style={styles.commonTableContent}>
                    {
                        data.map((item, i) => {
                            let leftWidth = 100, rightWidth = 100;
                            if (i == 1) {
                                leftWidth = 170;
                                rightWidth = 220;
                            } else if (i == 2) {
                                leftWidth = rightWidth = 130;
                            } else if (i == 4) {
                                leftWidth = 130;
                                rightWidth = 150;
                            }
                            return (
                                <div key={_.camelCase(title) + '_' + (i + 1)}
                                     style={_.merge({}, i > 0 ? {marginTop: 40} : {})}>
                                    <div style={styles.boldFont}>{item.title}</div>
                                    <div
                                        style={_.merge({}, styles.commonTableContent, styles.verticalCenter, {flexWrap: 'wrap'})}>
                                        {item.content.map((subItem, index) => this.renderItemElem(item.title, subItem, false, '48%', index, 1, leftWidth, rightWidth))}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    handlerMouse(title, index, show) {
        const isShows = this.state[title] ? this.state[title] : [];
        isShows[index] = show;
        this.setState({[title]: isShows})
    }

    render() {
        const styles = this.getStyles();

        const shipBasicData = [
            {
                key: 'IMO',
                value: '1601127',
            },
            {
                key: 'Ship Name',
                value: 'jinyonghao'
            },
            {
                key: 'Flag',
                value: 'China'
            },
            {
                key: 'Ship Type',
                value: 'LPG Tanker'
            },
            {
                key: 'LOA',
                value: '300',
                unit: 'M'
            },
            {
                key: 'Beam',
                value: '65',
                unit: 'M'
            },
            {
                key: 'GRT',
                value: '300',
                unit: 'MT'
            },
            {
                key: 'NRT',
                value: '300',
                unit: 'MT'
            },
            {
                key: 'DWT',
                value: '300',
                unit: 'MT'
            }
        ];

        const shipCompanyInfo = [
            {
                key: 'Ship Owner',
                value: 'you are the apple of my eye'
            },
            {
                key: 'Ship Management',
                value: 'you are the apple of my eye'
            },
            {
                key: 'Ship Operation',
                value: 'you are the apple of my eye'
            },
            {
                key: 'DOC Company',
                value: 'you are the apple of my eye'
            },
            {
                key: 'Ship Registry Company',
                value: 'you are the apple of my eye'
            },
            {
                key: 'Ship Tech.Management',
                value: 'you are the apple of my eye'
            },
        ];

        const shipContactDetail = [
            {
                key: 'Inmarsat-C',
                value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            {
                key: 'Telephone',
                value: '+86 21 88888888'
            },
            {
                key: 'Email',
                value: 'ship2017@ship.com'
            },
            {
                key: 'Fax',
                value: '+86 21 66666666'
            },
            {
                key: 'TLX',
                value: 'LDSDDDF999'
            },
        ];

        const shipDetailedInfo = [
            {
                title: 'Ship Main Data',
                content: [
                    {
                        key: 'Call Sign',
                        value: 'xxxxxxxxxxxxxxxxx'
                    },
                    {
                        key: 'MMSI',
                        value: 'xxxxxxxxxxxxxxxxx'
                    },
                    {
                        key: 'Summer Draft',
                        value: '300',
                        unit: 'M'
                    },
                    {
                        key: 'P&I Club',
                        value: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        key: 'Class Scociety',
                        value: 'xxxxxxxxxxxxxxxxx'
                    }
                ]
            },
            {
                title: 'Ship Displacement Data',
                content: [
                    {
                        key: 'Light Ship Displacement',
                        value: '200',
                        unit: 'MT'
                    },
                    {
                        key: 'Tons Per Centimeter of Immersion',
                        value: '100',
                        unit: 'T'
                    },
                    {
                        key: 'Laden Ship Displacementt',
                        value: '300',
                        unit: 'MT'
                    }
                ]
            },
            {
                title: 'Ship Engine Data',
                content: [
                    {
                        key: 'Main Engine Type',
                        value: 'xxxxxxxxxxxxxx'
                    },
                    {
                        key: 'Main Engine Power',
                        value: '500',
                        unit: 'PRM'
                    },
                    {
                        key: 'Aux Engine Type',
                        value: 'xxxxxxxxxxxxxx'
                    },
                    {
                        key: 'Aux Engine Power',
                        value: '500',
                        unit: 'PRM'
                    }
                ]
            },
            {
                title: 'Ship Propeller Data',
                content: [
                    {
                        key: 'Propeller Type',
                        value: 'xxxxxxxxxxxxxx'
                    }
                ]
            },
            {
                title: 'Ship Speed Data',
                content: [
                    {
                        key: 'The Fastest Speed',
                        value: '200',
                        unit: 'KNOT'
                    },
                    {
                        key: 'The Economical Speed',
                        value: '160',
                        unit: 'KNOT'
                    }
                ]
            },
        ];

        const shipBuilderInfo = [
            {
                key: 'Ship Builder',
                value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            {
                key: 'Hull No.',
                value: '+86 21 88888888'
            },
            {
                key: 'Date of Keel Laid',
                value: '12/FEB/2017'
            },
            {
                key: 'Date of Launch',
                value: '30/JUN/2017'
            },
            {
                key: 'Date of Delivery',
                value: '26/MAY/2017'
            },
            {
                key: 'Date of Main Conversion',
                value: '30/JUN/2017'
            },
        ];

        return (
            <div style={styles.content}>
                {this.renderUploadElem()}
                {this.renderTableElem('Ship Basic Data', shipBasicData, true)}
                {this.renderTableElem('Ship Company Information', shipCompanyInfo, false, '100%', 0, 180)}
                {this.renderTableElem('Ship Contact Detail', shipContactDetail, false)}
                {this.renderShipDetailedDetailElem('Ship Detailed Information', shipDetailedInfo)}
                {this.renderTableElem('Ship Builder Information', shipBuilderInfo, false, '48%', 1, 150, 200)}
            </div>
        )
    }
}

export default Ship;