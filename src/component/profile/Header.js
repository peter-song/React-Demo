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
            <div id="content" className={styles.content}>
                <div id="title" style={{margin: 20, display: 'none'}}>
                    <div className={styles.basicInfo}>Title</div>
                    <img className={styles.logo} src={headImg}/>
                    <div className={styles.clear}></div>
                </div>
                <div style={{margin: 20}}>
                    <div className={styles.basicInfo}>BasicInfo</div>
                    <div id="download" className={styles.downloadBtn} onClick={() => this.createPdf()}>DownLoad PDF</div>
                </div>
                <div className={styles.clear}></div>
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
                </div>
                <div className={styles.contentRight}>
                    <img src={headImg}/>
                </div>
                <div id="book" className={styles.book}>
                    <p>飞狐外传</p>
                    <p>雪山飞狐</p>
                    <p>连城诀</p>
                    <p>天龙八部</p>
                    <p>射雕英雄传</p>
                    <p>白马啸西风</p>
                    <p>鹿鼎记</p>
                    <p>笑傲江湖</p>
                    <p>书剑恩仇录</p>
                    <p>神雕侠侣</p>
                    <p>侠客行</p>
                    <p>倚天屠龙记</p>
                    <p>碧血剑</p>
                    <p>鸳鸯刀</p>
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

        let pdf = new jsPDF('p', 'mm', 'a4');
        let options = {
            pagesplit: true
        };

        let hobby = document.getElementById('content');
        hobby.style.background = '#dae3ff';
        hobby.style.padding = '20px';
        console.log(hobby);

        let book = document.getElementById('book');
        book.style.height = 'auto';
        // console.log(book);

        let downloadBtn = document.getElementById('download');
        downloadBtn.style.display = 'none';

        let title = document.getElementById('title');
        title.style.display = 'block';

        pdf.addHTML(hobby, options, function () {
            pdf.save("test.pdf");
            book.style.height = '200px';
            downloadBtn.style.display = 'block';
            title.style.display = 'none';
        });
    }
}