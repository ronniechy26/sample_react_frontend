import { TYPES } from './actionCreator';
const INITIAL_STATE = {
    data : []
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case TYPES.LIST_DATA : {
            const newData = action.payload;
            return { ...state, data : newData }
        }      

        default : return state;
    }
}