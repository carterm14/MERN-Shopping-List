import uuid from 'uuid';
import  { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';


const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Water' }
    ]
};

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
            ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.item.state.items.filter(currItem => currItem.id !== action.payload) // my state is all fucked up
            }
        default:
            return {
                state
            }
    }
}