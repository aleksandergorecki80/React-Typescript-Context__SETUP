import React, { createContext } from 'react';
import { useList } from '../useList';
import { ListAction } from '../types/listTypes';


interface ExampleOneProps {
  children: React.ReactNode;
}

interface SingleItem {
  id: string; title: string; author: any
}

interface ArrayOfItems extends Array<SingleItem>{}

export type MyContextType = {
  list: ArrayOfItems | undefined;
  listDispatch: React.Dispatch<ListAction>
}

 export const ListContext = createContext<MyContextType | undefined>(undefined);
     
  export const ListContextProvider:React.FC<ExampleOneProps> = ({children}) => {


    const [ list, listDispatch ] = useList();

    return (
    <ListContext.Provider value={{ list, listDispatch }}>
      {children ? children : <div>Loading...</div>}
    </ListContext.Provider>
  )};