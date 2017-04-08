/**
 * Created by songzhongkun on 17/4/2.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as ActionsCreators from '../../action/Profile';

import styles from '../../styles/greeter.css';
import Hobby from './Hobby';

import DevTools from "../../container/DevTools";

@connect(
    state => ({
        hobbies: state.hobbies
    }),
    ActionsCreators
)


export default class Profile extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    };

    static defaultProps = {
        name: 'peter',
        age: 27
    };

    constructor(props) {
        super(props);
        this.state = {
            liked: 0
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={styles.name}>我的名字叫 {this.props.name}</h1>
                <h2>我今年 {this.props.age} 岁</h2>
                <button onClick={this.likedCallback}>给我点赞</button>
                <h2>总点赞数： {this.state.liked}</h2>
                <h2>我的爱好：</h2>
                <ul>
                    {this.props.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" defaultValue="爬山" ref="hobby"/>&nbsp;&nbsp;
                <button onClick={this.addHobbyCallback}>添加爱好</button>
                &nbsp;&nbsp;
                <button onClick={this.props.undo}>撤销</button>
                &nbsp;&nbsp;
                <button onClick={this.props.redo}>重做</button>
                <DevTools />
            </div>
        );
    }

    likedCallback() {
        this.setState({
            liked: ++this.state.liked
        });
    }

    addHobbyCallback() {
        const hobbyInput = this.refs.hobby;
        const val = hobbyInput.value;
        if (val) {
            this.props.addHobby(val);
            // hobbyInput.value = '';
        }
    }
}