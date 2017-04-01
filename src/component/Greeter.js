import React from 'react';

import {text} from '../config/config';
// import styles from '../styles/greeter.css';

import a from '../styles/greeter2.css';
import b from '../styles/greeter.css';

export default class Greeter extends React.Component {

    render() {

        let person = {
            name: 'peter',
            age: 27
        };

        let personExtends = {
            height: 170,
            weight: 70
        };

        person = {...person, ...personExtends};
        console.log(person);

        return (
            <div>
                <span className={a.peter}>{text} peter2 123456789...</span>
                <span className={b.peter}>{JSON.stringify(person)}</span>
            </div>
        );
    }
}
