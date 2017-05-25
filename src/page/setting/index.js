/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';

import ConfigForm from '../../component/form';
import Other from '../../component/form/other';
import Crew from '../../component/form/crew-see-doctor';

export default class Setting extends React.Component {

    static propTypes = {
        products: React.PropTypes.array
    };

    static defaultProps = {
        products: [
            {
                title: 'Other',
                data: {
                    requires: 'other'
                },
                code: 'OTHER'
            },
            {
                title: 'Crew See Doctor',
                data: {
                    requires: 'crew',
                    numberOfPeople: 0
                },
                code: 'CREW'
            }
        ]
    };


    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: 'Other',
                data: {
                    requires: 'other'
                },
                code: 'OTHER'
            },
            showBtn: true,
            edit: false
        }
    }

    render() {
        const style = {
            margin: '20px 70px',
            padding: 10,

        };

        const props = {
            showBtn: this.state.showBtn,
            edit: this.state.edit,
            title: this.state.product.title,
            formData: this.state.product.data
        };

        let ProductForm = Other;
        if (this.state.product.code == 'CREW') {
            ProductForm = Crew;
        }

        console.log(props.formData);

        return (
            <div style={style}>
                <div>
                    {
                        this.props.products.map((item, i) => {
                            return (
                                <span style={{marginLeft: 10, cursor: 'pointer'}}
                                      onClick={this.handChangeItem.bind(this, i)}
                                >
                                    {item.code}
                                </span>
                            )
                        })
                    }
                </div>
                <div style={{border: '1px solid #c9ccd9', marginTop: 20}}>
                    <ProductForm {...props}
                                 onSubmit={this.handleSubmit.bind(this)}
                                 onEditCancel={this.handlerEditCancel.bind(this)}
                    />
                </div>
            </div>
        )
    }

    handChangeItem(i) {
        const products = this.props.products;
        this.setState({
            product: products[i]
        })
    }

    //点击保存
    handleSubmit(values) {
        console.log(this.state.product.code, values);
        const product = this.state.product;
        product.data = values;
        this.setState({edit: false, product})
    }

    //编辑和取消
    handlerEditCancel(edit) {
        this.setState({edit})
    }

}