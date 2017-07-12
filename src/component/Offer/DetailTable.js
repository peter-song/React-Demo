/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import _ from 'lodash';
import {Icon, Button} from 'antd';

class DetailTable extends React.Component {

    getStyles(context) {

        let styles = {

            quotationCommon: {
                border: '1px solid #e9e9e9',
                marginTop: context.props.isMarginTop ? '16px' : 0,
            },

            commonTitle: {
                padding: '12px 0',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            commonContent: {
                padding: '12px 0',
                letterSpacing: 0,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
            },

            commonContent2: {
                width: '100%',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
            },

            commonTitleBorderRight: {
                borderRight: '1px solid #d6d6d6',
            },

            commonContentBorderRight: {
                borderRight: '1px solid #d6d6d6',
            },

            detail: {
                border: '1px solid #e9e9e9',
                marginTop: 16,
            },

            detailTitle: {
                padding: '12px 0',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            detailContent: {
                padding: '12px 0',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            detailSubContent: {
                padding: '12px 0',
                background: '#FFFFFF',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            detailTotalPrice: {
                padding: '12px 0',
                background: '#FFF2DC',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            horizontalCenter: {
                textAlign: 'center',
            },

            verticalCenter: {
                display: 'flex',
                alignItems: 'Center',
            },

            detailLeft: {
                paddingLeft: 10,
                display: 'inline-block',
            },

            detailRight: {
                paddingRight: 10,
                display: 'inline-block',
            },

            col1: {
                width: '25%',
            },

            col2: {
                // width: '40%',
                // minWidth: 357,
                flex: '1',
            },

            col3: {
                width: '15%',
                textAlign: 'right',
            },

            col4: {
                width: '14%',
                textAlign: 'right',
            },

            col5: {
                width: '6%',
            },

            downloadCol: {
                width: '20%',
            },

            downloadFont: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0,0,0,0.43)',
                marginRight: 8,
            },

            line: {
                borderTop: '1px solid #e9e9e9',
            },

            icon: {
                height: 24,
                width: 28,
                cursor: 'pointer',
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static propTypes = {
        isMarginTop: React.PropTypes.bool,
        common: React.PropTypes.object,
        detail: React.PropTypes.object,
        columns: React.PropTypes.array,
        hasDownload: React.PropTypes.bool,
    };

    static defaultProps = {
        isMarginTop: true,
        hasDownload: false,
        columns: [
            {
                name: 'Vessel',
                width: '20%'
            },
            {
                name: 'ETA/Sea Trail Date',
                width: '20%'
            },
            {
                name: 'Port',
                width: '20%'
            },
            {
                name: 'Service Type',
                fill: true
            },
            {
                name: 'Rate',
                width: '20%'
            },
        ],
        common: {
            vessel: 'MV SSHSLDS DSLDKH',
            date: '24/May/2017',
            port: '30/May/2017',
            serviceType: 'Shanghai',
            rate: 'USD 1/6.9',
        },
        detail: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpens: []
        }
    }

    renderCommonElem(styles) {
        const {common, columns} = this.props;
        const commonArr = Object.keys(common);
        return (
            <div>
                <div style={_.merge({}, styles.verticalCenter, {background: '#E9E9E9'})}>
                    {
                        columns.map((column, i) => {
                            return (
                                <div
                                    style={_.merge({}, styles.commonTitle, column.fill ? {flex: '1'} : {width: column.width}, i != columns.length - 1 ? styles.commonTitleBorderRight : {})}>
                                    {column.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{display: 'flex', alignItems: 'stretch'}}>
                    {
                        commonArr.map((key, i) => {
                            return (
                                <div
                                    style={_.merge({}, styles.commonContent, columns[i].fill ? {flex: '1'} : {width: columns[i].width}, i != commonArr.length - 1 ? styles.commonTitleBorderRight : {})}>
                                    <div style={styles.commonContent2}>{common[key]}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    renderTitleElem(styles) {
        return (
            <div style={_.merge({}, styles.verticalCenter, {background: '#E9E9E9'})}>
                <div style={_.merge({}, styles.col1, styles.detailTitle)}>
                    <span style={styles.detailLeft}>V/No. CostItem</span>
                </div>
                <div style={_.merge({}, styles.col2, styles.detailTitle)}>
                    <span style={styles.detailLeft}>Remarks</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.detailTitle)}>
                    <span style={styles.detailRight}>Amount(RMB)</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.detailTitle)}>
                    <span style={styles.detailRight}>=(USD)</span>
                </div>
                {
                    this.props.hasDownload ?
                        <div style={_.merge({}, styles.downloadCol, styles.detailTitle)}>
                            <span
                                style={_.merge({}, styles.detailRight, {marginLeft: 10})}>Document</span>
                        </div> : ''
                }
                <div style={_.merge({}, styles.col5, styles.detailTitle)}>&nbsp;</div>
            </div>
        )
    }

    renderContentElem(styles) {
        const {detail} = this.props;
        if (Object.keys(detail).length == 0)return;
        let contentElem = [];
        detail.items.map((item, i) => {
            let isOpen = this.state.isOpens[i];
            if (isOpen == undefined) {
                isOpen = true;
            }
            contentElem.push(
                <div key={`content_${i + 1}`}
                     style={_.merge({}, styles.line, {background: '#F7F7F7'}, styles.verticalCenter)}>
                    <div style={_.merge({}, styles.col1, styles.detailContent)}>
                        <span style={styles.detailLeft}>{`${i + 1}. ${item.title}`}</span>
                    </div>
                    <div style={_.merge({}, styles.col2, styles.detailContent)}>
                        <span style={styles.detailLeft}>&nbsp;</span>
                    </div>
                    <div style={_.merge({}, styles.col3, styles.detailContent)}>
                        <span style={styles.detailRight}>{item.RMB}</span>
                    </div>
                    <div style={_.merge({}, styles.col4, styles.detailContent)}>
                        <span style={styles.detailRight}>{item.USD}</span>
                    </div>
                    {
                        this.props.hasDownload ?
                            <div style={_.merge({}, styles.downloadCol, styles.detailContent)}>
                            </div> : ''
                    }
                    <div
                        style={_.merge({}, styles.col5, styles.detailContent, styles.horizontalCenter, {padding: '5px 0 0 0'})}>
                        {isOpen ? <Icon type="up-square-o" style={styles.icon}
                                          onClick={this.handlerToggle.bind(this, i, false)}/>
                            : <Icon type="down-square-o" style={styles.icon}
                                        onClick={this.handlerToggle.bind(this, i, true)}/>}
                    </div>
                </div>
            );

            if (isOpen) {
                item.subDetail.map((subItem, j) => {
                    const downloadElem = [];
                    if (this.props.hasDownload) {
                        const invoices = subItem.invoices;
                        downloadElem.push(
                            <div
                                style={_.merge({}, styles.downloadCol, styles.verticalCenter, styles.detailSubContent)}>
                                        <span style={_.merge({}, styles.downloadFont, {marginLeft: 10})}>
                                            {`${invoices.length} Files`}
                                        </span>
                                <Button disabled={!invoices.length} onClick={() => this.handlerDownloadFiles(invoices)}>
                                    <Icon type="download"/>DownloadAll</Button>
                            </div>
                        )
                    }

                    contentElem.push(
                        <div key={`content_${i + 1}_${j + 1}`}
                             style={_.merge({}, styles.line, styles.verticalCenter)}>
                            <div style={_.merge({}, styles.col1, styles.detailSubContent)}>
                                <span style={ _.merge({}, styles.detailLeft, {paddingLeft: 25})}>
                                    {`${i + 1}-${j + 1}. ${subItem.title}`}
                                </span>
                            </div>
                            <div style={_.merge({}, styles.col2, styles.detailSubContent)}>
                                <span
                                    style={_.merge({}, styles.detailLeft, {color: '#9B9B9B'})}>{subItem.remakes}</span>
                            </div>
                            <div style={_.merge({}, styles.col3, styles.detailSubContent)}>
                                <span style={styles.detailRight}>{subItem.RMB}</span>
                            </div>
                            <div style={_.merge({}, styles.col4, styles.detailSubContent)}>
                                <span style={styles.detailRight}>{subItem.USD}</span>
                            </div>
                            {downloadElem}
                            <div style={_.merge({}, styles.col5, styles.detailSubContent)}>&nbsp;</div>
                        </div>
                    )
                })
            }
        });

        return contentElem;
    }

    renderTotalPriceElem(styles) {
        const {detail} = this.props;
        if (Object.keys(detail).length == 0)return;
        return (
            <div style={_.merge({}, styles.line, styles.verticalCenter)}>
                <div style={_.merge({}, styles.col1, styles.detailTotalPrice)}>
                    <span style={ _.merge({}, styles.detailLeft, {paddingLeft: 25})}>
                        Total
                    </span>
                </div>
                <div style={_.merge({}, styles.col2, styles.detailTotalPrice)}>
                    <span style={styles.detailLeft}>&nbsp;</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.detailTotalPrice)}>
                    <span style={styles.detailRight}>{detail.total.RMB}</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.detailTotalPrice)}>
                    <span style={styles.detailRight}>{detail.total.USD}</span>
                </div>
                {
                    this.props.hasDownload ?
                        <div style={_.merge({}, styles.downloadCol, styles.detailTotalPrice)}>
                            &nbsp;
                        </div> : ''
                }
                <div style={_.merge({}, styles.col5, styles.detailTotalPrice)}>&nbsp;</div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles(this);

        return (
            <div>
                <div style={styles.quotationCommon}>
                    {this.renderCommonElem(styles)}
                </div>
                <div style={styles.detail}>
                    {this.renderTitleElem(styles)}
                    {this.renderContentElem(styles)}
                    {this.renderTotalPriceElem(styles)}
                </div>
            </div>
        )
    }

    handlerToggle(index, isOpen) {
        let items = this.props.detail.items;
        let isOpens = this.state.isOpens;
        if (!isOpens) {
            isOpens = new Array(items.length);
        }
        isOpens[index] = isOpen;
        this.setState({
            isOpens
        })
    }

    handlerDownloadFiles(invoices) {
        console.log('handlerDownloadFiles', invoices);
    }

}

export default DetailTable;