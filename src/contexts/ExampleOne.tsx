import React, { createContext } from 'react';

interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }

interface ExampleOneProps {
  children: React.ReactNode;
}
  
 export const ExampleOneContext = createContext<AppContextInterface | null>(null);
  
  // Provider in your app
  
  const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };
  
  export const ExampleOneProvider:React.FC<ExampleOneProps> = ({children}) => {
    return (
    <ExampleOneContext.Provider value={sampleAppContext}>
      {children ? children : <div>Loading...</div>}
    </ExampleOneContext.Provider>
  )};