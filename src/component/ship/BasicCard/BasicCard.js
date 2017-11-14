/**
 * Created by songzhongkun on 2017/5/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BasicCardItem from './BasicCardItem';

class BasicCard extends React.Component {

    getStyles(content) {
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
                padding: 20,
            },

            blueFont: {
                fontWeight: 400,
                fontSize: 14,
                color: '#4990e2',
            },

            commonTable: {
                marginTop: content.props.marginTop,
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


    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.array,
        star: PropTypes.bool,
        subTable: PropTypes.bool,
        width: PropTypes.string,
        maxIndex: PropTypes.number,
        leftWidth: PropTypes.number,
        rightWidth: PropTypes.number,
        marginTop: PropTypes.number
    };

    static defaultProps = {
        title: 'title',
        data: [],
        star: false,
        subTable: false,
        width: '48%',
        maxIndex: 1,
        leftWidth: 100,
        rightWidth: 100,
        marginTop: 24,
    };

    constructor(props) {
        super(props);
        this.state = {
            isShows: []
        }
    }

    render() {
        const styles = this.getStyles(this);
        const {
            title, data, star, width, maxIndex, leftWidth, rightWidth, subTable
        } = this.props;
        const {isShows} = this.state;

        return (
            <div style={_.merge({}, styles.commonTable, subTable ? {} : {border: '1px solid #D9D9D9'})}>
                <div style={_.merge({}, subTable ? styles.boldFont : styles.commonTableTitle)}>{title}</div>
                <div style={_.merge({}, styles.commonTableContent, styles.verticalCenter, {flexWrap: 'wrap'})}>
                    {
                        data.map((item, index) => {
                            let show = isShows[index];
                            if (show == undefined) show = false;
                            const props = {
                                title, item, star, show, width, index, maxIndex, leftWidth, rightWidth,
                                onMouseOver: this.handlerMouse.bind(this, index),
                                onMouseLeave: this.handlerMouse.bind(this, index),
                            };
                            return <BasicCardItem key={index} {...props}/>
                        })
                    }
                </div>
            </div>
        )
    }

    handlerMouse(index, show) {
        let isShows = _.cloneDeep(this.state.isShows);
        if (!isShows.length) {
            const {data} = this.props;
            isShows = new Array(data.length);
            isShows = _.fill(isShows, false);
        }
        isShows[index] = show;
        this.setState({isShows})
    }
}

export default BasicCard;