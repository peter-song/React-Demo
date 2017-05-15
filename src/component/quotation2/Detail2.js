/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import _ from 'lodash';

import down from '../../../static/img/down.svg';
import up from '../../../static/img/up.svg';

export default class Detail extends React.Component {

    getStyles() {

        let styles = {

            quotationDetail: {
                border: '1px solid #c9ccd9',
                marginTop: 16,
            },

            quotationDetailTitle: {
                float: 'left',
                padding: '12px 0',
                background: '#E9E9E9',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            quotationDetailContent: {
                float: 'left',
                padding: '12px 0',
                background: '#F7F7F7',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            quotationDetailSubContent: {
                float: 'left',
                padding: '12px 0',
                background: '#FFFFFF',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            quotationDetailTotalPrice: {
                float: 'left',
                padding: '12px 0',
                background: '#FFF2DC',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            quotationDetailLeft: {
                paddingLeft: 10,
                display: 'inline-block',
            },

            quotationDetailRight: {
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

    renderTitleElem(styles) {
        return (
            <div>
                <div style={_.merge({}, styles.col1, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailLeft}>V/No. Cost Item</span>
                </div>
                <div style={_.merge({}, styles.col2, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailLeft}>Remarks</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailRight}>Amount（RMB）</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailRight}>=（USD）</span>
                </div>
                <div style={_.merge({}, styles.col5, styles.quotationDetailTitle)}>&nbsp;</div>
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
                    <div style={_.merge({}, styles.col1, styles.quotationDetailContent)}>
                        <span style={styles.quotationDetailLeft}>{`${i + 1}. ${item.title}`}</span>
                    </div>
                    <div style={_.merge({}, styles.col2, styles.quotationDetailContent)}>
                        <span style={styles.quotationDetailLeft}>&nbsp;</span>
                    </div>
                    <div style={_.merge({}, styles.col3, styles.quotationDetailContent)}>
                        <span style={styles.quotationDetailRight}>{item.RMB}</span>
                    </div>
                    <div style={_.merge({}, styles.col4, styles.quotationDetailContent)}>
                        <span style={styles.quotationDetailRight}>{item.USD}</span>
                    </div>
                    <div style={_.merge({}, styles.col5, styles.quotationDetailContent, {textAlign: 'center'})}>
                        <img src={down} style={{cursor: 'pointer', height: 15, width: 15}}
                             onClick={this.handlerToggle.bind(this, i, !isOpen)}/>
                    </div>
                    <div style={styles.clear}></div>
                </div>
            );

            if (isOpen) {
                item.subDetail.map((subItem, j) => {
                    contentElem.push(
                        <div key={`content_${i + 1}_${j + 1}`} style={_.merge({}, j > 0 ? styles.line : '')}>
                            <div style={_.merge({}, styles.col1, styles.quotationDetailSubContent)}>
                                <span style={ _.merge({}, styles.quotationDetailLeft, {paddingLeft: 25})}>
                                    {`${i + 1}-${j + 1}. ${subItem.title}`}
                                </span>
                            </div>
                            <div style={_.merge({}, styles.col2, styles.quotationDetailSubContent)}>
                                <span style={_.merge({}, styles.quotationDetailLeft, {color: '#9B9B9B'})}>{subItem.remakes}</span>
                            </div>
                            <div style={_.merge({}, styles.col3, styles.quotationDetailSubContent)}>
                                <span style={styles.quotationDetailRight}>{subItem.RMB}</span>
                            </div>
                            <div style={_.merge({}, styles.col4, styles.quotationDetailSubContent)}>
                                <span style={styles.quotationDetailRight}>{subItem.USD}</span>
                            </div>
                            <div style={_.merge({}, styles.col5, styles.quotationDetailSubContent)}>&nbsp;</div>
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
                <div style={_.merge({}, styles.col1, styles.quotationDetailTotalPrice)}>
                    <span style={ _.merge({}, styles.quotationDetailLeft, {paddingLeft: 25})}>
                        Total
                    </span>
                </div>
                <div style={_.merge({}, styles.col2, styles.quotationDetailTotalPrice)}>
                    <span style={styles.quotationDetailLeft}>&nbsp;</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.quotationDetailTotalPrice)}>
                    <span style={styles.quotationDetailRight}>{detail.total.RMB}</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.quotationDetailTotalPrice)}>
                    <span style={styles.quotationDetailRight}>{detail.total.USD}</span>
                </div>
                <div style={_.merge({}, styles.col5, styles.quotationDetailTotalPrice)}>&nbsp;</div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles();
        let detail = this.props.detail;

        return (
            <div style={styles.quotationDetail}>
                {this.renderTitleElem(styles)}
                {this.renderContentElem(styles, detail)}
                {this.renderTotalPriceElem(styles, detail)}
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

}