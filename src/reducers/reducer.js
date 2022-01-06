

//reducer

import { inputdata } from "../actions/index";
const initialState = { inputdata }

const login = (state = initialState, action) => {

    switch (action.type) {
        case "INPUT_DATA":
        return action.payload

        default: return state;

    }

    // if(action.type === 'INPUT_DATA'){
    //     return action.payload
    // }
    //  return state
}

export default login;





