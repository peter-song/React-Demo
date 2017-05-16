/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';

import _ from 'lodash';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    getStyles() {

        let styles = {
            cardContent: {
                padding: 10,
                background: '#FFFFFF',
                border: '1px solid #E9E9E9',
                marginBottom: 10,
            },

            productContent: {
                float: 'left',
                textAlign: 'center',
                width: 90,
                height: 100,
                padding: 10,
                cursor: 'pointer',
            },

            productImgBg: {
                width: 40,
                height: 40,
                borderRadius: 20,
                background: '#00599A',
                margin: '0 auto',
            },

            productImg: {
                width: 24,
                height: 24,
                marginTop: 8,
            },

            productText: {
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(0,0,0,0.65)',
                letterSpacing: 0,
                marginTop: 5,
                display: 'inline-block',
            },

            moreDetail: {
                float: 'right',
                fontWeight: 400,
                fontSize: 14,
                color: '#4990E2',
                letterSpacing: 0,
                cursor: 'pointer',
            },

            clear: {
                clear: 'both'
            }
        };

        return styles;
    }

    renderCardElem(styles, products = []) {
        let cardElem = [];
        products.map((item, i) => {
            cardElem.push(
                <div key={`product_${i}`} style={styles.productContent}>
                    <div style={styles.productImgBg}>
                        <img style={styles.productImg} src="home.svg"/>
                    </div>
                    <span style={styles.productText}>{item.name}</span>
                </div>
            );
        });

        return <div>{cardElem}</div>
    }

    renderMoreDetails(styles) {

        return (
            <div style={_.merge({}, styles.moreDetail, styles.clear)}>More Details ></div>
        )
    }

    render() {

        const styles = this.getStyles();

        const products = this.props.products;

        return (
            <div style={styles.cardContent}>
                {this.renderCardElem(styles, products)}
                {this.renderMoreDetails(styles)}
                <div style={styles.clear}></div>
            </div>
        )
    }
}