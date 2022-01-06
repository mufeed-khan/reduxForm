
//rootRoducer

import login from "./reducer";

import {combineReducers} from 'redux'


const rootReducer=combineReducers({
    login,
})

export default rootReducer