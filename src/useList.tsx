import React, { useReducer } from 'react';

import { listReducer } from "./reducers/listReducer";
import { ArrayOfItems, ListAction } from './types/listTypes';

export const useList = (): [ArrayOfItems, React.Dispatch<ListAction>] => {

    const [ state, dispatch ] = useReducer(listReducer, [])

    return [ state, dispatch ]
}