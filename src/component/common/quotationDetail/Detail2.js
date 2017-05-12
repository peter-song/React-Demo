/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';
import {Button} from 'antd';

import './detail.css';
import down from '../../../../static/img/down.svg';
import up from '../../../../static/img/up.svg';

export default class Detail extends React.Component {

    getStyles() {

        let styles = {


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

    render() {
        let styles = this.getStyles();

        let detail = this.props.detail;
        let detailElem = [];

        detail.items.map((item, i) => {
            let isOpen = this.state.isOpens[i];
            if (i == 0 && (isOpen == undefined || isOpen == true)) {
                isOpen = true;
            }
            detailElem.push(
                <div>
                    <div className="content2">
                        <div className="col1">
                            <span>{`${i + 1}. ${item.title}`}</span>
                        </div>
                        <div className="col2">
                            <span>&nbsp;</span>
                        </div>
                        <div className="col3">
                            <span>{item.RMB}</span>
                        </div>
                        <div className="col4">
                            <span>{item.USD}</span>
                        </div>
                        <div className="col5" style={{textAlign: 'center'}}>
                            <img src={down} style={{cursor: 'pointer', height: 15, width: 15}}
                                 onClick={this.handlerToggle.bind(this, i, !isOpen)}/>
                        </div>
                    </div>
                    <div style={styles.clear}></div>
                </div>
            );

            if (isOpen) {
                item.subDetail.map((subItem, j) => {
                    let className = 'subContent';
                    if (j > 0) {
                        className += ' line';
                    }
                    detailElem.push(
                        <div>
                            <div className={className}>
                                <div className="col1">
                                    <span style={{paddingLeft: 25}}>{`${i + 1}-${j + 1}. ${subItem.title}`}</span>
                                </div>
                                <div className="col2">
                                    <span>{subItem.remakes}</span>
                                </div>
                                <div className="col3">
                                    <span>{subItem.RMB}</span>
                                </div>
                                <div className="col4">
                                    <span>{subItem.USD}</span>
                                </div>
                                <div className="col5">&nbsp;</div>
                            </div>
                            <div style={styles.clear}></div>
                        </div>
                    )
                })
            }
        });

        return (
            <div className="quotationDetail">
                <div>
                    <div className="title">
                        <div className="col1">
                            <span>V/No. Cost Item</span>
                        </div>
                        <div className="col2">
                            <span>Remarks</span>
                        </div>
                        <div className="col3">
                            <span>Amount（RMB）</span>
                        </div>
                        <div className="col4">
                            <span>=（USD）</span>
                        </div>
                        <div className="col5">&nbsp;</div>
                    </div>
                    <div style={styles.clear}></div>
                </div>
                {detailElem}
                <div>
                    <div className="totalPrice">
                        <div className="col1">
                            <span style={{paddingLeft: 25}}>Total</span>
                        </div>
                        <div className="col2">
                            <span>&nbsp;</span>
                        </div>
                        <div className="col3">
                            <span>{detail.total.RMB}</span>
                        </div>
                        <div className="col4">
                            <span>{detail.total.USD}</span>
                        </div>
                        <div className="col5">&nbsp;</div>
                    </div>
                    <div style={styles.clear}></div>
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

}