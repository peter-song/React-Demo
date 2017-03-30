import React from 'react';

import {text} from '../config/config';
import styles from '../styles/greeter.css';

class Greeter extends React.Component {
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

        return (
            <div>
                <span className={styles.peter}>{text}</span>
                <span className={styles.peter}>{JSON.stringify(person)}</span>
            </div>
        );
    }
}

export default Greeter
