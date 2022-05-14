

import { ListAction } from '../types/listTypes';
import { ArrayOfItems } from '../types/listTypes'

export const listReducer = (state: ArrayOfItems, action: ListAction) => {
    switch(action.type) {
        case 'ADD_ELEMENT':
            return [
                ...state, {
                    id: action.payload.id,
                    title: action.payload.title,
                    author: action.payload.author,
                }
            ];
        case 'REMOVE_ELEMENT':
            return state.filter(element => element.id !== action.payload.id)

        default: 
            return state;

    }
}