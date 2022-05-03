import React, { createContext, useState } from 'react';

interface AppContextInterface {
    name: string;
    isLoggedIn: boolean;
  }

interface ExampleTwoProps {
  children: React.ReactNode;
}
  
 export const ExampleTwoContext = createContext<AppContextInterface | null>(null);
     
  export const ExampleTwoProvider:React.FC<ExampleTwoProps> = ({children}) => {

    const [ state, setState ] = useState<AppContextInterface | null>(
      {
          name: "John Doe",
          isLoggedIn: true
        }

    );

    return (
    <ExampleTwoContext.Provider value={state}>
      {children ? children : <div>Loading...</div>}
    </ExampleTwoContext.Provider>
  )};