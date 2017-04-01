import React from 'react';

import {text} from '../config/config';
import styles from '../styles/greeter.css';

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
                <span className={styles.peter}>{text} peter2 123456789...</span>
                <span className={styles.peter}>{JSON.stringify(person)}</span>
            </div>
        );
    }
}
