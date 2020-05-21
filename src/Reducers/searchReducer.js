import {SEARCH_COUNTRY, FETCH_COUNTRY} from '../Actions/types';

const initialState = {
    country : "",
    data : []
}

export default function(state= initialState, action){
    switch(action.type){
        case SEARCH_COUNTRY:
            return{
                ...state,
                country: action.payload
            }
        case FETCH_COUNTRY:
            return{
                ...state,
                data: action.payload
            }
        default :
            return state    
    }
}