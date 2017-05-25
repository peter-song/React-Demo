/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import _ from 'lodash';

import down from '../../../static/img/down.png';
import up from '../../../static/img/up.png';

export default class DetailTable extends React.Component {

    getStyles() {

        let styles = {

            quotationCommon: {
                border: '1px solid #c9ccd9',
                marginTop: 16,
            },

            commonTitle: {
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

            commonTitleBorderRight: {
                borderRight: '1px solid #d6d6d6',
            },

            commonContentBorderRight: {
                borderRight: '1px solid #d6d6d6',
            },

            commonContent: {
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

            detail: {
                border: '1px solid #c9ccd9',
                marginTop: 16,
            },

            detailTitle: {
                float: 'left',
                padding: '12px 0',
                background: '#E9E9E9',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            detailContent: {
                float: 'left',
                padding: '12px 0',
                background: '#F7F7F7',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            detailSubContent: {
                float: 'left',
                padding: '12px 0',
                background: '#FFFFFF',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            detailTotalPrice: {
                float: 'left',
                padding: '12px 0',
                background: '#FFF2DC',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
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
                width: '35%',
            },

            col3: {
                width: '20%',
                textAlign: 'right',
            },

            col4: {
                width: '15%',
                textAlign: 'right',
            },

            col5: {
                width: '5%',
            },

            line: {
                borderTop: '1px solid #e2e2e2',
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpens: []
        }
    }

    renderCommonElem(styles, common) {
        return (
            <div style={styles.quotationCommon}>
                <div>
                    <div style={_.merge({}, styles.commonTitle, styles.commonTitleBorderRight)}>Vessel</div>
                    <div style={_.merge({}, styles.commonTitle, styles.commonTitleBorderRight)}>ETA/Sea Trail Date</div>
                    <div style={_.merge({}, styles.commonTitle, styles.commonTitleBorderRight)}>Port</div>
                    <div style={_.merge({}, styles.commonTitle, styles.commonTitleBorderRight)}>Service Type</div>
                    <div style={_.merge({}, styles.commonTitle)}>Rate</div>
                    <div style={styles.clear}></div>
                </div>
                <div>
                    <div style={_.merge({}, styles.commonContent)}>{common.vessel}</div>
                    <div style={_.merge({}, styles.commonContent)}>{common.date}</div>
                    <div style={_.merge({}, styles.commonContent)}>{common.port}</div>
                    <div style={_.merge({}, styles.commonContent)}>{common.serviceType}</div>
                    <div style={_.merge({}, styles.commonContent)}>{common.rate}</div>
                    <div style={styles.clear}></div>
                </div>
            </div>
        )
    }

    renderTitleElem(styles) {
        return (
            <div>
                <div style={_.merge({}, styles.col1, styles.detailTitle)}>
                    <span style={styles.detailLeft}>V/No. Cost Item</span>
                </div>
                <div style={_.merge({}, styles.col2, styles.detailTitle)}>
                    <span style={styles.detailLeft}>Remarks</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.detailTitle)}>
                    <span style={styles.detailRight}>Amount（RMB）</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.detailTitle)}>
                    <span style={styles.detailRight}>=（USD）</span>
                </div>
                <div style={_.merge({}, styles.col5, styles.detailTitle)}>&nbsp;</div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    renderContentElem(styles, detail) {
        let contentElem = [];

        detail.items.map((item, i) => {
            let isOpen = this.state.isOpens[i];
            if (i == 0 && (isOpen == undefined || isOpen == true)) {
                isOpen = true;
            }
            contentElem.push(
                <div key={`content_${i + 1}`}>
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
                    <div style={_.merge({}, styles.col5, styles.detailContent, {textAlign: 'center'})}>
                        <img src={isOpen ? up : down} style={{cursor: 'pointer', height: 15, width: 15}}
                             onClick={this.handlerToggle.bind(this, i, !isOpen)}/>
                    </div>
                    <div style={styles.clear}></div>
                </div>
            );

            if (isOpen) {
                item.subDetail.map((subItem, j) => {
                    contentElem.push(
                        <div key={`content_${i + 1}_${j + 1}`} style={_.merge({}, j > 0 ? styles.line : '')}>
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
                            <div style={_.merge({}, styles.col5, styles.detailSubContent)}>&nbsp;</div>
                            <div style={styles.clear}></div>
                        </div>
                    )
                })
            }
        });

        return contentElem;
    }

    renderTotalPriceElem(styles, detail) {
        return (
            <div>
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
                <div style={_.merge({}, styles.col5, styles.detailTotalPrice)}>&nbsp;</div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles();
        let {common, detail} = this.props.offerDetail;

        return (
            <div>
                {this.renderCommonElem(styles, common)}
                <div style={styles.detail}>
                    {this.renderTitleElem(styles)}
                    {this.renderContentElem(styles, detail)}
                    {this.renderTotalPriceElem(styles, detail)}
                </div>
            </div>
        )
    }

    handlerToggle(index, isOpen) {
        let items = this.props.offerDetail.detail.items;
        let isOpens = this.state.isOpens;
        if (!isOpens) {
            isOpens = new Array(items.length);
        }
        isOpens[index] = isOpen;
        this.setState({
            isOpens
        })
    }

}