import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';

const rootReducer = combineReducers({
    'dummyReducerState': dummyReducer
});

export default rootReducer;