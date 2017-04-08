/**
 * Created by songzhongkun on 17/4/8.
 */

import Header from '../component/profile/Header';
import {connect} from 'react-redux';

import * as ActionsCreators from '../action/Profile';

export default connect(
    state => ({
        hobbies: state.hobbies
    }),
    ActionsCreators
)(Header)