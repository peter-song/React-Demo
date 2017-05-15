/**
 * Created by songzhongkun on 2017/5/15.
 */
import React from 'react';
import _ from 'lodash';

import {Button, Input, Menu, Dropdown, InputNumber} from 'antd';

import del from '../../../static/img/delete.png';
import save from '../../../static/img/save.png';

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

            costItemDownDefault: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0,0,0,0.43)',
                letterSpacing: 0,
            },

            costItemDownChanged: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                letterSpacing: 0,
            },

            quotationDetailLeft: {
                marginLeft: 10,
                display: 'inline-block',
            },

            quotationDetailRight: {
                marginRight: 10,
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

            icon: {
                cursor: 'pointer',
                height: 20,
                width: 20,
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static defaultProps = {
        inputPrompt: 'Click to edit',
        selectPrompt: 'Click to select cost item',
        title: 'Cash to Master',
        productItems: [
            {
                id: 1,
                name: 'Port Agency'
            },
            {
                id: 2,
                name: 'Spare Parts Delivery'
            },
            {
                id: 3,
                name: 'Crew Change'
            },
            {
                id: 4,
                name: 'Port Disbursement'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            detail: {
                total: {
                    RMB: '0.00',
                    USD: '0.00'
                },
                items: []
            }
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

    renderContentElem(styles) {
        return (
            <div key={`content`}>
                <div style={_.merge({}, styles.col1, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailLeft}>{this.props.title}</span>
                </div>
                <div style={_.merge({}, styles.col2, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailLeft}>&nbsp;</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailRight}>{ this.state.detail.total.RMB}</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailRight}>{this.state.detail.total.USD}</span>
                </div>
                <div
                    style={_.merge({}, styles.col5, styles.quotationDetailContent, {textAlign: 'center'})}>&nbsp;</div>
                <div style={styles.clear}></div>
            </div>
        )
    }

    renderSubContentElem(styles) {
        const subContentElem = [];
        this.state.detail.items.map((item, i) => {
            let changeItem = _.find(this.props.productItems, obj_item => obj_item.id == item.title);

            const items = this.props.productItems.map(item => {
                let isExists = _.find(this.state.detail.items, obj_item => obj_item.title == item.id);
                if (isExists) {
                    return <Menu.Item disabled key={`${i}_${item.id}`}>{item.name}</Menu.Item>
                } else {
                    return <Menu.Item key={`${i}_${item.id}`}>{item.name}</Menu.Item>
                }
            });

            const menu = <Menu onClick={this.handlerChangeProductItem.bind(this, i)}>{items}</Menu>;
            subContentElem.push(
                <div key={`subContent_${i}`} style={_.merge({}, i > 0 ? styles.line : '')}>
                    <div style={_.merge({}, styles.col1, styles.quotationDetailSubContent, {paddingLeft: 10})}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a style={_.merge({}, changeItem ? styles.costItemDownChanged : styles.costItemDownDefault)}
                               href="#">
                                {changeItem ? changeItem.name : this.props.selectPrompt}
                            </a>
                        </Dropdown>
                    </div>
                    <div style={_.merge({}, styles.col2, styles.quotationDetailSubContent)}>
                        <Input type="textarea" autosize
                               onChange={this.handlerChangeRemark.bind(this, i)}
                               style={_.merge({}, styles.quotationDetailLeft, {color: '#9B9B9B'}, {width: '80%'})}
                               value={item.remark}
                               placeholder={this.props.inputPrompt}/>
                    </div>
                    <div style={_.merge({}, styles.col3, styles.quotationDetailSubContent)}>
                        <InputNumber min={0} style={_.merge({}, styles.quotationDetailRight, {width: '80%'})}
                                     onChange={this.handlerChangePrice.bind(this, i, 'rmb')}
                                     value={item.RMB}
                                     placeholder={this.props.inputPrompt}/>
                    </div>
                    <div style={_.merge({}, styles.col4, styles.quotationDetailSubContent)}>
                        <InputNumber min={0} style={_.merge({}, styles.quotationDetailRight, {width: '80%'})}
                                     onChange={this.handlerChangePrice.bind(this, i, 'usd')}
                                     value={item.USD}
                                     placeholder={this.props.inputPrompt}/>
                    </div>
                    <div style={_.merge({}, styles.col5, styles.quotationDetailSubContent)}>
                        <img src={del} style={_.merge({}, styles.icon, {})}
                             onClick={() => this.handlerDeleteCostItem(i)}/>
                        <img src={save} style={_.merge({}, styles.icon, {marginLeft: 10})}
                             onClick={() => this.handlerSaveCostItem(i)}/>
                    </div>
                    <div style={styles.clear}></div>
                </div>
            )
        });
        return subContentElem;
    }


    render() {
        let styles = this.getStyles();
        let detail = this.props.detail;

        return (
            <div>
                <div style={{marginTop: 20}}>
                    <Button onClick={() => this.handlerAddCostItem()}> + Add Cost</Button>
                </div>
                <div style={styles.quotationDetail}>
                    {this.renderTitleElem(styles)}
                    {this.renderContentElem(styles)}
                    {this.renderSubContentElem(styles)}
                </div>
            </div>
        )
    }

    handlerAddCostItem() {
        const detail = this.state.detail;

        if(detail.items.length < this.props.productItems.length){
            let defaultItem = {
                title: '',
                remark: '',
                RMB: '',
                USD: ''
            };
            detail.items.push(defaultItem);

            this.setState({
                detail
            })
        }
    }

    handlerDeleteCostItem(i) {
        const detail = this.state.detail;
        detail.items.splice(i, 1);

        this.setState({
            detail
        })
    }

    handlerSaveCostItem(i) {
        const detail = this.state.detail;

        console.log(detail.items[i])
    }

    handlerChangeProductItem(i, {key}) {
        const detail = this.state.detail;
        detail.items[i].title = key.split('_')[1];

        this.setState({
            detail
        })
    }

    handlerChangeRemark(i, e) {
        const detail = this.state.detail;
        detail.items[i].remark = e.target.value;

        this.setState({
            detail
        })
    }

    handlerChangePrice(i, type, value) {
        const detail = this.state.detail;
        detail.items[i][type.toUpperCase()] = value;

        let totalRMB = 0, totalUSD = 0;
        detail.items.forEach(item => {
            totalRMB += item.RMB;
            totalUSD += item.USD;
        });

        detail.total.RMB = totalRMB;
        detail.total.USD = totalUSD;

        this.setState({
            detail
        })
    }

}