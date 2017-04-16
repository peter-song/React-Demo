/**
 * Created by songzhongkun on 17/4/2.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as ActionsCreators from '../../redux/reducers/profile';

import styles from '../../styles/greeter.css';
import Hobby from './Hobby';

let person = require('../../config/person');

import DevTools from "../DevTools/DevTools";

@connect(
    state => ({
        hobbies: state.hobby.hobbies,
        isFetching: state.hobby.isFetching
    }),
    ActionsCreators
)

export default class Profile extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    };

    static defaultProps = {
        name: person.name,
        age: person.age
    };

    constructor(props) {
        super(props);
        this.state = {
            liked: 0
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    componentDidMount(){
        this.props.findHobbies();
    }

    render() {
        let hobbies = this.props.hobbies;
        hobbies = hobbies == undefined ? [] : hobbies;

        return (
            <div>
                <h1 className={styles.name}>我的名字叫 {this.props.name}</h1>
                <h2>我今年 {this.props.age} 岁</h2>
                <button onClick={this.likedCallback}>给我点赞</button>
                <h2>总点赞数： {this.state.liked}</h2>
                <h2>我的爱好：</h2>
                <ul>
                    {hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" defaultValue="爬山" ref="hobby"/>&nbsp;&nbsp;
                <button onClick={this.addHobbyCallback}>添加爱好</button>
                &nbsp;&nbsp;
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
            this.props.addHobby({text: val});
            // hobbyInput.value = '';
        }
    }
}