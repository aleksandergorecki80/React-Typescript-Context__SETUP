import React, { createContext, useState } from 'react';

interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }

interface ExampleOneProps {
  children: React.ReactNode;
}
  
 export const ExampleOneContext = createContext<AppContextInterface | null>(null);
  
  
  
  export const ExampleOneProvider:React.FC<ExampleOneProps> = ({children}) => {

    const [ state, setState ] = useState<AppContextInterface | null>(
      {
          name: "Using React Context in a Typescript App",
          author: "thehappybug",
          url: "http://www.example.com",
        }

    );

    return (
    <ExampleOneContext.Provider value={state}>
      {children ? children : <div>Loading...</div>}
    </ExampleOneContext.Provider>
  )};