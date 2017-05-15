/**
 * Created by songzhongkun on 2017/5/12.
 */
import React from 'react';

import _ from 'lodash';

export default class Card extends React.Component {

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
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
                width: 80,
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
                fontFamily: 'Roboto-Regular',
                fontSize: 12,
                color: 'rgba(0,0,0,0.65)',
                letterSpacing: 0,
            },

            moreDetail: {
                float: 'right',
                fontFamily: 'Roboto-Regular',
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

    renderCardElem(styles) {
        let cardElem = [];
        [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            cardElem.push(
                <div style={styles.productContent}>
                    <div style={styles.productImgBg}>
                        <img style={styles.productImg} src="home.svg"/>
                    </div>
                    <span style={styles.productText}>Spare Part Delivery</span>
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

        let styles = this.getStyles();
        return (
            <div style={styles.cardContent}>
                {this.renderCardElem(styles)}
                {this.renderMoreDetails(styles)}
                <div style={styles.clear}></div>
            </div>
        )
    }
}