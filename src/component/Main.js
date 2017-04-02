import React from 'react';

import Profile from './Profile';

// 解析JSON文件
let person = require('../config/person');

export default class Greeter extends React.Component {

    render() {

        let personExtends = {
            height: 170,
            weight: 70
        };

        person = {...person, ...personExtends};//对象的展开操作
        console.log(person);

        return (
            <Profile {...person}/>
        );
    }
}
