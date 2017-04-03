/**
 * Created by songzhongkun on 17/4/2.
 */
import React, {PropTypes} from 'react';

import styles from '../styles/greeter.css';
import Hobby from './Hobby';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

const defaultProps = {
    age: 27
};

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['听音乐', '打篮球']
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
                    {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" ref="hobby"/>&nbsp;&nbsp;
                <button onClick={this.addHobbyCallback}>添加爱好</button>
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
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            });
        }
    }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;