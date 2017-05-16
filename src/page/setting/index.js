/**
 * Created by songzhongkun on 2017/5/16.
 */

import React from 'react';

import Other from '../../component/form/other';
import Crew from '../../component/form/crew-see-doctor';

export default class Setting extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            other: {
                edit: true,
                requires: 'other'
            },
            agm: {
                edit: true,
                requires: 'agm'
            },
            crew: {
                edit: true,
                requires: 'agm',
                numberOfPeople: 1
            }
        }
    }

    render() {
        const {other, agm, crew} = this.state;
        const style = {
            margin: '20px 70px',
            paddingTop: 20,
            border: '1px solid #c9ccd9'
        };

        return (
            <div>
                <div style={style}>
                    <Other info={other} edit={other.edit} onSubmit={this.onSubmitOther.bind(this)}/>
                </div>
                <div style={style}>
                    <Crew info={crew} edit={crew.edit} onSubmit={this.onSubmitCrew.bind(this)}/>
                </div>
            </div>
        )
    }

    onSubmitOther({requires}) {
        const other = this.state.other;

        if (other.edit)
            other.requires = requires;

        other.edit = !other.edit;

        this.setState({
            other
        })
    }

    onSubmitCrew({numberOfPeople, requires}) {
        const crew = this.state.crew;

        if (crew.edit) {
            crew.requires = requires;
            crew.numberOfPeople = numberOfPeople;
        }

        crew.edit = !crew.edit;

        this.setState({
            crew
        })
    }
}