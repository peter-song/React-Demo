/**
 * Created by songzhongkun on 2017/5/15.
 */
import React from 'react';
import {Icon, Upload} from 'antd';
import _ from 'lodash';

import {Button, Input, Menu, Dropdown, InputNumber} from 'antd';

class EditTable extends React.Component {

    getStyles(context) {

        let quotationDetail = {
            marginTop: context.props.isMarginTop ? 16 : 0,
        };
        if (context.props.isBorder) {
            quotationDetail.border = '1px solid #e9e9e9';
        } else {
            if (context.props.isBorderTop) {
                quotationDetail.borderTop = '1px solid #e9e9e9';
            }
            if (context.props.isBorderBottom) {
                quotationDetail.borderBottom = '1px solid #e9e9e9';
            }
        }

        let styles = {

            quotationDetail,

            addCostItem: {
                float: 'left',
                // border: '1px dashed #4990E2',
                borderRadius: 2,
                padding: '10px 0px 5px 10px',
                cursor: 'pointer',
            },

            addContent: {
                display: 'flex',
                padding: '12px 8px',
                // alignItems: 'center',
                width: 150,
                cursor: 'pointer',
            },

            addCostText: {
                float: 'left',
                fontWeight: 400,
                fontSize: 14,
                color: '#4990E2',
                marginLeft: 10,
                letterSpacing: 0,
                marginTop: 2,
            },

            quotationDetailTitle: {
                // float: 'left',
                padding: '12px 0',
                fontWeight: '500',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.75)',
                letterSpacing: 0,
            },

            quotationDetailContent: {
                // float: 'left',
                padding: '12px 0',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            quotationDetailSubContent: {
                // float: 'left',
                padding: '12px 0',
                // background: '#FFFFFF',
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.65)',
                letterSpacing: 0,
            },

            costItemDownDefault: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0,0,0,0.43)',
                letterSpacing: 0,
                cursor: 'pointer',
            },

            costItemDownChanged: {
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(0,0,0,0.65)',
                letterSpacing: 0,
                cursor: 'pointer',
            },

            productPrompt: {
                color: '#f04134',
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: 0,
            },

            quotationDetailLeft: {
                marginLeft: 10,
                display: 'inline-block',
                wordBreak: 'break-word',
            },

            quotationDetailRight: {
                // marginRight: 10,
                display: 'inline-block',
            },

            horizontalCenter: {
                textAlign: 'center',
            },

            titleContent: {
                display: 'flex',
                alignItems: 'Center',
                background: this.props.titleBgColor,
            },

            productContent: {
                display: 'flex',
                alignItems: 'Center',
            },

            col1: {
                width: '25%',
            },

            col2: {
                // width: '38%',
                // minWidth: 357,
                flex: '1'
            },

            col3: {
                width: '17%',
                textAlign: 'right',
            },

            col4: {
                width: '13%',
                textAlign: 'right',
            },

            col5: {
                width: '10%',
            },

            uploadColumn: {
                width: '20%',
                padding: '12px 20px'
            },

            line: {
                borderTop: '1px solid #e9e9e9',
            },

            icon: {
                cursor: 'pointer',
                height: 18,
                width: 18,
                color: '#4990E2',
            },

            icon2: {
                cursor: 'pointer',
                height: 24,
                width: 24,
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    static propTypes = {
        inputPrompt: React.PropTypes.string,
        selectPrompt: React.PropTypes.string,
        offerType: React.PropTypes.string,
        titleBgColor: React.PropTypes.string,
        quotationType: React.PropTypes.string,
        orderEntry: React.PropTypes.object,
        params: React.PropTypes.object,
        currentExchange: React.PropTypes.number,
        isInquiryOrder: React.PropTypes.bool,
        isMarginTop: React.PropTypes.bool,
        isBorder: React.PropTypes.bool,
        isBorderTop: React.PropTypes.bool,
        isBorderBottom: React.PropTypes.bool,
        hasUpload: React.PropTypes.bool,
        isCanEdit: React.PropTypes.bool,
        updateCostItems: React.PropTypes.func,
    };

    static defaultProps = {
        inputPrompt: 'Click to edit',
        selectPrompt: 'Click to select cost item',
        titleBgColor: '#F8F8F8',
        offerType: 'USD',
        quotationType: 'estimated',
        currentExchange: 6.9,
        isInquiryOrder: true,
        isMarginTop: true,
        isBorder: true,
        isBorderTop: false,
        isBorderBottom: false,
        hasUpload: false,
        isCanEdit: true,
        updateCostItems: () => {
            console.log('There is no transfer method !')
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isCanSave: false,
            detail: {
                total: {
                    totalAmountRMB: 0,
                    totalAmountUSD: 0
                },
                items: [],
                isEdits: [],
                status: 0
            }
        }
    }

    componentDidMount() {
        this.initData(this.props.orderEntry);
    }

    initData(orderEntry) {
        if (orderEntry) {
            const costItems = this.props.quotationType == 'estimated' ? orderEntry.costItemsEstimated : orderEntry.costItems;
            const initialItems = [];
            const initialEdits = [];
            if (costItems && costItems.length) {
                costItems.map(item => {
                    const initialItem = _.pick(item, ['costType', 'description', 'amount', 'amountRMB'])
                    initialItems.push(_.merge(initialItem, {
                        validateTitle: true,
                        validateRMB: true,
                        validateUSD: true,
                    }));
                    initialEdits.push(false);
                });

                const {detail} = this.state;
                detail.items = initialItems;
                detail.isEdits = initialEdits;
                this.calcTotalPrice(detail);
                this.setState({detail, status: orderEntry.status})
            } else {
                this.resetState();
            }
        }
    }

    renderTitleElem(styles) {
        return (
            <div style={_.merge({}, styles.titleContent)}>
                <div style={_.merge({}, styles.col1, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailLeft}>V/No. Cost Item</span>
                </div>
                <div style={_.merge({}, styles.col2, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailLeft}>Remarks</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailRight}>Amount(RMB)</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.quotationDetailTitle)}>
                    <span style={styles.quotationDetailRight}>=(USD)</span>
                </div>
                {
                    this.props.hasUpload ?
                        <div style={_.merge({}, styles.uploadColumn, styles.quotationDetailTitle)}>
                            <span style={_.merge({}, {wordBreak: 'break-word', padding: '0 20px', display: 'block'})}>Invoice / Receipt / Document</span>
                        </div> : ''
                }

                <div style={_.merge({}, styles.col5, styles.quotationDetailTitle, {
                    padding: '5px 8px 0'
                })}>
                    {
                        this.props.isCanEdit ?
                            <Icon type="save" style={_.merge({}, styles.icon, {marginLeft: 6})}
                                  onClick={() => this.handlerSaveCostItems()}
                            /> : ''
                    }
                </div>
            </div>
        )
    }

    renderContentElem(styles) {
        const orderEntry = this.getOrderEntry();
        return (
            <div key={`content`} style={_.merge({}, styles.line, styles.productContent) }>
                <div style={_.merge({}, styles.col1, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailLeft}>
                        {orderEntry && orderEntry.product ? orderEntry.product.name : ''}
                    </span>
                </div>
                <div style={_.merge({}, styles.col2, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailLeft}>&nbsp;</span>
                </div>
                <div style={_.merge({}, styles.col3, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailRight}>{this.state.detail.total.totalAmountRMB}</span>
                </div>
                <div style={_.merge({}, styles.col4, styles.quotationDetailContent)}>
                    <span style={styles.quotationDetailRight}>{this.state.detail.total.totalAmountUSD}</span>
                </div>
                {
                    this.props.hasUpload ?
                        <div style={_.merge({}, styles.uploadColumn, styles.quotationDetailContent)}>
                            <span style={styles.quotationDetailLeft}>&nbsp;</span>
                        </div> : ''
                }
                <div
                    style={_.merge({}, styles.col5, styles.quotationDetailContent, styles.horizontalCenter)}>&nbsp;</div>
            </div>
        )
    }

    getOrderEntry() {
        let {orderEntry, isInquiryOrder} = this.props;
        return isInquiryOrder ? orderEntry.orderEntry : orderEntry;
    }

    getCostTypes() {
        const orderEntry = this.getOrderEntry();
        return orderEntry && orderEntry.productConfig ? orderEntry.productConfig.products[0].product.costTypes : [];
    }

    renderSubContentElem(styles) {
        const {items, isEdits} = this.state.detail;
        const {offerType} = this.props;
        const subContentElem = [];
        const costTypes = this.getCostTypes();
        items.map((item, i) => {
            const isEdit = isEdits[i];
            const dropDownCostItems = costTypes.map(costType => {
                // let isExists = _.find(items, obj_item => obj_item.costType == costType.costType._id);
                // if (isExists) {
                {/*return <Menu.Item disabled*/
                }
                // key={`${i}_${costType.costType._id}`}>{costType.costType.name}</Menu.Item>
                // } else {
                return <Menu.Item key={`${i}_${costType.costType._id}`}>{costType.costType.name}</Menu.Item>
                // }
            });

            const menu = <Menu onClick={this.handlerChangeProductItem.bind(this, i)}>{dropDownCostItems}</Menu>;
            const changeCostType = _.find(costTypes, obj_item => obj_item.costType._id == item.costType);
            const itemName = (
                <span
                    href="#"
                    style={_.merge({}, changeCostType ? styles.costItemDownChanged : styles.costItemDownDefault)}
                >
                    {changeCostType ? changeCostType.costType.name : this.props.selectPrompt}
                </span>
            );

            const itemNameElem = isEdit ?
                <Dropdown overlay={menu} trigger={['click']}>{itemName}</Dropdown> : itemName;
            const remarksElem = isEdit ?
                <Input type="textarea" autosize
                       onChange={this.handlerChangeRemark.bind(this, i)}
                       style={_.merge({}, styles.quotationDetailLeft, {color: '#9B9B9B'}, {width: '95%'})}
                       value={item.description}
                       placeholder={this.props.inputPrompt}/> :
                <span style={_.merge({}, styles.quotationDetailLeft, {color: '#9B9B9B'})}>{item.description}</span>;
            const RMBElem = isEdit ?
                <InputNumber disabled={offerType == 'RMB' ? false : true}
                             min={0} style={_.merge({}, styles.quotationDetailRight, {width: '70%'})}
                             onChange={this.handlerChangePrice.bind(this, i, 'rmb')}
                             value={item.amountRMB}
                             placeholder={'RMB'}/> :
                <span style={_.merge({}, styles.quotationDetailRight, {color: 'rgba(0,0,0,0.65)'})}>
                    {Number.parseFloat(item.amountRMB).toFixed(2)}
                </span>;
            const USDElem = isEdit ?
                <InputNumber disabled={offerType == 'USD' ? false : true}
                             min={0} style={_.merge({}, styles.quotationDetailRight, {width: '70%'})}
                             onChange={this.handlerChangePrice.bind(this, i, 'usd')}
                             value={item.amount}
                             placeholder={"USD"}/> :
                <span style={_.merge({}, styles.quotationDetailRight, {color: 'rgba(0,0,0,0.65)'})}>
                    {Number.parseFloat(item.amount).toFixed(2)}
                </span>;
            const uploadElem = <Upload>
                <Button disabled={!isEdit}><Icon type="upload"/>Upload</Button>
            </Upload>;
            const btnElem = [
                <Icon type="delete" style={_.merge({}, styles.icon)}
                      onClick={() => this.handlerDeleteCostItem(i)}/>
            ];
            if (!isEdit) {
                btnElem.push(
                    <Icon type="edit" style={_.merge({}, styles.icon, {marginLeft: 6})}
                          onClick={() => this.handlerEditCostItem(i)}/>
                );
            }

            subContentElem.push(
                <div key={`subContent_${i}`} style={_.merge({}, styles.line, styles.productContent)}>
                    <div style={_.merge({}, styles.col1, styles.quotationDetailSubContent, {paddingLeft: 10})}>
                        {itemNameElem}
                        {item.validateTitle ? '' :
                            <div style={styles.productPrompt}>{'not empty'}</div>}
                    </div>
                    <div style={_.merge({}, styles.col2, styles.quotationDetailSubContent)}>
                        {remarksElem}
                    </div>
                    <div style={_.merge({}, styles.col3, styles.quotationDetailSubContent)}>
                        {RMBElem}
                        {item.validateRMB ? '' :
                            <div
                                style={_.merge({}, styles.productPrompt)}>{`no empty`}</div>}
                    </div>
                    <div style={_.merge({}, styles.col4, styles.quotationDetailSubContent)}>
                        {USDElem}
                        {item.validateUSD ? '' :
                            <div
                                style={_.merge({}, styles.productPrompt)}>{`no empty`}</div>}
                    </div>
                    {
                        this.props.hasUpload ?
                            <div style={_.merge({}, styles.uploadColumn)}>
                                {uploadElem}
                            </div> : ''
                    }
                    <div style={_.merge({}, styles.col5, styles.quotationDetailSubContent, {
                        padding: '5px 8px 0'
                    })}>
                        {this.props.isCanEdit ? btnElem : ''}
                    </div>
                </div>
            )
        });
        return subContentElem;
    }

    renderAddButtonElem(styles) {
        return (
            <div style={_.merge({}, styles.line)}>
                <div style={styles.addContent} onClick={() => this.handlerAddCostItem()}>
                    <div style={styles.addCostText}>
                        <Icon type="plus" style={_.merge({}, styles.icon2)}/> Add Cost
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let styles = this.getStyles(this);

        return (
            <div>
                <div></div>
                <div style={styles.quotationDetail}>
                    {this.renderTitleElem(styles)}
                    {this.renderContentElem(styles)}
                    {this.renderSubContentElem(styles)}
                    {this.props.isCanEdit ? this.renderAddButtonElem(styles) : ''}
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        let {orderEntry} = this.props;
        if (orderEntry !== nextProps.orderEntry) {
            this.initData(nextProps.orderEntry);
        }
    }

    componentWillUnmount() {
        this.resetState();
    }

    resetState() {
        this.setState({
            isCanSave: false,
            detail: {
                total: {
                    totalAmountRMB: 0,
                    totalAmountUSD: 0
                },
                items: [],
                isEdits: [],
                status: 0
            }
        })
    }

    handlerAddCostItem() {
        const detail = this.state.detail;
        // if (detail.items.length < this.getCostTypes().length) {
        let defaultItem = {
            costType: '',
            validateTitle: true,
            description: '',
            amountRMB: 0,
            validateRMB: true,
            amount: 0,
            validateUSD: true,
        };
        detail.items.push(defaultItem);
        detail.isEdits.push(true);

        this.setState({detail, isCanSave: true})
        // }
    }

    handlerDeleteCostItem(i) {
        const detail = this.state.detail;
        detail.items.splice(i, 1);

        this.calcTotalPrice(detail);
        this.setState({detail, isCanSave: true})
    }

    handlerEditCostItem(i) {
        const detail = this.state.detail;
        detail.isEdits[i] = true;
        this.setState({detail, isCanSave: true})
    }

    handlerSaveCostItems() {
        let {detail, isCanSave} = this.state;
        if (!isCanSave) return;

        let isValidate = true;
        detail.items.map(item => {

            if (item.costType == '') {
                item.validateTitle = false;
            } else {
                item.validateTitle = true;
            }

            if (item.amountRMB == '' || item.amountRMB == '0.00') {
                item.validateRMB = false;
            } else {
                item.validateRMB = true;
            }

            if (item.amount == '' || item.amount == '0.00') {
                item.validateUSD = false;
            } else {
                item.validateUSD = true;
            }

            if ((!item.validateTitle || !item.validateRMB || !item.validateUSD) && isValidate) {
                isValidate = false;
            }
        });

        if (isValidate && (this.props.updateCostItems)) {

            const {quotationType, orderEntry} = this.props;
            const costItems = quotationType == 'estimated' ? orderEntry.costItemsEstimated : orderEntry.costItems;

            let newCostItems = [];
            detail.items.map((item, i) => {
                const costItem = costItems[i] ? costItems[i] : {};
                newCostItems.push(
                    _.merge(costItem, _.pick(item, ['amount', 'amountRMB', 'description', 'costType']))
                )
            });

            const amountName = quotationType == 'estimated' ? 'amountEstimated' : 'amountConfirmed';
            const costItemsName = quotationType == 'estimated' ? 'costItemsEstimated' : 'costItems';

            const params = {
                id: this.props.params && this.props.params.id,
                orderEntryId: this.props.orderEntry._id,
                [amountName]: Number.parseFloat(String(detail.total.totalAmountUSD)),
                [costItemsName]: newCostItems
            };

            detail.isEdits = _.fill(detail.isEdits, false);
            isCanSave = false;

            this.props.updateCostItems(params);
        }
        this.setState({detail, isCanSave});
    }

    handlerChangeProductItem(i, {key}) {
        const detail = this.state.detail;
        const item = detail.items[i];

        item.costType = key.split('_')[1];
        item.validateTitle = true;

        /*if (item.validateTitle && item.validateRMB && item.validateUSD) {
         item.delColor = '#4990E2';
         } else {
         item.delColor = '#9B9B9B';
         }*/

        detail.items[i] = item;
        this.setState({detail})
    }

    handlerChangeRemark(i, e) {
        const detail = this.state.detail;
        detail.items[i].description = e.target.value;

        this.setState({detail})
    }

    handlerChangePrice(i, type, value) {
        if (value == '') value = 0;
        const detail = this.state.detail;

        if (_.isNumber(value) || _.endsWith(value, '.')) {

            const item = detail.items[i];

            if (value == 0) {
                item.validateRMB = false;
                item.validateUSD = false;
            } else {
                item.validateRMB = true;
                item.validateUSD = true;
            }

            const currentExchange = this.props.currentExchange;
            if (type == 'RMB') {
                item.amountRMB = value;
                const USD = Number.parseFloat(value) / currentExchange;
                item.amount = USD.toFixed(2);
            } else {
                const RMB = Number.parseFloat(value) * currentExchange;
                item.amountRMB = RMB.toFixed(2);
                item.amount = value;
            }
            detail.items[i] = item;

            this.calcTotalPrice(detail);
        }
        this.setState({detail})
    }

    calcTotalPrice(detail) {
        let totalRMB = 0, totalUSD = 0;
        detail.items.forEach(item => {
            if (item.amountRMB) totalRMB += Number.parseFloat(item.amountRMB);
            if (item.amount) totalUSD += Number.parseFloat(item.amount);
        });
        detail.total.totalAmountRMB = totalRMB.toFixed(2);
        detail.total.totalAmountUSD = totalUSD.toFixed(2);
    }

}

export default EditTable;