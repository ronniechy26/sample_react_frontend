import {combineReducers} from 'redux';
import infoReducer from '../../modules/main/reducer';

const defaultReducer = combineReducers({
    information : infoReducer
});

export default defaultReducer;