import { ADD, CANDIDATELOGOUT } from '../types/candidateType';

const initialState = {
    candidate: {},

};

const candidateReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,
                request : action.payload
            }
        case CANDIDATELOGOUT :
            return initialState  

        default :
            return state
    }
};

export default candidateReducer;