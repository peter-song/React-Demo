/**
 * Created by songzhongkun on 17/4/2.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as ActionsCreators from '../../redux/reducers/profile';

import styles from '../../../static/styles/greeter.css';
import styles2 from '../../../static/styles/test.scss';
let person = require('../../../static/config/person');
let headImg = require('../../../static/img/head-portrait.jpg');

import Hobby from './Hobby';

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

    componentDidMount() {
        this.props.findHobbies();
    }

    render() {
        let hobbies = this.props.hobbies;
        hobbies = hobbies == undefined ? [] : hobbies;

        return (
            <div>
                <div className={styles.contentLeft}>
                    <h1 className={styles.name}>我的名字叫 {this.props.name}</h1>
                    <h2 className={styles2.color}>我今年 {this.props.age} 岁</h2>
                    <button onClick={this.likedCallback}>给我点赞</button>
                    <h2>总点赞数： {this.state.liked}</h2>
                    <h2>我的爱好：</h2>
                    <ul id="hobby">
                        {hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                    </ul>
                    <input type="text" defaultValue="爬山" ref="hobby"/>&nbsp;&nbsp;
                    <button onClick={this.addHobbyCallback}>添加爱好</button>
                    <button onClick={() => this.createPdf()}>DownLoad PDF</button>
                </div>
                <div className={styles.contentRight}>
                    <img src={headImg}/>
                </div>
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

    createPdf() {
        console.log('create pdf');

        // let h2c = require('html2canvas');
        let jsPDF = require('jspdf');

        let pdf = new jsPDF('p', 'pt', 'a4');
        let options = {
            pagesplit: true
        };
        
        let hobby = document.getElementsByTagName('body')[0];
        pdf.addHTML(hobby, options, function () {
            pdf.save("test.pdf");
        });

    }
}