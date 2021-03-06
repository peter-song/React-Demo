/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Input, Button} from 'antd';

import * as ActionsCreators from '../../redux/reducers/profile';
const person = require('../../../static/config/person');
import headImg from '../../../static/img/head-portrait.jpg';
import Hobby from './Hobby';

import '../common.scss';

@connect(
  state => ({
    hobbies: state.hobby.hobbies,
    isFetching: state.hobby.isFetching,
  }),
  ActionsCreators
)

class Profile extends React.Component {

  getStyles() {

    const styles = {

      content: {
        padding: 20,
      },

      headContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      infoContent: {
        display: 'flex',
      },

      img: {
        width: 150,
        height: 150,
      },

    };

    return styles;
  }


  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    findHobbies: PropTypes.func,
    addHobby: PropTypes.func,
  };

  static defaultProps = {
    name: person.name,
    age: person.age,
  };

  state = {
    liked: 0,
    hobby: '爬山',
  };

  componentDidMount() {
    this.props.findHobbies();
  }

  render() {
    const styles = this.getStyles();

    let hobbies = this.props.hobbies;
    hobbies = hobbies == undefined ? [] : hobbies;

    return (
      <div style={styles.content}>
        <div style={_.merge({}, styles.headContent)}>
          <div className="basicInfo">BasicInfo</div>
        </div>
        <div style={_.merge({}, styles.infoContent)}>
          <div>
            <div style={{marginTop: 10}}>
              <h1 className="name">我的名字叫 {this.props.name}</h1>
              <h2 className="color">我今年 {this.props.age} 岁</h2>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
              <Button onClick={this.likedCallback.bind(this)}>给我点赞</Button>
              <div style={{marginLeft: 10}}>总点赞数： {this.state.liked}</div>
            </div>
            <div style={{marginTop: 10}}>
              <h2>我的爱好：</h2>
              <div>
                <ul>
                  {hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <div style={{display: 'flex', marginTop: 10}}>
                  <Input
                    type="text" placeholder="输入爱好" value={this.state.hobby}
                    onChange={this.handlerChangeHobby.bind(this)}/>
                  <Button
                    style={{marginLeft: 10}}
                    onClick={this.addHobbyCallback.bind(this)}
                  >
                    添加爱好
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={headImg} style={styles.img}/>
          </div>
        </div>
        <div className="book">
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
    let liked = this.state.liked;
    this.setState({
      liked: ++liked,
    });
  }

  handlerChangeHobby(e) {
    this.setState({hobby: e.target.value});
  }

  addHobbyCallback() {
    const hobby = this.state.hobby;
    if (hobby) {
      this.setState({hobby: ''}, this.props.addHobby({text: hobby}));
    }
  }
}

export default Profile;