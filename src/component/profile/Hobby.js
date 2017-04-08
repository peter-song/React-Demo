/**
 * Created by songzhongkun on 17/4/2.
 */
import React, {PropTypes} from 'react';

const propTypes = {
    hobby: PropTypes.string.isRequired
};

export default function Hobby(props) {//无状态函数式组件,直接返回
    return <li>{props.hobby}</li>;
}

Hobby.propTypes = propTypes;