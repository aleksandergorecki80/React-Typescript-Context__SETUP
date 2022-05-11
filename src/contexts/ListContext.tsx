import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useState } from 'react';


interface ExampleOneProps {
  children: React.ReactNode;
}

interface SingleItem {
  id: string; title: string; author: any
}

interface ArrayOfItems extends Array<SingleItem>{}

export type MyContextType = {
  list: ArrayOfItems | undefined;
  addElement: (title: string, author: string) => void;
  removeElement: (id: string) => void;
}

 export const ListContext = createContext<MyContextType | undefined>(undefined);
     
  export const ListContextProvider:React.FC<ExampleOneProps> = ({children}) => {

    const [ list, setList ] = useState<ArrayOfItems | undefined>(
      [
        { id: '0', title: 'Title one', author: 'John Doe' },
        { id: '1', title: 'Title Two', author: 'Max Smith' },
        { id: '2', title: 'Title Three', author: 'Jan Nowak' },
      ]

    );

    const addElement = (title: string, author: string) => {
      if(list !== undefined){
        setList([...list, {id: uuidv4(), title, author}]);
      }
    }

    const removeElement = (id: string) => {
      if(list !== undefined){
        setList(list.filter(item => id !== item.id ))
      }
    }

    return (
    <ListContext.Provider value={{ list, addElement, removeElement }}>
      {children ? children : <div>Loading...</div>}
    </ListContext.Provider>
  )};